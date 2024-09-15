import { Global, ThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';
import 'normalize.css';
import '@fontsource/montserrat/400.css'; // Regular weight
import '@fontsource/montserrat/700.css';
import { Theme } from './theme'; // Bold weight

/** CSS variable names stored in a nested object */
const variables = {
    background: {
        primary: '--primary-bg',
        secondary: '--secondary-bg',
        card: '--card-bg',
    },
    text: {
        primary: '--primary-text',
        secondary: '--secondary-text',
        muted: '--muted-text',
    },
    accent: '--accent',
    borderColor: '--border-color',
};

const theme: Theme = {
    background: {
        primary: `var(${variables.background.primary})`,
        secondary: `var(${variables.background.secondary})`,
        card: `var(${variables.background.card})`,
    },
    text: {
        primary: `var(${variables.text.primary})`,
        secondary: `var(${variables.text.secondary})`,
        muted: `var(${variables.text.muted})`,
    },
    accent: `var(${variables.accent})`,
    borderColor: `var(${variables.borderColor})`,
};

const globalStyles = {
    ':root': {
        colorScheme: 'light dark',
        [variables.background.primary]: '#F6F6F6',
        [variables.background.secondary]: '#111111',
        [variables.background.card]: '#FFFFFF',

        [variables.text.primary]: '#2F2F2F',
        [variables.text.secondary]: '#FFFFFF',
        [variables.text.muted]: '#2F2F2F',

        [variables.accent]: '#FFCB74',
        [variables.borderColor]: '#2F2F2F',

        '@media (prefers-color-scheme: dark)': {
            [variables.background.primary]: '#111111',
            [variables.background.secondary]: '#F6F6F6',
            [variables.background.card]: '#2F2F2F',

            [variables.text.primary]: '#FFFFFF',
            [variables.text.secondary]: '#2F2F2F',
            [variables.text.muted]: '#F6F6F6',

            [variables.accent]: '#FFCB74',
            [variables.borderColor]: '#FFFFFF',
        },
    },

    body: {
        backgroundColor: theme.background.primary,
        color: theme.text.primary,
        fontFamily: "'Montserrat', sans-serif",
        fontSize: ['16px', 'clamp(12px, 1rem, 32px)'], // Follows WCAG guidelines
        lineHeight: 1.5,
    },
};

export function BaseStyle({ children }: PropsWithChildren) {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            {children}
        </ThemeProvider>
    );
}
