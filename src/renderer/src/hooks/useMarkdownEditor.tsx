import { selectedNoteAtom } from "@/store"
import { useAtomValue } from "jotai"

export const useMarkdownEditor = () => {
    const selectedNote:any = (!useAtomValue(selectedNoteAtom))? null: useAtomValue(selectedNoteAtom)
    //const selectedNote = useAtomValue(selectedNoteAtom)
    return (
        selectedNote
    )
}