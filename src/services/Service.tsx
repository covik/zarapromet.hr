import styled from '@emotion/styled';
import * as css from '../css'

export const Service = styled.div({
    backgroundColor: 'transparent',
    boxShadow: '0 0 3px #000C',
    borderRadius: css.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    padding: css.spacing(3),

    '@media (prefers-color-scheme: dark)': {
        boxShadow: '0 0 3px #FFFC',
    },
});

export const ServiceName = styled.h2({
    color: `var(${css.variables.text.primary})`,
    fontWeight: 600,
    margin: `${css.spacing(3)} 0 ${css.spacing(1)}`,
});

export const ServiceDescription = styled.div({
    color: `var(${css.variables.text.secondary})`,
});

export const ServiceIcon = styled.div({
    alignSelf: 'center',
    fill: `var(${css.variables.text.primary})`,
    stroke: `var(${css.variables.text.primary})`,
    width: '72px',
});
