import React from "react"
import { InertiaLink } from "@inertiajs/inertia-react"

interface InertiaLinkProps {
    as: undefined,
    href: string
}

interface ButtonProps {
    as: 'button'
}

interface LinkProps {
    as: 'a'
    href: string
}

type Props = InertiaLinkProps | ButtonProps | LinkProps

const DropdownLink: React.FC<Props> = ({ children, ...props }) => (
    <div>
        {props.as === 'button' ? (
            <button type="submit" className="block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">
                {children}
            </button>
        ) : props.as === 'a' ? (
            <a href={props.href} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">
                {children}
            </a>
        ) : (
            <InertiaLink href={props.href} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">
                {children}
            </InertiaLink>
        )}
    </div>
)

export default DropdownLink
