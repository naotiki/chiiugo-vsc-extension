"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const chiiugo_protocol_core_1 = require("../out/generatedKt/chiiugo-protocol-core");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
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
    const c = new chiiugo_protocol_core_1.Client();
    vscode.debug.registerDebugAdapterTrackerFactory("*", {
        createDebugAdapterTracker(session) {
            return {
                onWillStartSession() {
                    c.send(new chiiugo_protocol_core_1.ServerProtocol.SendEvent(new chiiugo_protocol_core_1.Event.StartBuild(session.name)));
                },
                onError(error) {
                    c.send(new chiiugo_protocol_core_1.ServerProtocol.SendEvent(new chiiugo_protocol_core_1.Event.FailedBuild(session.name)));
                },
            };
        },
    });
    c.send(new chiiugo_protocol_core_1.ServerProtocol.SendEvent(new chiiugo_protocol_core_1.Event.OpenProject("Hello")));
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map