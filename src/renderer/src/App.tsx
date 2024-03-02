import { Content, DraggableTopBar, RootLayout } from '@/components'
import Logo from './assets/images/icons.jpg'
const App = () => {
  return (
    <>
    <DraggableTopBar />
      <RootLayout>
        <Content  className="bg-zinc-900/50 flex justify-center items-center "  style={{background:'var()'}}> 
          <>
            <div className='shadow-2xl rounded-full flex justify-center items-center ' style={{borderRadius:'20px',background:'#FFF', width:'450px', height: '450px'}} >
                <div className='flex justify-center items-center  '>
                  <img src={Logo} style={{ width:'400px', height: '400px'}}/>
                </div>
            </div>
          </>
        </Content>
      </RootLayout>
    </>
  )
}

export default App
