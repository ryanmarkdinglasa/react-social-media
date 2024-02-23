import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

//
try {
  contextBridge.exposeInMainWorld('context', {
    //get the OS language
    locale: navigator.language
  })
} catch (error) {
  console.error(error)
}
