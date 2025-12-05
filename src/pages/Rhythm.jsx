import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DrumMachine from '../components/DrumMachine';
import PageLayout from '../components/layout/PageLayout';
import { useHomeData } from '../hooks/useStrapiData';
import { Helmet } from'react-helmet-async';

const Rhythm = () => {
    const { data: response } = useHomeData();
    const homeData = response?.data || null;

    useEffect(() => {
        // Add class to body for Rhythm page
        document.body.classList.add('rhythm-page');
        
        return () => {
            // Remove class when component unmounts
            document.body.classList.remove('rhythm-page');
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>{'Rhythm'}</title>
                <meta
                    property="og:title"
                    content={'Rhythm'}
                />
                <meta property="og:type" content="website" />
            </Helmet>
            <PageLayout>
                <div className="flex flex-col">
                    <div className="mb-8">
                        <p className="text-[16px] md:text-[16pt] text-black dark:text-white max-w-xl italic">
                            It's not about the notes you play, it's about the grooves you lay.
                        </p>
                    </div>
                    <div className="mb-8 text-[16px] md:text-[16pt] text-black dark:text-white">
                        {homeData?.DrumContent}
                    </div>
                    <DrumMachine />

                    <div className="flex items-center text-[16px] md:text-[16pt] text-black dark:text-white mt-16">
                        <span className="mr-2">←</span>
                        <Link to="/" className="rainbow-hover">Back</Link>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};

export default Rhythm;