import React, { forwardRef } from "react"

import Label from "./Label"
import Input from "./Input"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    error?: string,
}

const FormInput = forwardRef<HTMLInputElement, Props>(({ error, label, className, name, ...props }, ref) => (
    <div className="mb-4">
        <Label isDanger={Boolean(error)}>{label}</Label>

        <Input
            {...props}
            className={`${className} mt-1 block w-full ${error && 'border-1 border-red-400'}`}
            name={name}
            ref={ref} />

        {error && <span className="ml-1 mt-1 text-sm text-red-400">{error}</span>}
    </div>
))

export default FormInput
