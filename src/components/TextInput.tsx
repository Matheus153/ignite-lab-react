import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'



export interface TextInputRootProps {
    children: ReactNode;
}

TextInputRoot.displayName = 'TextInput.Root'
function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center h-12 gap-3 py-4 px-3 rounded w-full  bg-gray-800  focus-within:ring-2 ring-cyan-500'>
            {props.children}
        </div>
    )
}


export interface TextInputIconProps {
    children: ReactNode;
}

TextInputIcon.displayName = 'TextInput.Icon'
function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

TextInputInput.displayName = 'TextInput.Input'
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {

    return (

        <input className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
            {...props}
        />

    )
}



export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}