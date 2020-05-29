import React, { useState } from 'react';

import Banner from '../../components/Banner/Banner';
import Intro from '../../components/Intro/Intro';
import Bio from '../../components/Bio/Bio';
import Step from '../../components/Step/Step';
import Interstitial from '../../components/Interstitial/Interstitial';
import Discuss from '../../components/Discuss/Discuss';
import Promotion from '../../components/Promotion/Promotion';

import bannerImage from '../../assets/images/template_03.jpg';

import template_04 from '../../assets/images/template_04.jpg';
import template_07 from '../../assets/images/template_07.jpg';

import photo1 from '../../assets/images/photo_1.jpg';
import photo2 from '../../assets/images/photo_2.jpg';

const About = () => {
    const [promotion, setPromotion] = useState(true);

    document.body.style.position = promotion ? 'fixed' : 'static';

    return (
    	<React.Fragment>
            { promotion ? <Promotion hide = { () => setPromotion(false) } /> : null }

            <Banner 
                meta = 'About us' 
                main = 'Our story' 
                description = 'Fusce maximus enim quis condimentum finibus. Etiam auctor nisi vitae accumsan aliquet. Aenean pharetra sem maximus, iaculis sapien eu, venenatis justo.'
                background = { bannerImage } />
                
            <Intro 
                meta = 'The story'
                main = 'Who we are'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum finibus est aliquam nisi blandit, eu sollicitudin elit bibendum. Curabitur sed mi feugiat mauris cursus maximus.' />

            <Bio
                meta = 'About me'
                main = 'Davinder Shergill'
                description = 'I gained a BA (Hons) in Architecture from the University of Liverpool in 2006. The projects at the University of Liverpool Architecture Department were building focused so understanding the problems faced when designing a new structure. Providing order and maximising daylight were rules i followed then and still implement to this day. My architectural background is mainly residential however I have previous experience in commercial and religious projects. I recognise space is limited so I look to ensure space is appropriated correctly.'
                phone = '07835 376 629'
                email = 'davinder_shergill@yahoo.co.uk'
                image = { photo2 } />
                
            <Step
                meta = 'Why choose us?'
                main = 'How we are different'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum finibus est aliquam nisi blandit, eu sollicitudin elit bibendum. Curabitur sed mi feugiat mauris cursus maximus.'
                image = { photo1 }
                linkTo = '/process'
                linkText = 'Read more'
                reversed />

            <Interstitial
                image = { template_04 }
                meta = 'Contact us'
                main = 'We design and plan homes in London'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada.'
                linkTo = '/contact'
                linkText = 'Get in touch' />
                
            <Step
                meta = 'Services'
                main = 'What we do'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum finibus est aliquam nisi blandit, eu sollicitudin elit bibendum. Curabitur sed mi feugiat mauris cursus maximus.'
                image = { template_07 }
                linkTo = '/services'
                linkText = 'Learn more'
                reversed />

            <Discuss 
                meta = 'Ready to discuss your ideas?'
                main = 'We would love to hear from you! Contact us now and we will get back to you as soon as possible!'
                linkTo = '/contact'
                linkText = 'Get in touch' />
    	</React.Fragment>
    );
}

export default About;
