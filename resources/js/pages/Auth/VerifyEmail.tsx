import React from "react"
import route from "ziggy-js"
import { Link, useForm } from "@inertiajs/inertia-react"

import Button from "jetstream/Button"
import AuthenticationCard from "jetstream/AuthenticationCard"
import AuthenticationCardLogo from "jetstream/AuthenticationCardLogo"

interface Props {
    status: string
}

const VerifyEmail: React.FC<Props> = ({ status }) => {
    const form = useForm({})

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        form.post(route('verification.send'))
    }

    return (
        <AuthenticationCard logo={AuthenticationCardLogo}>
            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you?
                If you didn't receive the email, we will gladly send you another.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    A new verification link has been sent to the email address you provided during registration.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button className={`${form.processing && 'opacity-25'}`} disabled={form.processing}>
                        Resend Verification Email
                    </Button>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                        children="Log Out"
                    />
                </div>
            </form>
        </AuthenticationCard>
    )
}

export default VerifyEmail
