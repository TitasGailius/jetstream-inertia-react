import React, { useRef, useState } from "react"
import { useForm } from "@inertiajs/inertia-react"
import route from "ziggy-js"
import { Head } from "@inertiajs/inertia-react"

import { Page } from "types/App"
import Input from "jetstream/Input"
import Label from "jetstream/Label"
import Button from "jetstream/Button"
import ValidationErrors from "jetstream/ValidationErrors"
import AuthenticationCard from "jetstream/AuthenticationCard"
import AuthenticationCardLogo from "jetstream/AuthenticationCardLogo"

const TwoFactorChallenge: Page = () => {
    const recoveryEl = useRef<HTMLInputElement>(null)
    const codeEl = useRef<HTMLInputElement>(null)

    const [recovery, setRecovery] = useState(false)

    const form = useForm({
        code: '',
        recovery_code: '',
    })

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        form.post(route('two-factor.login'))
    }

    const toggleRecovery = () => {
        setRecovery(recovery => !recovery)
    }

    return (
        <AuthenticationCard logo={AuthenticationCardLogo}>
            <Head title="Two-factor Confirmation" />

            <div className="mb-4 text-sm text-gray-600">
                {recovery
                    ? 'Please confirm access to your account by entering one of your emergency recovery codes.'
                    : 'Please confirm access to your account by entering the authentication code provided by your authenticator application.'
                }
            </div>

            <ValidationErrors className="mb-4" />

            <form onSubmit={submit}>
                {recovery ? (
                    <div>
                        <Label htmlFor="recovery_code" value="Recovery Code" />

                        <Input
                            ref={recoveryEl}
                            id="recovery_code"
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="one-time-code"
                            value={form.data.recovery_code}
                            onChange={e => form.setData('recovery_code', e.target.value)}
                        />
                    </div>
                ) : (
                    <div>
                        <Label htmlFor="code" value="Code" />

                        <Input
                            ref={codeEl}
                            id="code"
                            type="text"
                            inputMode="numeric"
                            className="mt-1 block w-full"
                            autoFocus
                            autoComplete="one-time-code"
                            value={form.data.code}
                            onChange={e => form.setData('code', e.target.value)}
                        />
                    </div>
                )}

                <div className="flex items-center justify-end mt-4">
                    <button type="button" className="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer" onClick={toggleRecovery}>
                        {recovery
                            ? 'Use an authentication code'
                            : 'Use a recovery code'
                        }
                    </button>

                    <Button className={`ml-4 ${form.processing && 'opacity-25'}`} disabled={form.processing}>
                        Log in
                    </Button>
                </div>
            </form>
        </AuthenticationCard>
    )
}

export default TwoFactorChallenge
