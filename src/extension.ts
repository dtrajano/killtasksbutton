// The module 'vscode' contains the VS Code extensibility API
// Import the necessary extensibility types to use in your code below
import * as vscode from 'vscode';
import {window, commands, Disposable, ExtensionContext, StatusBarAlignment, StatusBarItem, TextDocument} from 'vscode';

// This method is called when your extension is activated. Activation is
// controlled by the activation events defined in package.json.
export function activate(context: ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error).
    // This line of code will only be executed once when your extension is activated.

    // create a new word counter
    let terminateTaskButtonInstance = new TerminateTask();

    // Add to a list of disposables which are disposed when this extension is deactivated.
    context.subscriptions.push(terminateTaskButtonInstance);
}

class TerminateTask {

    private _statusBarItem: StatusBarItem;

    constructor(){
        // Create as needed
        this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right);
        this._statusBarItem.text = `$(circle-slash) Terminate Running Tasks`;
        //this._statusBarItem.command = "workbench.action.tasks.stop";
        this._statusBarItem.command = "workbench.action.tasks.terminate";
        this._statusBarItem.show();
    }

    dispose() {
        this._statusBarItem.dispose();
    }
}