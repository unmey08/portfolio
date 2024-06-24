/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from "../models/Island";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const adjustIslandForScreenSize = () => {
        let screenScale;
        // let screenPosition = [0, -6.5, -43];
        let screenPosition = [0, -10, -35];
        let rotation = [0.1, 4.7, 0];
        if (window.innerWidth < 768) {
            screenScale = [0.08, 0.08, 0.08];
        }
        else {
            screenScale = [0.05, 0.05, 0.05];
        }
        return [screenScale, screenPosition, rotation];
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

    return (
        <section className={`w-full h-screen relative ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className='w-full h-screen bg-transparent'
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[0, 1, 1]} intensity={2} />
                    <ambientLight intensity={1} />
                    <pointLight />
                    <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={2} />
                    <Island position={islandPosition} scale={islandScale} rotation={islandRotation} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home