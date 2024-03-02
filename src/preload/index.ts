import { contextBridge, ipcRenderer } from 'electron';

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

//
try {
  contextBridge.exposeInMainWorld('context', {
    //get the OS language
    locale: navigator.language
  }),
  contextBridge.exposeInMainWorld('api', {
    send: (channel: string, ...args: any) => ipcRenderer.send(channel, ...args),
  });
} catch (error) {
  console.error(error)
}
