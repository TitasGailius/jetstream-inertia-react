import React, { ReactNode } from "react"

export interface SectionTitleProps {
    title?: ReactNode
    description?: ReactNode
    aside?: ReactNode
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description, aside }) => (
    <div className="md:col-span-1 flex justify-between">
        <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium text-gray-900">
                {title}
            </h3>

            <p className="mt-1 text-sm text-gray-600">
                {description}
            </p>
        </div>

        <div className="px-4 sm:px-0">
            {aside}
        </div>
    </div>
)

export default SectionTitle