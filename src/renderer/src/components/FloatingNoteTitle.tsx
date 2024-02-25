import { selectedNoteAtom } from "@/store";
import { useAtomValue } from "jotai";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const FLoatingNoteTitle = ({className, ..._props}: ComponentProps<'div'>) =>{
     // Specify the type of selectedNote
    const selectedNote:any = (!useAtomValue(selectedNoteAtom))? null: useAtomValue(selectedNoteAtom)
    if (!selectedNote) return null
    return (
        <>
            <div className={twMerge('flex justify-center', className)} {..._props}>
                <span className="text-gray-400">
                    { selectedNote.title }
                </span>    
            </div>   
        </>
    )
}