import React from 'react';

import './Loader.component.scss';

const Loader = () => {
    return (
        <div className='loader'>
            <div className='circles'>
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
            </div>
        </div>
    )
};

export default Loader;