import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as myExtension from '../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('generateClamp should show error message if minimal value is greater than maximal', async () => {

		const minimalValue = 100;
		const maximalValue = 50;
		await vscode.commands.executeCommand('clamp-gen.generateClamp', minimalValue, maximalValue);
		
	})
});
