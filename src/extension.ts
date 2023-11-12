import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand(
      "save-button-on-editor.save",
      (editor) => {
				editor.document.save();
			}
    ),
    vscode.commands.registerCommand(
      "save-button-on-editor.saveAll",
      () => {
				vscode.workspace.textDocuments.forEach(doc => {
					doc.save();
				});
			}
    )
  );
}

export function deactivate() {}
