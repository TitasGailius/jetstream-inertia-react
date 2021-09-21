import { Page } from "@inertiajs/inertia"
import { usePage } from "@inertiajs/inertia-react"

import { SharedProps } from "types/App"

const useSharedProps = () => {
    const { props } = usePage<Page<SharedProps>>()

    return props
}

export default useSharedProps
