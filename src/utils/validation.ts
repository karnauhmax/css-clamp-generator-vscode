import * as vscode from 'vscode';

async function validateInput(prompt: string, value: string | undefined, validationFunction: (value: string) => string | undefined): Promise<string | undefined> {
    const { showInputBox, showErrorMessage } = vscode.window;
    if (!value) {
        showErrorMessage(`Please provide a correct ${prompt.toLowerCase()}`);
        return;
    }

    const errorMessage = validationFunction(value);
    if (errorMessage) {
        showErrorMessage(errorMessage);
        return;
    }

    return value;
}

async function validateNumericInput(prompt: string, value: string | undefined, minValue?: number, maxValue?: number): Promise<number | undefined> {
    return validateInput(prompt, value, (input: string) => {
        if (!Number(input)) {
            return `${prompt} must be a number`;
        }
        const numValue = Number(input);
        if (minValue !== undefined && numValue < minValue) {
            return `${prompt} must be greater than or equal to ${minValue}`;
        }
        if (maxValue !== undefined && numValue > maxValue) {
            return `${prompt} must be less than or equal to ${maxValue}`;
        }
    }) as Promise<number | undefined>;
}

export { validateInput, validateNumericInput };
