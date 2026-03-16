import { Global } from '@emotion/react';
import 'normalize.css';
import '@fontsource/montserrat/latin-400.css';
import '@fontsource/montserrat/latin-700.css';
import * as css from './css';

const globalStyles = {
    '*, *::before, *::after': {
        boxSizing: 'border-box',
    },

    ':root': {
        colorScheme: 'light dark',
        [css.variables.background.primary]: '#F6F6F6',
        [css.variables.background.secondary]: '#262626',

        [css.variables.text.primary]: '#2F2F2F',
        [css.variables.text.secondary]: '#787878',

        '@media (prefers-color-scheme: dark)': {
            [css.variables.background.primary]: '#262626',
            [css.variables.background.secondary]: '#F6F6F6',

            [css.variables.text.primary]: '#FFFFFF',
            [css.variables.text.secondary]: '#c1c1c1',
        },
    },

    body: {
        backgroundColor: `var(${css.variables.background.primary})`,
        color: `var(${css.variables.text.primary})`,
        fontFamily: "'Montserrat', sans-serif",
        fontSize: ['16px', 'clamp(12px, 1rem, 32px)'], // Follows WCAG guidelines
        lineHeight: 1.5,
    },

    a: {
        all: 'unset',
        display: 'inline',
        color: 'inherit',
        textDecoration: 'none',
        cursor: 'pointer',
        userSelect: 'none',
        fontFamily: 'inherit',
        fontSize: 'inherit',
    },
} as const;

export function BaseStyle() {
    return <Global styles={globalStyles} />;
}
