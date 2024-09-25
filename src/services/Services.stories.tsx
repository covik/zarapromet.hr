import styled from '@emotion/styled';
import { Services } from './Services';
import type { Meta, StoryObj } from '@storybook/react';

const DummyContainer = styled.div({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 300px)',
    gap: '16px',
});

export default {
    title: 'Example/Services',
    component: Services,
    decorators: [
        (Story) => (
            <DummyContainer>
                <Story />
            </DummyContainer>
        ),
    ],
} satisfies Meta<typeof Services>;

type Story = StoryObj<typeof Services>;

export const Default: Story = {};
