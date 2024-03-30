	import * as vscode from 'vscode';
	import { calculateClamp } from './utils/calculateClamp';
	import { generateClamp } from './utils/generateClamp';

	export function activate(context: vscode.ExtensionContext): void {
					const disposable = vscode.commands.registerCommand(
									"clamp-gen.generateClamp",
									generateClamp
					);

					context.subscriptions.push(disposable);
	}

	export function deactivate() {}