// const electron = require("electron");
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
const {
  app,
  BrowserWindow,
  // globalShortcut,
  // dialog,
  // Menu,
  // ipcMain,
} = require("electron");

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    useContentSize: true,
    frame: true, //添加这一行采用无边框窗口
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:8000"
      : `file://${path.join(__dirname, "./public/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow == null) {
    createWindow();
  }
});
