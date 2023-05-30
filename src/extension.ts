// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Client, ClientData, Event, SocketProtocol, convertByteArray, } from "chiiugo-protocol-core";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "chiiugo-vsc" is now active!');
	const disposables:vscode.Disposable[] =[]
	const c = new Client(new ClientData("VSCode","dev"))
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	disposables.push(vscode.commands.registerCommand('chiiugo-vsc.connect2chiiugo', () => {
		c.close()
		connectToChiiugo(c)
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		
	}));
	
	disposables.push(c)
	connectToChiiugo(c)
	disposables.push(vscode.tasks.onDidEndTaskProcess((e)=>{
		console.log(e)
		if(e.exitCode==0){			
			c.send(new SocketProtocol.SendEvent(new Event.SuccessBuild(e.execution.task.name)))
		}else c.send(new SocketProtocol.SendEvent(new Event.FailedBuild(e.execution.task.name)))
	}))
	disposables.push(vscode.tasks.onDidStartTaskProcess((e)=>{
		c.send(new SocketProtocol.SendEvent(new Event.StartBuild(e.execution.task.name)))
	}))
	disposables.push(vscode.workspace.onDidChangeTextDocument((e)=>{
		let text=e.contentChanges[0].text
	
		text=text.substring(Math.max(text.length-500,0),)
		for (let index = 0; index < text.length; index++) {
			const element = text.charCodeAt(index)
			c.send(new SocketProtocol.SendEvent(
				new Event.Typed(element)
			))
		}
	}))
	
	
	context.subscriptions.push(...disposables);
}

// This method is called when your extension is deactivated
export function deactivate() { }

function connectToChiiugo(client:Client) {
	client.startServer().then(()=>{
		client.send(new SocketProtocol.SendEvent(new Event.OpenProject(vscode.workspace.name??"Unknown")))
		client.onReceived((s)=>{
			console.log(s)
			switch(s){
				case SocketProtocol.Ping:{
					vscode.window.showInformationMessage('Pong!');
				}
			}
		})
	})
}