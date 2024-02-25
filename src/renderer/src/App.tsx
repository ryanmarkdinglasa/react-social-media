import { ActionButtonsRow, Content, DraggableTopBar, FLoatingNoteTitle, MarkdownEdit, NotePreviewList, RootLayout, SideBar } from '@/components'
import { useRef } from 'react'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }
  return (
    <>
    <DraggableTopBar />
      <RootLayout>
        <SideBar className="p-2"> 
          <ActionButtonsRow className='flex justify-between mt-1 mb-2' />
          <NotePreviewList className="mt-3 space-y-1 border-l-red/20 " onSelect={resetScroll}/>
        </SideBar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20"> 
          <FLoatingNoteTitle className="pt-2" />
          <MarkdownEdit/>
        </Content>
      </RootLayout>
    </>
  )
}

export default App
