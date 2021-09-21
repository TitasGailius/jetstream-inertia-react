import React from "react"
import route from "ziggy-js"
import { InertiaLink, useForm } from "@inertiajs/inertia-react"

import Button from "jetstream/Button"
import FormInput from "jetstream/FormInput"
import AuthenticationCard from "components/AuthenticationCard"

const Register: React.FC = () => {
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        post(route('register'))
    }

    return (
        <AuthenticationCard>
            <form onSubmit={submit}>
                <FormInput
                    type="text"
                    label="Name"
                    value={data.name}
                    error={errors.name}
                    onChange={event => setData('name', event.target.value)}
                />

                <FormInput
                    type="email"
                    label="Email"
                    value={data.email}
                    error={errors.email}
                    onChange={event => setData('email', event.target.value)}
                />

                <FormInput
                    type="password"
                    label="Password"
                    value={data.password}
                    error={errors.password}
                    onChange={event => setData('password', event.target.value)}
                />

                <FormInput
                    type="password"
                    label="Confirm Password"
                    value={data.password_confirmation}
                    error={errors.password_confirmation}
                    onChange={event => setData('password_confirmation', event.target.value)}
                />

                <div className="flex items-center justify-end mt-8">
                    <InertiaLink href="/login" className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </InertiaLink>

                    <Button className={`${processing && 'opacity-25'} ml-4`} disabled={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </AuthenticationCard>
    )
}

export default Register
