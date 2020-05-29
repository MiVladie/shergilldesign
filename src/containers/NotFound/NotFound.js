import React from 'react';

import Banner from '../../components/Banner/Banner';

import bannerImage from '../../assets/images/template_02.jpg';

const notFound = () => {
    return (
    	<React.Fragment>            
            <Banner 
                meta = 'Not found!' 
                main = 'Page Not Found' 
                description = 'The page you are looking for does not exist or an other error occured! Go back, or head over to shergilldesign.co.uk to choose a new direction.'
                background = { bannerImage }
                hideScroll />

    	</React.Fragment>
    );
}

export default notFound;
