import { DraggableTopBar } from '@/components'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { BrowserRouter } from 'react-router-dom'
const activeMenu = true
const App = () => {
  return (
    <>
      <DraggableTopBar />
      <div>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <TooltipComponent content="Settings" position="TopCenter">
                <button
                  className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                  type="button"
                  style={{ background: 'red', borderRadius: '50%' }}
                >
                  <FiSettings className="text-white" />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"> Sidebar </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg"> Sidebar </div>
            )}
            <div
              className={`dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
            ></div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
