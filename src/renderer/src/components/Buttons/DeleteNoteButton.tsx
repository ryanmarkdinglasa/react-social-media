import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from "react-icons/fa6"

export const DeleteNoteButton = ({..._props}: ActionButtonProps) => {
    const deleteNote = useSetAtom(deleteNoteAtom)
    const handleCreation = () => {
        deleteNote()
    }
    return (
        <>
            <ActionButton onClick={handleCreation} {..._props}>
                <FaRegTrashCan className='w-4 h-4 text-zinc-300' />
            </ActionButton>
        </>
    )
}