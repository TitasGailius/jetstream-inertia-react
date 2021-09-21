import React from "react"

import useSharedProps from "hooks/useSharedProps"

const ValidationErrors: React.FC<React.ComponentProps<"div">> = (props) => {
    const { errors } = useSharedProps()

    if (! Object.keys(errors).length) {
        return null
    }

    return (
        <div {...props}>
            <div className="font-medium text-red-600">Whoops! Something went wrong.</div>

            <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                {Object.entries(errors).map(([key, error]) => (
                    <li key={key}>{error}</li>
                ))}
            </ul>
        </div>
    )
}

export default ValidationErrors
