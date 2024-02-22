import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

//
try {
  contextBridge.exposeInMainWorld('context', {
    //to do
  })
} catch (error) {
  console.error(error)
}
