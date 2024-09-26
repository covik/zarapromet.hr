import styled from '@emotion/styled';
import { Resources } from './Resources';
import type { Meta, StoryObj } from '@storybook/react';

const DummyContainer = styled.div({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 300px)',
    gap: '16px',
});

export default {
    title: 'Example/Resources',
    component: Resources,
    decorators: [
        (Story) => (
            <DummyContainer>
                <Story />
            </DummyContainer>
        ),
    ],
} satisfies Meta<typeof Resources>;

type Story = StoryObj<typeof Resources>;

export const Default: Story = {};
