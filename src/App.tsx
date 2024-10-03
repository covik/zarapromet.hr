import styled from '@emotion/styled';
import 'normalize.css';
import { ContactCard } from './contact';
import { Header } from './header';
import { Location } from './location';
import { Resources } from './resources';
import { Services } from './services';

const BaseContainer = styled.section({
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '64px 32px',
});

const ServicesContainer = styled(BaseContainer)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(4),
    '@media (min-width: 600px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (min-width: 1200px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
    },
}));

const ContactContainer = styled(BaseContainer)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(4),
    '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
}));

const LocationContainer = styled(BaseContainer)({
    maxWidth: '100%',
    height: '50vmax',
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
});

export function App() {
    return (
        <>
            <BaseContainer style={{ paddingTop: '128px' }}>
                <Header />
            </BaseContainer>

            <ServicesContainer>
                <Services />
            </ServicesContainer>

            <ServicesContainer>
                <Resources />
            </ServicesContainer>

            <ContactContainer>
                <ContactCard
                    fullName={'Ante Nakić'}
                    email={'info@zarapromet.hr'}
                    title={'CEO'}
                    cellphoneNumber={'+385915887191'}
                    whatsAppChat
                    description={[
                        'Transport inquiries',
                        'Emergencies',
                        'Invoice issues',
                        'Regulations and compliance',
                    ]}
                />

                <ContactCard
                    fullName={'Mate Nakić'}
                    email={'it@zarapromet.hr'}
                    title={'CIO'}
                    description={[
                        'Communication problems',
                        'Third-party integrations',
                        'Device and account management',
                    ]}
                />
            </ContactContainer>

            <LocationContainer>
                <Location />
            </LocationContainer>
        </>
    );
}
