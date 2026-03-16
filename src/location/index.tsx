import styled from '@emotion/styled';
import * as css from '../css'

const Container = styled.div({
    boxShadow: '0 0 3px #0001',
    borderRadius: css.spacing(2),
    height: '100%',
    overflow: 'hidden',

    '@media (prefers-color-scheme: dark)': {
        boxShadow: '0 0 3px #FFFC',
    },
});

const Iframe = styled.iframe({
    border: 0,
    display: 'block',
    height: '100%',
    width: '100%',

    '@media (prefers-color-scheme: dark)': {
        filter: 'invert(90%) grayscale(1)',
    },
});

export function Location() {
    return (
        <Container>
            <Iframe src="https://www.google.com/maps/embed/v1/place?q=Zara%20Promet%2C%20Murvica&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></Iframe>
        </Container>
    );
}
