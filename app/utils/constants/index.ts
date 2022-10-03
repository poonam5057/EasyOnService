import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
export const COLORS = {
    primary: '#FF5758',
    title: '#000000',
    subTitle: '#696969',
    dotDisible: '#C0BABA',
    white: '#FFFFFF',
    bgColor: '#EDEDED',
    borderLineColor: '#D4C7C7',
    bgColorSecond: '#F9F9F9',
    heartColor: '#BBB8B8',
};

export const SIZES = {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,
    width,
    height,
};
export const FontSize = {
    FONT_SIZE_XXL: 30,
    FONT_SIZE_XL: 25,
    FONT_SIZE_L: 20,
    FONT_SIZE_M: 16,
    FONT_SIZE_S: 14,
    FONT_SIZE_XS: 12,
};
export { width, height };
