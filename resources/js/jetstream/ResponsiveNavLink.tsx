import React from "react"
import classNames from "classnames"
import { InertiaLink } from "@inertiajs/inertia-react"

interface ButtonProps extends React.ComponentProps<"button"> {
    as: 'button'
}

interface LinkProps extends React.ComponentProps<InertiaLink> {
    as?: 'inertia-link'
}

type Props = ButtonProps | LinkProps

const ResponsiveNavLink: React.FC<Props> = ({ className, ...props}) => (
    props.as === 'button'
        ? <button className={classNames(["w-full text-left", className])} {...props} />
        : <InertiaLink className={className} {...props} />
)

export default ResponsiveNavLink
