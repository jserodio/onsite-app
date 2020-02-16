const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1024,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed' , () => { // Quit when all windows are closed
    if (process.platform !== 'darwin') { // On macOS it is common for applications and their menu bar
        app.quit() // to stay active until the user quits explicitly with Cmd + Q
    }
})

app.on('activate', () => { // On macOS it's common to re-create a window in the app when the
    if (BrowserWindow.getAllWindows().length === 0) { // dock icon is clicked and there are no other windows open.
      createWindow()
    }
})