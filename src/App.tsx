import styled from '@emotion/styled';
import { BaseStyle } from './BaseStyle';
import { ContactAbout, ContactActions, ContactCard, ContactDescription, ContactIcon, ContactName, ContactTitle } from './contact';
import { Header } from './Header';
import { Location } from './Location';
import { Services } from './services';
import * as css from './css';
import { ContactEmail, ContactPhoneCall } from './contact/CallToAction';
import { PhoneIcon } from './contact/icons/PhoneIcon';
import { EmailIcon } from './contact/icons/EmailIcon';
import { PersonIcon } from './contact/icons/PersonIcon';

const BaseContainer = styled.section({
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '64px 32px',
});

const ServicesContainer = styled(BaseContainer)({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: css.spacing(4),
    '@media (min-width: 600px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (min-width: 1200px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
    },
});

const ContactContainer = styled(BaseContainer)({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: css.spacing(4),
    '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
});

const LocationContainer = styled(BaseContainer)({
    height: '50vmax',
    width: '100%',
});

export function App() {
    return (
        <>
            <BaseStyle />
            <BaseContainer style={{ paddingTop: css.spacing(16) }}>
                <Header />
            </BaseContainer>

            <ServicesContainer>
                <Services />
            </ServicesContainer>

            <ContactContainer>
                <ContactCard>
                    <ContactIcon>
                        <PersonIcon />
                    </ContactIcon>

                    <ContactAbout>
                        <ContactName>Ante Nakić</ContactName>
                        <ContactTitle>CEO</ContactTitle>
                    </ContactAbout>

                    <ContactDescription>
                        <div>Transport inquiries</div>
                        <div>Invoicing and payments</div>
                        <div>Regulation and compliance</div>
                    </ContactDescription>

                    <ContactActions>
                        <ContactPhoneCall
                            href={`tel:+385915887191`}
                            aria-label={`Phone call with Ante Nakić`}
                        >
                            <PhoneIcon />
                            <span>Call</span>
                        </ContactPhoneCall>

                        <ContactEmail
                            href={`mailto:info@zarapromet.hr`}
                            aria-label={`Email conversation with Ante Nakić at info@zarapromet.hr`}
                        >
                            <EmailIcon />
                            <span>Email</span>
                        </ContactEmail>
                    </ContactActions>
                </ContactCard>
            </ContactContainer>

            <LocationContainer>
                <Location />
            </LocationContainer>
        </>
    );
}
