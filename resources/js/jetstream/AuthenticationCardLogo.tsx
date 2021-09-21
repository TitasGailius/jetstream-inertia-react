import React from "react"
import { Link } from "@inertiajs/inertia-react"

import { ReactComponent as Logo } from "jetstream/icons/AuthenticationCardLogo.svg"

const AuthenticationCardLogo: React.FC = () => (
    <Link href="/">
        <Logo />
    </Link>
)

export default AuthenticationCardLogo
