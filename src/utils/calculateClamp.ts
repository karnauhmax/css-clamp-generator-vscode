import { ClampSettings } from "../types/types";
import { pxToRem } from "./pxToRem";

function calculateClamp(settings: ClampSettings): string {
 const { valuesMin, valuesMax, viewportMin, viewportMax } = settings;

 const variablePart = (valuesMax - valuesMin) / (viewportMax - viewportMin);
 const constant = ((valuesMax - viewportMax * variablePart) / 16).toFixed(3);
 const minPx = pxToRem(valuesMin);
 const maxPx = pxToRem(valuesMax);
 const vw = (100 * variablePart).toFixed(2);

 return `clamp(${minPx}, ${constant ? `${constant}rem + ` : ""}${vw}vw, ${maxPx})`;
}

export { calculateClamp };