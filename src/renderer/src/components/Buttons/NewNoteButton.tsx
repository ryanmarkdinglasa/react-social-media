import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { LuFileSignature } from "react-icons/lu"

export const NewNoteButton = ({..._props}: ActionButtonProps) => {
    const createEmptyNote = useSetAtom(createEmptyNoteAtom)
    const handleCreation = () => {
        createEmptyNote()
    }
    return (
        <>
            <ActionButton onClick={handleCreation} {..._props}>
                <LuFileSignature className='w-4 h-4 text-zinc-300' />
            </ActionButton>
        </>
    )
}