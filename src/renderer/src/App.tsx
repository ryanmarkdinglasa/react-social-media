import { Content, DraggableTopBar, Navbar, RootLayout } from '@/components'

import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const activeMenu = true
const App = () => {
  return (
    <>
      <DraggableTopBar/>
      <RootLayout>
        <Content>
          <Navbar>
            Navbar HERE
          </Navbar>
          <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg" >
              <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                <TooltipComponent content="Settings" position="TopCenter">
                  <button
                    className="text-3xl p-3 hover:drop-shadow-xl hover:bg-dark-gray text-white border hover:border-current"
                    type="button"
                    style={{ background: 'red', borderRadius: '50%' }}
                  >
                    <FiSettings className="text-white" />
                  </button>
                </TooltipComponent>
              </div>
              <aside
                className={`border-red dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
              }
              >
                Aside
              </aside>
              <div>
                <Routes>
                  {/* Dashboard */}
                  <Route path='/' element='Ecommerce' />
                  <Route path='/' element='Ecommerce' />

                  {/* Pages */}
                  <Route path='/orders' element='Orders' />
                  <Route path='/employees' element='Employees' />
                  <Route path='/customers' element='Customers' />

                  {/* Apps */}
                  <Route path='/kanban' element='Kanban' />
                  <Route path='/editor' element='Editor' />
                  <Route path='/calendar' element='Calendar' />
                  <Route path='/color-picker' element='ColorPicker' />

                  {/* Charts */}
                  <Route path='/line' element='Line' />
                  <Route path='/area' element='Area' />
                  <Route path='/bar' element='Bar' />
                  <Route path='/pie' element='Pie' />
                  <Route path='/financial' element='Financial' />
                  <Route path='/color-mapping' element='ColorMapping' />
                  <Route path='/pyramid' element='Pyramid' />

                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </Content>
      </RootLayout>
    </>
  )
}

export default App
