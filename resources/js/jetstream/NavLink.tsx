import React from "react"
import { InertiaLink } from "@inertiajs/inertia-react"

interface InertiaLinkProps {
    as?: 'inertia-link'
    isActive: boolean
    href: string
}

interface ButtonProps {
    as: 'button'
    isActive: boolean
}

type Props = InertiaLinkProps | ButtonProps

const NavLink: React.FC<Props> = ({ isActive, children, ...props }) => {
    const className = isActive
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition'

    if (props.as === 'button') {
        return <button type="button" className={className}>{children}</button>
    }

    return <InertiaLink href={props.href} className={className}>{children}</InertiaLink>
}

export default NavLink
