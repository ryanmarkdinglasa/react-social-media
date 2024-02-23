import { ActionButton, ActionButtonProps } from '@/components'
import { FaRegTrashCan } from "react-icons/fa6"

export const DeleteNoteButton = ({..._props}: ActionButtonProps) => {
    return (
        <>
            <ActionButton {..._props}>
                <FaRegTrashCan className='w-4 h-4 text-zinc-300' />
            </ActionButton>
        </>
    )
}