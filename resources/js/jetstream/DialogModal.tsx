import React, { ReactNode } from "react"

import Modal, { ModalProps } from "./Modal"

interface Props extends ModalProps {
    title?: ReactNode
    content?: ReactNode
    footer?: ReactNode
}

const DialogModal: React.FC<Props> = ({ title, content, footer, ...modal}) => (
    <Modal {...modal}>
        <div className="px-6 py-4">
            <div className="text-lg">
                {title}
            </div>

            <div className="mt-4">
                {content}
            </div>
        </div>

        <div className="px-6 py-4 bg-gray-100 text-right">
            {footer}
        </div>
    </Modal>
)

export default DialogModal
