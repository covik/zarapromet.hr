export const variables = {
    background: {
        primary: '--primary-bg',
        secondary: '--secondary-bg',
    },
    text: {
        primary: '--primary-text',
        secondary: '--secondary-text',
    },
};

export function spacing(multiplier: number): string {
    return `${multiplier * 8}px`;
}
