import styled from '@emotion/styled';
import * as css from './css';
import { Logo } from './Logo';

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
    return (
        <Container>
            <Logo textColor={`var(${css.variables.text.primary})`} />
        </Container>
    );
}
