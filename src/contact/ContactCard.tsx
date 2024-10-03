import styled from '@emotion/styled';
import {
    ContactEmail,
    ContactPhoneCall,
    ContactWhatsAppChat,
} from './CallToAction';
import { EmailIcon } from './icons/EmailIcon';
import { PersonIcon } from './icons/PersonIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { WhatsAppLogo } from './icons/WhatsAppLogo';

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
    backgroundColor: theme.background.secondary,
    color: '#333',
    borderRadius: '8px',
    display: 'inline-block',
    lineHeight: 1,
    padding: '4px',
}));

const ContactName = styled.h2({
    fontSize: '1.5em',
    fontWeight: '600',
    margin: 0,
});

const ContactActions = styled.div(({ theme }) => ({
    gridArea: 'action',
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(0.7),

    '> *': {
        flex: '1',
    },
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
    whatsAppChat?: boolean;
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

                {args.cellphoneNumber && args.whatsAppChat ? (
                    <ContactWhatsAppChat
                        href={`https://wa.me/${stripNonDigits(args.cellphoneNumber)}`}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label={`Chat on WhatsApp with ${args.fullName}`}
                    >
                        <WhatsAppLogo />
                        <span>Chat</span>
                    </ContactWhatsAppChat>
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

function stripNonDigits(input: string): string {
    return input.replace(/\D/g, ''); // \D matches any non-digit character
}
