import React, { ReactNode, useRef, useState } from "react"
import axios from "axios"
import route from "ziggy-js"

import Input from "./Input"
import Button from "./Button"
import InputError from "./InputError"
import DialogModal from "./DialogModal"

interface Props {
    title?: ReactNode
    content?: ReactNode
    button?: string
    onConfirm?: () => void
}

const ConfirmsPassword: React.FC<Props> = ({ title, content, button = 'Confirm', onConfirm, children }) => {
    const passwordEl = useRef<HTMLInputElement>(null)
    const [confirmingPassword, setConfirmingPassword] = useState(false)
    const [processing, setProcessing] = useState(false)

    const [form, setForm] = useState({
        password: '',
        error: '',
    })

    const startConfirmingPassword = () => {
        axios.get(route('password.confirmation')).then(response => {
            if (response.data.confirmed) {
                onConfirm && onConfirm()
            } else {
                setConfirmingPassword(false)

                setTimeout(() => passwordEl?.current?.focus(), 250)
            }
        })
    }

    const confirmPassword = () => {
        setProcessing(true)

        axios.post(route('password.confirm'), {
            password: this.form.password,
        }).then(() => {
            setProcessing(false)
            closeModal()
            onConfirm && onConfirm()
        }).catch(error => {
            setProcessing(false)
            setForm(form => ({ ...form, error: error.response.data.errors.password[0] }))
            passwordEl?.current?.focus()
        });
    }

    const confirmPasswordOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            confirmPassword()
        }
    }

    const closeModal = () => {
        setConfirmingPassword(false)
        setForm({ password: '', error: '' })
    }

    return (
        <span>
            <span onClick={startConfirmingPassword}>
                {children}
            </span>

            <DialogModal
                show={confirmingPassword}
                onClose={closeModal}
                title={title}
                content={(
                    <>
                        {content}

                        <div className="mt-4">
                            <Input
                                type="password"
                                className="mt-1 block w-3/4"
                                placeholder="Password"
                                ref={passwordEl}
                                value={form.password}
                                onChange={e => setForm(form => ({ ...form, password: e.target.value }))}
                                onKeyDown={confirmPasswordOnEnter}
                            />

                            <InputError message={form.error} className="mt-2" />
                        </div>
                    </>
                )}
                footer={(
                    <>
                        <Button onClick={closeModal}>
                            Cancel
                        </Button>

                        <Button className={`ml-2 ${processing && 'opacity-25'}`} onClick={confirmPassword} disabled={processing}>
                            {button}
                        </Button>
                    </>
                )}
            />
        </span>
    )
}

export default ConfirmsPassword
