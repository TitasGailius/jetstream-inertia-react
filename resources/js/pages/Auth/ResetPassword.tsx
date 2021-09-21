import React from "react"
import route from "ziggy-js"
import { useForm } from "@inertiajs/inertia-react"

import Button from "jetstream/Button"
import FormInput from "jetstream/FormInput"
import AuthenticationCard from "components/AuthenticationCard"

interface Props {
    email: string
    token: string
}

const ResetPassword: React.FC<Props> = ({ email, token }) => {
    const { data, setData, post, processing, errors } = useForm({
        token,
        email: email,
        password: '',
        password_confirmation: '',
    })

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        post(route('password.update'))
    }

    return (
        <AuthenticationCard>
            <form onSubmit={submit}>
                <FormInput
                    type="email"
                    label="Email"
                    value={data.email}
                    onChange={event => setData('email', event.target.value)}
                    error={errors.email}
                    required
                />

                <FormInput
                    type="password"
                    label="Password"
                    value={data.password}
                    onChange={event => setData('password', event.target.value)}
                    error={errors.password}
                    required
                    autoFocus
                />

                <FormInput
                    type="password"
                    label="Confirm Password"
                    value={data.password_confirmation}
                    onChange={event => setData('password_confirmation', event.target.value)}
                    error={errors.password_confirmation}
                    required
                />

                <div className="flex items-center justify-end mt-4">
                    <Button type="submit" className={`${processing && 'opacity-25'}`} disabled={processing}>
                        Reset Password
                    </Button>
                </div>
            </form>
        </AuthenticationCard>
    )
}

export default ResetPassword
