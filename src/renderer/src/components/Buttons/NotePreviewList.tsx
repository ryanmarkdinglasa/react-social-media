import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from './NotePreview'

export const NotePreviewList = ({className, ..._props }: ComponentProps<'ul'>) => {
    if (notesMock.length !== 0) {
        return (
            <>
                <ul { ..._props }>
                    {
                        notesMock.map((note) => (
                            <NotePreview key={ note.title + note.lastEditTime } { ...note } />
                        ))
                    }
                </ul>
            </>
        )
    }
    return (
        <>
            <ul className={twMerge('text-center pt-4',className)} { ..._props } >
                <span className='text-red text-light' > No Notes yet! </span>
            </ul>
        </>
    )
}