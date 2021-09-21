import React from "react"

interface Props extends React.ComponentProps<'div'> {
    message: string
}

const InputError: React.FC<Props> = ({ message, ...div }) => message ? (
    <div {...div}>
        <p className="text-sm text-red-600">{message}</p>
    </div>
) : null

export default InputError
