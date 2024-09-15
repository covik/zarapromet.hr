import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Logo } from '../logo';

const Container = styled.header({
    display: 'flex',
    justifyContent: 'center',

    svg: {
        width: '320px',
        height: 'auto',
        display: 'block',
    },
});

export function Header() {
    const theme = useTheme();

    return (
        <Container>
            <Logo textColor={theme.text.primary} />
        </Container>
    );
}
