/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from "../models/Island";
import HomeInfo from "../components/HomeInfo";
import HomeFooter from "../components/HomeFooter";


const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [showSwipeText, setShowSwipeText] = useState(true);

    const adjustIslandForScreenSize = () => {
        let screenScale;
        // let screenPosition = [0, -6.5, -43];
        let screenPosition = [0, -10, -35];
        let rotation = [0.1, 4.7, 0];
        if (window.innerWidth < 768) {
            screenScale = [0.05, 0.05, 0.05];
        }
        else {
            screenScale = [0.05, 0.05, 0.05];
        }
        return [screenScale, screenPosition, rotation];
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

    useEffect(() => {
        setTimeout(() => {
            setShowSwipeText(false);
        }, 5000)
    }, [])

    return (
        <section className={`w-full h-[100vh] dark:h-[100vh] relative ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            {window.innerWidth >= 768 && showSwipeText && <div className='absolute top-3/4 left-3/4 right-0 z-10 bg-black-500/50 m-0 text-gray-300 rounded-xl text-center p-2 transition-opacity duration-1000' style={{width: '10%'}}>
                <span>Rotate for a 360<span>&#176;</span> view!</span>
            </div>}
            {window.innerWidth < 768 && showSwipeText && <div className='absolute left-1/4 right-0 z-10 bg-black-500/50 m-0 text-gray-300 rounded-xl text-center p-2 transition-opacity duration-1000' style={{width: '50%', top: '90%'}}>
                <span>Rotate for a 360<span>&#176;</span> view!</span>
            </div>}
            <Canvas
                className='w-full h-screen bg-transparent'
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[0, 1, 1]} intensity={2} />
                    <ambientLight intensity={1} />
                    <pointLight />
                    <hemisphereLight skyColor='#000000' groundColor='#000000' intensity={2} />
                    <Island position={islandPosition} scale={islandScale} rotation={islandRotation} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} />
                </Suspense>
            </Canvas>
            <HomeFooter />
        </section>
    )
}

export default Home