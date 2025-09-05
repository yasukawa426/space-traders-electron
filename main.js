const { app, BrowserWindow } = require("electron");
// we import two modules from electron package
// app module to control application life
// BrowserWindow module to create and manage windows

// enable live reload for all the files inside your project directory
try {
  require("electron-reloader")(module);
} catch {}

// create a new browser window with index.html
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

// when the app is ready, create the window
app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});
