# obscure-reference-llm-vsx

A Visual Studio Code LLM tool. Written with the aid of LLMs, of course.

This extension allows you to:

- **Uninstall** command (via command palette or Status Bar).
- **Configuration** page under Settings.

- Configure LLM endpoints via Settings (gear icon) under **LLM Extension: Endpoints**
- Select files from your workspace to provide as context for LLM prompts
- Switch between multiple LLM endpoints (OpenAI, LMStudio, Ollama, MCP)
- Store lightweight prompt context between invocations
- Call multiple LLMs in parallel and synthesize their outputs via a chosen synthesizer

## Development

1. Clone the repo and `cd my-vscode-llm-extension`
2. Install dependencies:

   ```sh
   npm install
   ```

3. Compile the TypeScript:

   ```sh
   npm run compile
   ```

4. Run the extension (optional):

    ```sh
    code .
    ```

5. Package the extension (optional - requires vsce):

   ```sh
   npm run package
   ```

6. **Install the extension**:

   - **Via CLI**: If you have the `code` command in your PATH:

     ```sh
     code --install-extension vscode-llm-extension-0.0.1.vsix
     ```

     If `code` is not available, open VS Code, press ⇧⌘P, run **“Shell Command: Install 'code' command in PATH”**, then restart your terminal.

   - **Via VS Code UI**: Open the Extensions view (⇧⌘X), click the ⋯ menu in the top-right, choose **“Install from VSIX...”**, and select `vscode-llm-extension-0.0.1.vsix`.

## Usage

- **Settings**: Open Preferences → Settings, search “LLM Extension Endpoints”, and add your array of `{ name, url, apiKey }` objects.
- **Commands**: ⇧⌘P → **LLM: Send Selected Files to LLM**
