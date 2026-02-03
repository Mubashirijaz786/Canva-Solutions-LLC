import React from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../../utils/config';

const MetaData = ({ title, description, keywords }) => {
    const location = useLocation();
    const currentUrl = `${SITE_URL}${location.pathname}`;

    return (
        <>
            {/* React 19 hoists these to <head> automatically */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content="website" />
        </>
    );
};

export default MetaData;