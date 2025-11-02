import React from 'react'

interface ButtonProps {
    onClick?: () => void
    text: string
}
export const Button = ({ text, onClick }: ButtonProps) => {
    return <button>
        {text}
    </button>
}