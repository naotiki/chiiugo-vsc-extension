// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Client, Event, ServerProtocol, convertByteArray, } from "../out/generatedKt/chiiugo-protocol-core";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "chiiugo-vsc" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('chiiugo-vsc.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from chiiugo-vsc!');
	});
	const c = new Client()
	vscode.tasks.onDidEndTaskProcess((e)=>{
		console.log(e)
		if(e.exitCode==0){			
			c.send(new ServerProtocol.SendEvent(new Event.SuccessBuild(e.execution.task.name)))
		}else c.send(new ServerProtocol.SendEvent(new Event.FailedBuild(e.execution.task.name)))
	})
   vscode.debug.registerDebugAdapterTrackerFactory("*", {
	
		createDebugAdapterTracker(session) {

			return {
				onWillStartSession() {
					c.send(new ServerProtocol.SendEvent(new Event.StartBuild(session.name)))
				},
				onWillStopSession() {
					console.log("終了")
				},
				onWillReceiveMessage(message) {
				},
				onDidSendMessage(message) {
					if(message.event=="exited"){
						const exitCode=message.body?.exitCode
						console.log(exitCode)
						if(typeof exitCode !== "undefined"){
				//			if(exitCode==0){
				//				c.send(new ServerProtocol.SendEvent(new Event.SuccessBuild(session.name)))
					//		}else c.send(new ServerProtocol.SendEvent(new Event.FailedBuild(session.name)))
						}
					}
				},
				onExit(code,signal){
					console.log(code,signal)
					/* console.log(code,signal)
					if(code==0){
						c.send(new ServerProtocol.SendEvent(new Event.SuccessBuild(session.name)))
					}else c.send(new ServerProtocol.SendEvent(new Event.FailedBuild(session.name))) */
				},
				onError(error) {

					console.log("error "+error.message)
					
				},
			}
		},
	}) 
	vscode.workspace.onDidChangeTextDocument((e)=>{
		e.contentChanges.forEach((change)=>{
			for (let index = 0; index < change.text.length; index++) {
				const element = change.text.charCodeAt(index)
				c.send(new ServerProtocol.SendEvent(
					new Event.Typed(element)
				))
			}
		})
	})
	
	c.send(new ServerProtocol.SendEvent(new Event.OpenProject("Hello")))
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
