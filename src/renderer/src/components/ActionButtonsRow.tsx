import { DeleteNoteButton, NewNoteButton } from '@/components'
import { ComponentProps } from 'react'

export const ActionButtonsRow = ({..._props}: ComponentProps<'div'>) => {
    return (
        <>
            <div {..._props}>
                <NewNoteButton />
                <DeleteNoteButton />
            </div>
        </>
    )
}