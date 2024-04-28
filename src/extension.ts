	import { commands, ExtensionContext } from 'vscode';
	import { generateClamp } from './utils/generateClamp';

	export function activate(context: ExtensionContext): void {
					const disposable = commands.registerCommand(
									"clamp-gen.generateClamp",
									generateClamp
					);

					context.subscriptions.push(disposable);
	}

