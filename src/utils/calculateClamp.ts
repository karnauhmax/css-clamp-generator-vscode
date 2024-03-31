import { ClampSettings } from "../types/types";
import { workspace } from "vscode";

import { convertations } from "./convertations";

const { remToPx } = convertations;

function calculateClamp(settings: ClampSettings): string {
 const { valuesMin, valuesMax, viewportMin, viewportMax } = settings;
 const units = workspace.getConfiguration("clamp-gen").units;

 const isRem = units === "rem";

 const minValuePx = isRem ? remToPx(valuesMin) : valuesMin;
 const maxValuePx = isRem ? remToPx(valuesMax) : valuesMax;

 const variablePart = (maxValuePx - minValuePx) / (viewportMax - viewportMin);
 const constant = ((maxValuePx - viewportMax * variablePart) / 16).toFixed(3);

 const vw = (100 * variablePart).toFixed(2);

 return `clamp(${valuesMin}${units}, ${constant ? `${constant}rem + ` : ""}${vw}vw, ${valuesMax}${units})`;
}

export { calculateClamp };