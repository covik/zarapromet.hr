export interface Theme {
    background: {
        primary: string;
        secondary: string;
    };
    text: {
        primary: string;
        secondary: string;
    };
    spacing: (multiplier: number) => string;
}
