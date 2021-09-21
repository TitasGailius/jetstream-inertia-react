import React from "react"
import route from "ziggy-js"
import { useForm } from "@inertiajs/inertia-react"

import Button from "jetstream/Button"
import FormInput from "jetstream/FormInput"
import AuthenticationCard from "components/AuthenticationCard"

interface Props {
    status?: string
}

const ForgotPassword: React.FC<Props> = ({ status }) => {
    const { data, setData, post, errors, processing } = useForm({
        email: '',
    })

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        post(route('password.email'))
    }

    return (
        <AuthenticationCard>
            <div className="mb-4 text-sm text-gray-500 leading-normal">
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <FormInput
                    type="email"
                    label="Email"
                    value={data.email}
                    onChange={event => setData('email', event.target.value)}
                    error={errors.email}
                    required
                />

                <div className="flex items-center justify-end mt-4">
                    <Button className={`${processing && 'opacity-25'}`} disabled={processing}>
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </AuthenticationCard>
    )
}

export default ForgotPassword
