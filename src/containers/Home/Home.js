import React from 'react';

import Banner from '../../components/Banner/Banner';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Bio from '../../components/Bio/Bio';
import Cards from '../../components/Cards/Cards';
import Informative from '../../components/Informative/Informative';
import Interstitial from '../../components/Interstitial/Interstitial';
import Message from '../../components/Message/Message';

import bannerImage from '../../assets/images/template_02.jpg';
import photo2 from '../../assets/images/photo_2.jpg';
import template_01 from '../../assets/images/template_01.jpg';
import template_03 from '../../assets/images/template_03.jpg';
import template_04 from '../../assets/images/template_04.jpg';
import template_05 from '../../assets/images/template_05.jpg';
import template_07 from '../../assets/images/template_07.jpg';

const Home = () => {
    return (
    	<React.Fragment>            
            <Banner 
                image = { bannerImage }
                meta = 'Welcome to' 
                main = 'Shergill Design' 
                description = 'Architect PLANNING Services based in London. We have been investing in buy-to-let properties over 20 years if you are interested in buy-to-let investment! We have our team of builders to carry out on any projects.'
                linkTo = 'contact'
                linkText = 'Request a quote'
                scrollTo = 'intro' />

            <Section id = 'intro'>
                <Introduction 
                    meta = 'Welcome to'
                    main = 'Shergill Design'
                    description = { ['SHERGILLDESIGN is Architectural Design & Planning service located in west London. We prepare Planning, Building, Regulation & Application for all kinds of properties. We work local builders to get planning permission approved for their clients. Any project will initially come require measured Survey, then proposal plan, then drawn using CAD sent to client before submitting to planning authorities.'] } />
            </Section>

            <Section id = 'about'>
                <Bio
                    meta = 'About me'
                    main = 'Davinder Shergill'
                    description = 'I gained a BA (Hons) in Architecture from the University of Liverpool in 2006. The projects at the University of Liverpool Architecture Department were building focused so understanding the problems faced when designing a new structure. Providing order and maximising daylight were rules i followed then and still implement to this day. My architectural background is mainly residential however I have previous experience in commercial and religious projects. I recognise space is limited so I look to ensure space is appropriated correctly.'
                    phone = '07835 376 629'
                    email = 'davinder_shergill@yahoo.co.uk'
                    image = { photo2 } />
            </Section>

            <Section id = 'services'>
                <Introduction 
                    meta = 'Our services'
                    main = 'What we offer' />

                <Cards
                    data = { [
                        { name: 'Building control', description: 'Building regulations approval is different from planning permission any new extension or loft extension or major alteration should submit application buildings regulation.', image: template_07, linkTo: '#contact', linkText: 'Request' },
                        { name: 'Loft conversions', description: 'Converting your existing loft space can be done in the cost effective way. For extra space for your bedroom or office, please get in touch with us. Plan drawings for loft starting from £380.', image: template_05, linkTo: '#contact', linkText: 'Request' },
                        { name: 'Garage conversions', description: "Side garage convertions can be simple project & cost effective. Extra space can be added for dining/TV room. In many instances, garage conversions can be completed at permitted development permission. However, if the plans fall outside of these limitations, then planning permission will be required.", image: template_03, linkTo: '#contact', linkText: 'Request' }
                    ] } />
            </Section>
            
            <Interstitial
                image = { template_03 }
                meta = 'Service'
                main = 'Lawful certificate (LDC)'
                description = 'We can apply lawful certificate with full drawing. Determine whether your unauthorised use or development can come lawful we help to submit application preparation of evidence and affidavit. Call us at 07778 254 350'
                linkTo = 'tel:07778 254 350'
                linkText = 'Call now' />
                
            <Informative
                meta = 'Service'
                main = 'Enforcement notice'
                description = 'When you receive enforcement notice or PCN Notice it can be a very scary experience for any body. Coucil will ask reversed or mortified to original or demolish the building. In Enforcement Case we start communication with coucil and negotiation with enforcement officer. If all negotiations with local authorities are unsuccessful we can help you appeal against the Enforcement Notice.'
                image = { template_01 }
                linkTo = '#contact'
                linkText = 'Get in touch'
                reversed />
                                
            <Interstitial
                image = { template_07 }
                meta = 'Service'
                main = 'House in multiple occupation licence (HMO)'
                description = 'If you want to rent a room in to unrelated individuals they need the HMO licence from your local authorities. We can help you to submit the application. Please, call us at 07778 254 350, Gill.'
                linkTo = 'tel:07778 254 350'
                linkText = 'Call now' />

            <Message
                id = 'contact'
                image = { template_04 }
                main = 'Get in touch'
                description = 'Have any questions? Feel free to use contact form below to get in touch with us. We will answer you as soon as possible!' />
    	</React.Fragment>
    );
}

export default Home;
