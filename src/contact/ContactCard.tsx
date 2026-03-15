import styled from '@emotion/styled';
import {
    ContactEmail,
    ContactPhoneCall,
} from './CallToAction';
import { EmailIcon } from './icons/EmailIcon';
import { PersonIcon } from './icons/PersonIcon';
import { PhoneIcon } from './icons/PhoneIcon';

const ContactRoot = styled.div(({ theme }) => ({
    backgroundColor: 'transparent',
    borderRadius: theme.spacing(2),
    boxShadow: '0 0 3px #000C',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: ['"icon about" "desc desc" "action action"'],
    gap: '16px',
    padding: theme.spacing(3),

    '@media (prefers-color-scheme: dark)': {
        boxShadow: '0 0 3px #FFFC',
    },
}));

const ContactIcon = styled.div(({ theme }) => ({
    alignSelf: 'center',
    justifySelf: 'center',
    gridArea: 'icon',
    fill: theme.text.primary,
    maxWidth: '96px',

    svg: {
        display: 'block',
        width: '100%',
    },
}));

const ContactAbout = styled.div({
    gridArea: 'about',
});

const ContactTitle = styled.div(({ theme }) => ({
    color: theme.text.secondary,
    lineHeight: 1,
}));

const ContactName = styled.h2({
    fontSize: '1.5em',
    fontWeight: '600',
    margin: 0,
});

const ContactActions = styled.div(({ theme }) => ({
    gridArea: 'action',
    display: 'grid',
    gap: theme.spacing(0.7),
}));

const ContactDescription = styled.div(({ theme }) => ({
    fontWeight: '600',
    lineHeight: '1.8',
    gridArea: 'desc',
    padding: `0 ${theme.spacing(1)}`,
    marginBottom: '1em',
}));

export interface ContactCardProps {
    fullName: string;
    email: string;
    title: string;
    cellphoneNumber?: string;
    description: string[];
}

export function ContactCard(args: ContactCardProps) {
    return (
        <ContactRoot>
            <ContactIcon>
                <PersonIcon />
            </ContactIcon>

            <ContactAbout>
                <ContactName>{args.fullName}</ContactName>
                <ContactTitle>{args.title}</ContactTitle>
            </ContactAbout>

            <ContactDescription>
                {args.description.map((line) => (
                    <div key={line}>{line}</div>
                ))}
            </ContactDescription>

            <ContactActions>
                {args.cellphoneNumber ? (
                    <ContactPhoneCall
                        href={`tel:${args.cellphoneNumber}`}
                        aria-label={`Phone call with ${args.fullName}`}
                    >
                        <PhoneIcon />
                        <span>Call</span>
                    </ContactPhoneCall>
                ) : undefined}

                <ContactEmail
                    href={`mailto:${args.email}`}
                    aria-label={`Email conversation with ${args.fullName} at ${args.email}`}
                >
                    <EmailIcon />
                    <span>Email</span>
                </ContactEmail>
            </ContactActions>
        </ContactRoot>
    );
}
