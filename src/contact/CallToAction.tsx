import styled from '@emotion/styled';
import * as css from '../css';

const CallToAction = styled.a({
    borderWidth: '2px',
    borderStyle: 'solid',
    color: '#fff',
    fill: '#fff',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: css.spacing(2),
    padding: `${css.spacing(1)} ${css.spacing(2)}`,
    transition: 'background-color 0.3s ease',

    svg: {
        width: '24px',
    },
});

export const ContactPhoneCall = styled(CallToAction)({
    borderColor: '#db8f00',
    color: '#db8f00',
    fill: '#db8f00',

    '&:hover': {
        backgroundColor: '#db8f00',
        color: '#fff',
        fill: '#fff',
    },
});

export const ContactEmail = styled(CallToAction)({
    borderColor: '#0094ff',
    color: '#0094ff',
    fill: '#0094ff',

    '&:hover': {
        backgroundColor: '#0094ff',
        color: '#fff',
        fill: '#fff',
    },
});
