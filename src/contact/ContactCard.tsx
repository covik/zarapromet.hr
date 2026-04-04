import styled from '@emotion/styled';
import * as css from '../css';

export const ContactCard = styled.div({
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: css.spacing(2),
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0 0 12px rgba(0, 0, 0, 0.06)',
    display: 'grid',
    gridTemplateColumns: 'min-content',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: ['"icon about" "desc desc" "action action"'],
    gap: css.spacing(2),
    padding: css.spacing(3),

    '@media (prefers-color-scheme: dark)': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 0 12px rgba(255, 255, 255, 0.06)',
    },
});

export const ContactAvatar = styled.div({
    alignSelf: 'center',
    justifySelf: 'center',
    gridArea: 'icon',
    fill: `var(${css.variables.text.secondary})`,
    maxWidth: '96px',

    img: {
        borderRadius: css.spacing(2),
        display: 'block',
        width: '64px',
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
    gridTemplateColumns: '1fr 1fr',
    display: 'grid',
    gap: css.spacing(0.7),
});

export const ContactDescription = styled.div({
    color: `var(${css.variables.text.secondary})`,
    lineHeight: '1.8',
    gridArea: 'desc',
    marginBottom: '1em',
});
