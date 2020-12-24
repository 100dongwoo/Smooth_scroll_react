import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
    ServicesCard,
    ServicesContainer,
    SerivcesH1,
    ServicesH2,
    SerivcesP,
    ServicesIcon,
    ServicesWrapper,
} from './ServiceElements';

function Services(props) {
    return (
        <ServicesContainer id="services">
            <SerivcesH1> Our Services</SerivcesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <SerivcesP>
                        We help reduce your fees and increase your overall
                        revenue
                    </SerivcesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <SerivcesP>
                        You can access our platform online anyywhere in the word
                    </SerivcesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Prmium benefit</ServicesH2>
                    <SerivcesP>
                        We help reduce your fees and increase your overall
                        revenue
                    </SerivcesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services;
