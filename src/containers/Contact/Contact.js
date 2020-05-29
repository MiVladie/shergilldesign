import React from 'react';

import Banner from '../../components/Banner/Banner';
import Intro from '../../components/Intro/Intro';
import Message from '../../components/Message/Message';

import bannerImage from '../../assets/images/template_04.jpg';

const contact = () => {
    return (
    	<React.Fragment>
            <Banner 
                meta = 'Contact' 
                main = 'Get in touch' 
                description = 'Fusce maximus enim quis condimentum finibus. Etiam auctor nisi vitae accumsan aliquet. Aenean pharetra sem maximus, iaculis sapien eu, venenatis justo.'
                background = { bannerImage } />
                
            <Intro 
                meta = 'Contact'
                main = 'Reach out to us'
                description = 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum finibus est aliquam nisi blandit, eu sollicitudin elit bibendum. Curabitur sed mi feugiat mauris cursus maximus.' />
                
            <Message
                image = { bannerImage } />
    	</React.Fragment>
    );
}

export default contact;
