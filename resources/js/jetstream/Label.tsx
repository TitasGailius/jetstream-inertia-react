import React from "react"

interface Props extends React.ComponentProps<'label'> {
    value?: string
    isDanger?: boolean
}

const Label: React.FC<Props> = ({ children, value, isDanger, className, ...props }) => (
    <label className={`block font-medium text-sm ${isDanger ? 'text-red-400' : 'text-gray-700'} ${className}`} {...props}>
        {value || children}
    </label>
)

export default Label
