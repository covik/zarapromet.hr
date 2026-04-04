import styled from '@emotion/styled';
import * as css from '../css';

export const ContactCard = styled.div({
    backgroundColor: 'transparent',
    borderRadius: css.spacing(2),
    boxShadow: '0 0 3px #000C',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: ['"icon about" "desc desc" "action action"'],
    gap: css.spacing(2),
    padding: css.spacing(3),

    '@media (prefers-color-scheme: dark)': {
        boxShadow: '0 0 3px #FFFC',
    },
});

export const ContactIcon = styled.div({
    alignSelf: 'center',
    justifySelf: 'center',
    gridArea: 'icon',
    fill: `var(${css.variables.text.secondary})`,
    maxWidth: '96px',

    svg: {
        display: 'block',
        width: '100%',
    },
});

export const ContactAbout = styled.div({
    gridArea: 'about',
});

export const ContactTitle = styled.div({
    color: `var(${css.variables.text.secondary})`,
    lineHeight: 1,
});

export const ContactName = styled.h2({
    fontSize: '1.5em',
    fontWeight: '600',
    margin: 0,
});

export const ContactActions = styled.div({
    gridArea: 'action',
    display: 'grid',
    gap: css.spacing(0.7),
});

export const ContactDescription = styled.div({
    color: `var(${css.variables.text.secondary})`,
    lineHeight: '1.8',
    gridArea: 'desc',
    padding: `0 ${css.spacing(1)}`,
    marginBottom: '1em',
});
