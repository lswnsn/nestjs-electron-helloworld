const { app, BrowserWindow } = require('electron')
const path = require('path')
require('./dist/main.js');
function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 768
  })

  win.loadURL('http://localhost:3000/ssologin?token=xyz');
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

