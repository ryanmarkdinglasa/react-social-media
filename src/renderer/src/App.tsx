import { ActionButtonsRow, Content, DraggableTopBar, NotePreviewList, RootLayout, SideBar } from '@/components'

const App = () => {
  return (
    <>
    <DraggableTopBar></DraggableTopBar>
      <RootLayout>
        <SideBar className="p-2"> 
          <ActionButtonsRow className='flex justify-between mt-1 mb-2' />
          <NotePreviewList className="mt-3 space-y-1 border-l-red/20 "/>
        </SideBar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20"> Content </Content>
      </RootLayout>
    </>
  )
}

export default App
