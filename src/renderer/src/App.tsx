import { Content, DraggableTopBar, MovieSite, RootLayout } from '@/components'

const App = () => {
  return (
    <>
    <DraggableTopBar />
      <RootLayout>
        <Content  className="border-l bg-zinc-900/50 border-l-white/20"> 
          <MovieSite />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
