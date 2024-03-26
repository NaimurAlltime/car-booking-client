import React from 'react';

const Googlemap = ({iframe}:{iframe:string}) => {
    return (
        <div>
            <iframe 
        src={iframe} 
        style={{ border: 0 }} 
        loading="lazy" 
        title="Google Map"
      ></iframe>
        </div>
    );
};

export default Googlemap;