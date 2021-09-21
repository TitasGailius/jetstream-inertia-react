import React from "react"
import { Transition } from "@headlessui/react"

interface Props {
    on: boolean
}

const ActionMessage: React.FC<Props> = ({ on, children }) => (
    <Transition
        show={on}
        leave="transition ease-in duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="text-sm text-gray-600"
        children={children}
    />
)

export default ActionMessage
