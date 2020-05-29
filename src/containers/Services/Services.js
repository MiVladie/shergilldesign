import React, { useState } from 'react';

import Banner from '../../components/Banner/Banner';
import Intro from '../../components/Intro/Intro';
import Tabs from '../../components/Tabs/Tabs';
import Step from '../../components/Step/Step';
import Interstitial from '../../components/Interstitial/Interstitial';
import Message from '../../components/Message/Message';
import Promotion from '../../components/Promotion/Promotion';

import bannerImage from '../../assets/images/template_07.jpg';

import template_01 from '../../assets/images/template_01.jpg';
import template_02 from '../../assets/images/template_02.jpg';
import template_03 from '../../assets/images/template_03.jpg';
import template_04 from '../../assets/images/template_04.jpg';
import template_07 from '../../assets/images/template_07.jpg';

const Services = () => {
    const [promotion, setPromotion] = useState(true);

    document.body.style.position = promotion ? 'fixed' : 'static';

    return (
    	<React.Fragment>
            { promotion ? <Promotion hide = { () => setPromotion(false) } /> : null }

            <Banner 
                meta = 'Services' 
                main = 'What we do' 
                description = 'Fusce maximus enim quis condimentum finibus. Etiam auctor nisi vitae accumsan aliquet. Aenean pharetra sem maximus, iaculis sapien eu, venenatis justo.'
                background = { bannerImage } />

            <Intro 
                meta = 'Services'
                main = 'How we can help'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum finibus est aliquam nisi blandit, eu sollicitudin elit bibendum. Curabitur sed mi feugiat mauris cursus maximus.' />
                
            <Tabs
                data = { [
                    { name: 'Building control', description: 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada.', image: template_07, linkTo: '/contact', linkText: 'Request' },
                    { name: 'Planning application', description: 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada.', image: template_04, linkTo: '/contact', linkText: 'Request' },
                    { name: 'Garage conversions', description: 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada.', image: template_03, linkTo: '/contact', linkText: 'Request' }
                ] } />
                
            <Interstitial
                image = { template_03 }
                meta = 'Process'
                main = 'How we do it'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada.'
                linkTo = '/process'
                linkText = 'Read more' />
                
            <Tabs
                data = { [
                    { name: 'Enforcement notice', description: 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada.', image: template_01, linkTo: '/contact', linkText: 'Request' },
                    { name: 'Lawful development certificates', description: 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada.', image: template_03, linkTo: '/contact', linkText: 'Request' },
                    { name: 'Planning appeal', description: 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada.', image: template_04, linkTo: '/contact', linkText: 'Request' }
                ] } />
                
            <Step
                meta = 'Service'
                main = 'Permitted development'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum finibus est aliquam nisi blandit, eu sollicitudin elit bibendum. Curabitur sed mi feugiat mauris cursus maximus.'
                image = { template_07 }
                linkTo = '/contact'
                linkText = 'Request'
                reversed />
                
            <Interstitial
                image = { template_03 }
                meta = 'Service'
                main = 'House in multiple occupation license (HMO)'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada.'
                linkTo = '/contact'
                linkText = 'Request' />
                
            <Step
                meta = 'Service'
                main = 'Planning appeal'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum finibus est aliquam nisi blandit, eu sollicitudin elit bibendum. Curabitur sed mi feugiat mauris cursus maximus.'
                image = { template_02 }
                linkTo = '/contact'
                linkText = 'Request'
                reversed />
                
            <Message
                image = { template_04 } />
    	</React.Fragment>
    );
}

export default Services;
