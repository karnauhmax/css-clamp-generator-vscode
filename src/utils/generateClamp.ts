import { window, workspace } from 'vscode';
import { ClampSettings } from '../types/types';
import { calculateClamp } from './calculateClamp';

const filledBreakpoints = {
    viewportMin: '',
    viewportMax: '',
};

export async function generateClamp () {
 const { showInputBox, showErrorMessage, activeTextEditor } = window;
 const units = workspace.getConfiguration("clamp-gen").units;

 const minValue = await showInputBox({
     placeHolder: `Enter minimal value (${units})`,
     validateInput(value) {

      if (!value.length) {
       return 'Minimal value is required';
      }

      if (!Number(value)) {
       return 'Minimal value must be a number';
      }
     }
 });

 if (!minValue) {
  showErrorMessage('Please provide a correct minimal value');
  return;
 }

 const maxValue = await showInputBox({
     placeHolder: `Enter max value (${units})`,	
     validateInput(value) {

      if (!value.length) {
       return 'Maximal value is required';
      }

      if (!Number(value)) {
       return 'Maximal value must be a number';
      }

      if (Number(minValue) > Number(value)) {
       return 'Minimal value must be less than maximal value';
      }

     }
 });

 if (!maxValue) {
  showErrorMessage('Please provide a correct maximal value');
  return;
 }

 const viewportMin = await showInputBox({
     placeHolder: "Enter minimal viewport (px)",
     value: filledBreakpoints.viewportMin,

     validateInput(value) {

      if (!value.length) {
       return 'Minimal viewport is required';
      }

      if (!Number(value)) {
       return 'Minimal viewport must be a number';
      }

     },
 });

 if (!viewportMin) {
  showErrorMessage('Please provide a correct minimal viewport');
  return;
 }

 filledBreakpoints.viewportMin = viewportMin;


 const viewportMax = await showInputBox({
     placeHolder: "Enter max viewport (px)",
     value: filledBreakpoints.viewportMax,

     validateInput(value) {

      if (!value.length) {
       return 'Maximal viewport is required';
      }

      if (!Number(value)) {
       return 'Maximal viewport must be a number';
      }
     }
 });

 if (!viewportMax) {
  showErrorMessage('Please provide a correct maximal viewport');
  return;
 }

 filledBreakpoints.viewportMax = viewportMax;


 if (activeTextEditor) {	
     const position = activeTextEditor.selection.active;

     const clampSettings: ClampSettings = {
         valuesMin: Number(minValue),
         valuesMax: Number(maxValue),
         viewportMin: Number(viewportMin),
         viewportMax: Number(viewportMax)
     };

     const result: string = calculateClamp(clampSettings);

     activeTextEditor.edit((editBuilder) => {
         editBuilder.insert(position, result);
     });
 }
}
