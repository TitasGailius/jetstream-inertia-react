import React from "react"

interface Props {
    canLogin: boolean
    canRegister: boolean
    laravelVersion: string
    phpVersion: string
}

const Welcome: React.FC<Props> = () => (
    <div>hello, world</div>
)

export default Welcome
