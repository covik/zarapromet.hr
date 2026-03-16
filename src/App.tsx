import styled from '@emotion/styled';
import { BaseStyle } from './BaseStyle';
import { ContactCard } from './contact';
import { Header } from './Header';
import { Location } from './Location';
import { Services } from './services';
import * as css from './css';

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
                <ContactCard
                    fullName={'Ante Nakić'}
                    email={'info@zarapromet.hr'}
                    title={'CEO'}
                    cellphoneNumber={'+385915887191'}
                    description={[
                        'Transport inquiries',
                        'Invoicing and payments',
                        'Regulation and compliance',
                    ]}
                />

                <ContactCard
                    fullName={'Mate Nakić'}
                    email={'it@zarapromet.hr'}
                    title={'CIO'}
                    description={[
                        'Third-party integrations',
                        'Communication support',
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
