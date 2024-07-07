
import { createTheme, responsiveFontSizes, type ThemeOptions } from '@mui/material/styles';
import brastempThemeOptions from './brastemp';
import gamaAcademyThemeOptions from './gama-academy';
import mainThemeOptions from './main';

export type ThemeNames = 'brastemp' | 'gamaAcademy';

export function getPageTheme(themeName?: ThemeNames) {
    let options: ThemeOptions;

    switch (themeName) {
        case 'brastemp':
            options = brastempThemeOptions;
            break;
        case 'gamaAcademy':
            options = gamaAcademyThemeOptions;
            break;
        default:
            options = mainThemeOptions;
    }

    return responsiveFontSizes(createTheme(options));

};

export function getAppTheme() {
    return getPageTheme();
}
