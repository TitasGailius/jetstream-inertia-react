import React from "react"

interface Props extends Omit<React.ComponentProps<"input">, "type"> {
    //
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => (
    <input
        className={`rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${className}`}
        type="checkbox"
        {...props}
        ref={ref}
    />
))

export default Checkbox
