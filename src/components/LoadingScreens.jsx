import React from 'react';
import '../styles/loadingScreen.css'

const LoadingScreens = () => {
    return (
        <div className='overlay'>
             <div className="lds-circle"><div></div>
            </div>
        </div>
    );
};

export default LoadingScreens;
