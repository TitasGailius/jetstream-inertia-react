import React from "react"
import classNames from "classnames"

interface Props extends React.ComponentProps<"button"> {
    //
}

const SecondaryButton: React.FC<Props> = ({ children, type = "button", className, ...props }) => (
    <button type={type} className={classNames([
        "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md",
        "font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm",
        "hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200",
        "active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition",
        className,
    ])} />
)

export default SecondaryButton
