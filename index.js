const electron = require('electron');
const BrowserHistory = require('node-browser-history');

const { app, BrowserWindow } = electron;


app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  const BrowserHistory = require('node-browser-history');
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  console.log('Try move your mouse or press any key');
  BrowserHistory.getChromeHistory(0.1).then((history) => {
    console.log("History: " + history);
  }).catch((err) => err);
  console.log(BrowserHistory.test);
  var browser = BrowserHistory.browsers;
  console.log(browser.findPaths(browser.defaultPaths.chrome, browser.CHROME));
// BrowserHistory.getChromeHistoryCb()(100);
//  BrowserHistory.getFirefoxHistory()(10);
});
