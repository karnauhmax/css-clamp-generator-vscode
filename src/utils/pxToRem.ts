function pxToRem(value: number): string {
 const initialRemValue: number = 16;
 const formula: number = (1 / initialRemValue) * value;
 return `${formula}rem`;
}

export { pxToRem };