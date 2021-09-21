import React, { forwardRef } from "react"

interface Props extends React.ComponentProps<'input'> {
    //
}

const Input = forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => (
    <input
        className={`border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ${className}`}
        ref={ref}
        {...props}
    />
))

export default Input
