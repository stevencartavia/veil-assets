import React from 'react'

function Button({ label, size }: { label: string; size?: 'sm' | 'md' | 'lg' }) {
    return (
        <button className= {`bg-primary text-black rounded-md w-full lg:w-auto ${size == 'sm' ? 'py-3 px-4' : size == 'md' ? 'py-3 px-4' : 'py-6 px-10'}`}>
            {label}
        </button>
    )
}

export default Button
