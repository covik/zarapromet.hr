import { Global, ThemeProvider } from '@emotion/react';
import 'normalize.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import type { PropsWithChildren } from 'react';
import type { Theme } from './theme';

const variables = {
    background: {
        primary: '--primary-bg',
        secondary: '--secondary-bg',
    },
    text: {
        primary: '--primary-text',
        secondary: '--secondary-text',
    },
};

const theme: Theme = {
    background: {
        primary: `var(${variables.background.primary})`,
        secondary: `var(${variables.background.secondary})`,
    },
    text: {
        primary: `var(${variables.text.primary})`,
        secondary: `var(${variables.text.secondary})`,
    },
    spacing: (multiplier) => `${multiplier * 8}px`,
};

const globalStyles = {
    '*, *::before, *::after': {
        boxSizing: 'border-box',
    },

    ':root': {
        colorScheme: 'light dark',
        [variables.background.primary]: '#F6F6F6',
        [variables.background.secondary]: '#262626',

        [variables.text.primary]: '#2F2F2F',
        [variables.text.secondary]: '#787878',

        '@media (prefers-color-scheme: dark)': {
            [variables.background.primary]: '#262626',
            [variables.background.secondary]: '#F6F6F6',

            [variables.text.primary]: '#FFFFFF',
            [variables.text.secondary]: '#c1c1c1',
        },
    },

    body: {
        backgroundColor: theme.background.primary,
        color: theme.text.primary,
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

export function BaseStyle({ children }: PropsWithChildren) {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            {children}
        </ThemeProvider>
    );
}
