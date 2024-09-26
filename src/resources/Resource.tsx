import styled from '@emotion/styled';

export const Resource = styled.div(({ theme }) => ({
    backgroundColor: 'transparent',
    boxShadow: '0 0 3px #000C',
    borderRadius: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    transition: 'background-color 300ms',
    '&:hover': {
        backgroundColor: '#0001',
    },

    '@media (prefers-color-scheme: dark)': {
        boxShadow: '0 0 3px #FFFC',
        '&:hover': {
            backgroundColor: '#FFF1',
        },
    },
}));

export const ResourceCount = styled.h2(({ theme }) => ({
    color: theme.text.primary,
    fontSize: '92px',
    fontWeight: 600,
    margin: 0,
    textAlign: 'center',
}));

export const ResourceDescription = styled.div(({ theme }) => ({
    color: theme.text.secondary,
    fontSize: '1.2em',
    marginTop: theme.spacing(2),
    textAlign: 'center',
}));

export const ResourceIcon = styled.div(({ theme }) => ({
    alignSelf: 'center',
    fill: theme.text.primary,
    stroke: theme.text.primary,
    width: '56px',
}));
