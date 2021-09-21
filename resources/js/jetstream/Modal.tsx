import { Transition } from "@headlessui/react"
import React, { useEffect } from "react"
import ReactDOM from 'react-dom'

export interface ModalProps {
    show: boolean
    maxWidth?: keyof typeof maxWidthClass
    closeable?: boolean
    onClose?: () => void
}

const maxWidthClass = {
    'sm': 'sm:max-w-sm',
    'md': 'sm:max-w-md',
    'lg': 'sm:max-w-lg',
    'xl': 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
}

const Modal: React.FC<ModalProps> = ({ show, maxWidth = '2xl', closeable = true, onClose, children }) => {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [show])

    useEffect(() => {
        document.addEventListener('keydown', closeOnEscape)

        return () => {
            document.removeEventListener('keydown', closeOnEscape)
            document.body.style.overflow = 'auto'
        }
    }, [])

    const close = () => {
        if (closeable) {
            onClose && onClose()
        }
    }

    const closeOnEscape = (event: KeyboardEvent) => {
        if (show && event.key === 'Escape') {
            close()
        }
    }

    return ReactDOM.createPortal(
        <Transition leave="duration-200" show={show}>
            <div className="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region>
                <Transition
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transform transition-all">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                </Transition>

                <Transition
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className={`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass[maxWidth]}`}>
                        {children}
                    </div>
                </Transition>
            </div>
        </Transition>,
        document.body
    )
}

export default Modal

