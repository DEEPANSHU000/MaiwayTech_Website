import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <ModalContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
            {children}
        </ModalContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModal() {
    return useContext(ModalContext)
}
