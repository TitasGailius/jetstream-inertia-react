import React, { ReactNode } from "react"

import { ReactComponent as AlertIcon } from "jetstream/icons/alert.svg"
import Modal, { ModalProps } from "./Modal"

interface Props extends ModalProps {
    title?: ReactNode,
    content?: ReactNode,
    footer?: ReactNode
}

const ConfirmationModal: React.FC<Props> = ({ title, content, footer, ...modal }) => (
    <Modal {...modal}>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <AlertIcon />
                </div>

                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg">
                        {title}
                    </h3>

                    <div className="mt-2">
                        {content}
                    </div>
                </div>
            </div>
        </div>

        <div className="px-6 py-4 bg-gray-100 text-right">
            {footer}
        </div>
    </Modal>
)

export default ConfirmationModal
