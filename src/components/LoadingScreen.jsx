import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/animationKite.json';

const LoadingScreen = ({ loading }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="fixed inset-0 flex flex-col items-start justify-start bg-white z-50">
            <div className="m-4 ml-20 mt-6">
                <p className="text-blue-900 font-bold text-2xl cursor-pointer">Anup</p>
                <p className="text-blue-900 font-bold text-2xl cursor-pointer">Kumar</p>
            </div>
            <div className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
        </div>
    );
};

export default LoadingScreen;
