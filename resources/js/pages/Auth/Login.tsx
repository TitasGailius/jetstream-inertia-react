import React from "react"
import route from "ziggy-js"
import { InertiaLink, useForm } from "@inertiajs/inertia-react"

import Button from "jetstream/Button"
import Checkbox from "jetstream/Checkbox"
import FormInput from "jetstream/FormInput"
import AuthenticationCard from "components/AuthenticationCard"

interface Props {
    status?: string
}

const Login: React.FC<Props> = ({ status }) => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        post(route('login'))
    }

    return (
        <AuthenticationCard>
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
            )}

            <form onSubmit={submit}>
                <FormInput
                    label="Email"
                    type="email"
                    error={errors.email}
                    value={data.email}
                    onChange={event => setData('email', event.target.value)}
                />

                <FormInput
                    label="Password"
                    type="password"
                    error={errors.password}
                    value={data.password}
                    onChange={event => setData('password', event.target.value)}
                />

                <div className="block">
                    <label className="flex items-center">
                        <Checkbox
                            value={Number(data.remember)}
                            onChange={event => setData('remember', Boolean(event.target.value))}
                        />

                        <span className="ml-2 text-sm text-gray-600">Remember Me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <InertiaLink href="/forgot-password" className="underline text-sm text-gray-600 hover:text-gray-900">
                        Forgot your password?
                    </InertiaLink>

                    <Button className={`${processing && 'opacity-25'} ml-4`} disabled={processing}>
                        Login
                    </Button>
                </div>
            </form>
        </AuthenticationCard>
    )
}

export default Login
