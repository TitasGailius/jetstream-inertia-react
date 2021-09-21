import React from "react"
import SectionTitle, { SectionTitleProps } from "./SectionTitle"

interface Props extends SectionTitleProps {
    //
}

const ActionSection: React.FC<Props> = ({ children, ...sectionTitleProps }) => (
    <div className="md:grid md:grid-cols-3 md:gap-6">
        <SectionTitle {...sectionTitleProps} />

        <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg">
                {children}
            </div>
        </div>
    </div>
)

export default ActionSection
