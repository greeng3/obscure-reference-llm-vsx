import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Open Config Command
    const openConfig = vscode.commands.registerCommand(
        'extension.openConfig',
        () => vscode.commands.executeCommand(
            'workbench.action.openSettings',
            'myExtension'
        )
    );

    // Uninstall Command
    const uninstall = vscode.commands.registerCommand(
        'extension.uninstall', async () => {
            const id = `${context.extension.packageJSON.publisher}.${context.extension.packageJSON.name}`;
            await vscode.commands.executeCommand('workbench.extensions.uninstallExtension', id);
        }
    );

    // Status Bar button for Uninstall
    const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBar.text = '$(trash) Uninstall';
    statusBar.command = 'extension.uninstall';
    statusBar.show();

    context.subscriptions.push(openConfig, uninstall, statusBar);
}

export function deactivate() { }