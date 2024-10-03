import styled from '@emotion/styled';

const Container = styled.iframe({
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
        <Container src="https://www.google.com/maps/embed/v1/place?q=Zara%20Promet%2C%20Murvica&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></Container>
    );
}
