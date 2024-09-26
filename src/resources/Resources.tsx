import { Building } from './icons/Building';
import { Cake } from './icons/Cake';
import { Truck } from './icons/Truck';
import { Workforce } from './icons/Workforce';
import {
    Resource,
    ResourceCount,
    ResourceDescription,
    ResourceIcon,
} from './Resource';

export function Resources() {
    return (
        <>
            <Resource>
                <ResourceCount>6</ResourceCount>
                <ResourceIcon>
                    <Truck />
                </ResourceIcon>
                <ResourceDescription>
                    delivering variety of goods across Europe
                </ResourceDescription>
            </Resource>

            <Resource>
                <ResourceCount>10</ResourceCount>
                <ResourceIcon>
                    <Workforce />
                </ResourceIcon>
                <ResourceDescription>
                    professionals dedicated to your service
                </ResourceDescription>
            </Resource>

            <Resource>
                <ResourceCount>1</ResourceCount>
                <ResourceIcon>
                    <Building />
                </ResourceIcon>
                <ResourceDescription>
                    keeping all parties safe and up to date
                </ResourceDescription>
            </Resource>

            <Resource>
                <ResourceCount>15</ResourceCount>
                <ResourceIcon>
                    <Cake />
                </ResourceIcon>
                <ResourceDescription>
                    years delivering exceptional services
                </ResourceDescription>
            </Resource>
        </>
    );
}
