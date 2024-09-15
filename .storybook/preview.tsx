import { BaseStyle } from '../src/BaseStyle'; // Adjust path as necessary
import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            tags: ['autodocs'],
        },
    },
    decorators: [
        (Story) => (
            <BaseStyle>
                <Story />
            </BaseStyle>
        ),
    ],
};

export default preview;
