import { useNotesList } from '@/hooks/useNotesList'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from './NotePreview'

export type NotePreviewListProps = ComponentProps<'ul'> & {
    onSelect?:(() => void)
  }

const onSelectCallback = () => {
// Your onSelect logic here
};
  
  
export const NotePreviewList = ({className, ..._props }: NotePreviewListProps) => {
    const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect: onSelectCallback })

    if (notes.length === 0) {
        return (
            <>
                <ul className={twMerge('text-center pt-4',className)} { ..._props } >
                    <span className='text-red text-light' > No Notes yet! </span>
                </ul>
            </>
        )
    }

    return (
        <>
            <ul className={className} { ..._props }>
                {
                    notes.map((note:any, index:any) => (
                        <NotePreview key={ note.title + note.lastEditTime }
                        IsActive={selectedNoteIndex === index}
                        onClick={handleNoteSelect(index)}
                        { ...note } />
                    ))
                }
            </ul>
        </>
    )
    
}