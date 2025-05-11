import * as vscode from 'vscode';

export class PromptContext {
    private key = 'promptHistory';
    constructor(private context: vscode.ExtensionContext) { }

    getContext(): string[] {
        return this.context.globalState.get<string[]>(this.key, []);
    }

    addContext(text: string) {
        const hist = this.getContext();
        hist.push(text);
        this.context.globalState.update(this.key, hist);
    }
}
