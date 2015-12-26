var app = require('app')
var BrowserWindow = require('browser-window')

app.on('ready', function(){
	var mainWindow = new BrowserWindow ({
		width: 1100,
		height: 800,
		title: 'Shop'
	});
	mainWindow.loadUrl('file://' + __dirname + '/index.html')
})
