import { cn, formatDateFormMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
    IsActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({title , content, lastEditTime, IsActive=false , className, ..._props}: NotePreviewProps) => {
    const date = formatDateFormMs(lastEditTime)
    return (
        <>
            <div className={cn('cursor-pointer px-2.5 py-2 rounded-md transition-colors duration-75', {
                'bg-zinc-400/75': IsActive,
                'hover:bg-zinc-500/75': !IsActive
            })}
            { ..._props }
            >
                <h3 className="mb-1 font-bold truncate"> { title } </h3>
                <span className='inline-block w-full mb-2 text-xs font-light text-left'> { date } </span>
            </div>
        </>
    )
}