import styled from '@emotion/styled';

export const Service = styled.div(({ theme }) => ({
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

export const ServiceName = styled.h2(({ theme }) => ({
    color: theme.text.primary,
    fontWeight: 600,
    margin: `${theme.spacing(3)} 0 ${theme.spacing(1)}`,
}));

export const ServiceDescription = styled.div(({ theme }) => ({
    color: theme.text.secondary,
}));

export const ServiceIcon = styled.div(({ theme }) => ({
    alignSelf: 'center',
    fill: theme.text.primary,
    stroke: theme.text.primary,
    width: '72px',
}));
