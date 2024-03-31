const ROOT_FONT_SIZE = 16;

export const convertations = {

 pxToRem: (value: number): number => (1 / ROOT_FONT_SIZE) * value,

 remToPx: (value: number): number => value / (1 / ROOT_FONT_SIZE)
};

