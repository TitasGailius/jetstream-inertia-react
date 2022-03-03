import React from "react"
import { useForm } from "@inertiajs/inertia-react"
import route from "ziggy-js"
import { Head } from "@inertiajs/inertia-react"

import { Page } from "types/App"
import Label from "jetstream/Label"
import Input from "jetstream/Input"
import Button from "jetstream/Button"
import ValidationErrors from "jetstream/ValidationErrors"
import AuthenticationCard from "jetstream/AuthenticationCard"
import AuthenticationCardLogo from "jetstream/AuthenticationCardLogo"

const ConfirmPassword: Page = () => {
    const form = useForm({
        password: '',
    })

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        form.post(route('password.confirm'))
    }

    return (
        <AuthenticationCard logo={AuthenticationCardLogo}>
            <Head title="Secure Area" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your password before continuing.
            </div>

            <ValidationErrors />

            <form onSubmit={submit}>
                <div>
                    <Label htmlFor="password" children="Password" />
                    <Input
                        id="password"
                        type="password"
                        className="mt-1 block w-full"
                        value={}
                        v-model="form.password"
                        required
                        autoComplete="current-password"
                        autoFocus
                    />
                </div>

                <div className="flex justify-end mt-4">
                    <Button className={`ml-4 ${form.processing && 'opacity-25'}`} disabled={form.processing}>
                        Confirm
                    </Button>
                </div>
            </form>
        </AuthenticationCard>
    )
}

export default ConfirmPassword
