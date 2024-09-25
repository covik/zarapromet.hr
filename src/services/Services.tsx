import { Croatia } from './icons/Croatia';
import { Freeze } from './icons/Freeze';
import { Globe } from './icons/Globe';
import { Hazard } from './icons/Hazard';
import {
    Service,
    ServiceDescription,
    ServiceIcon,
    ServiceName,
} from './Service';

export function Services() {
    return (
        <>
            <Service>
                <ServiceIcon>
                    <Globe />
                </ServiceIcon>
                <ServiceName>International transport</ServiceName>
                <ServiceDescription>
                    Reliable cross-border transport services, ensuring safe and
                    timely delivery across Europe.
                </ServiceDescription>
            </Service>
            <Service>
                <ServiceIcon>
                    <Croatia />
                </ServiceIcon>
                <ServiceName>Local transport</ServiceName>
                <ServiceDescription>
                    Fast and flexible transport across Croatia, ensuring your
                    goods reach their destination with care and precision.
                </ServiceDescription>
            </Service>
            <Service>
                <ServiceIcon>
                    <Freeze />
                </ServiceIcon>
                <ServiceName>Refrigerated transport</ServiceName>
                <ServiceDescription>
                    Ensuring optimal temperature conditions for your goods, no
                    matter the distance.
                </ServiceDescription>
            </Service>
            <Service>
                <ServiceIcon>
                    <Hazard />
                </ServiceIcon>
                <ServiceName>ADR</ServiceName>
                <ServiceDescription>
                    Certified and secure handling of hazardous materials,
                    adhering to all safety regulations.
                </ServiceDescription>
            </Service>
        </>
    );
}
