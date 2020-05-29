import React, { useState } from 'react';

import Banner from '../../components/Banner/Banner';
import Intro from '../../components/Intro/Intro';
import Step from '../../components/Step/Step';
import Interstitial from '../../components/Interstitial/Interstitial';
import Discuss from '../../components/Discuss/Discuss';
import Promotion from '../../components/Promotion/Promotion';

import bannerImage from '../../assets/images/template_05.jpg';

import template_03 from '../../assets/images/template_03.jpg';
import template_04 from '../../assets/images/template_04.jpg';
import template_07 from '../../assets/images/template_07.jpg';

const Process = () => {
    const [promotion, setPromotion] = useState(true);

    document.body.style.position = promotion ? 'fixed' : 'static';

    return (
    	<React.Fragment>
            { promotion ? <Promotion hide = { () => setPromotion(false) } /> : null }

            <Banner 
                meta = 'Process' 
                main = 'How we do it' 
                description = 'Fusce maximus enim quis condimentum finibus. Etiam auctor nisi vitae accumsan aliquet. Aenean pharetra sem maximus, iaculis sapien eu, venenatis justo.'
                background = { bannerImage } />
                
            <Intro 
                meta = 'The process'
                main = 'The way we do it'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum finibus est aliquam nisi blandit, eu sollicitudin elit bibendum. Curabitur sed mi feugiat mauris cursus maximus.' />
                
            <Step
                meta = 'Step 1'
                main = 'Site survey'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum finibus est aliquam nisi blandit, eu sollicitudin elit bibendum. Curabitur sed mi feugiat mauris cursus maximus.'
                image = { template_03 }
                reversed />

            <Interstitial
                image = { template_04 }
                meta = 'Step 2'
                main = 'Planning'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada.' />
                
            <Step
                meta = 'Step 3'
                main = 'Project managing'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum finibus est aliquam nisi blandit, eu sollicitudin elit bibendum. Curabitur sed mi feugiat mauris cursus maximus.'
                image = { template_07 }
                reversed />
                
            <Discuss 
                meta = 'Ready to discuss your ideas?'
                main = 'We would love to hear from you! Contact us now and we will get back to you as soon as possible!'
                linkTo = '/contact'
                linkText = 'Get in touch' />
    	</React.Fragment>
    );
}

export default Process;
