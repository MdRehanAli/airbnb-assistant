import Image from 'next/image';
import React from 'react';

const Tools = () => {

    const tools = [
        { image: "/assets/tools/image1.png", name: "Image 1" },
        { image: "/assets/tools/image2.png", name: "Image 2" },
        { image: "/assets/tools/image3.png", name: "Image 3" },
        { image: "/assets/tools/image4.png", name: "Image 4" },
        { image: "/assets/tools/image5.png", name: "Image 5" },
        { image: "/assets/tools/image6.png", name: "Image 6" },
        { image: "/assets/tools/image7.png", name: "Image 7" },
        { image: "/assets/tools/image8.png", name: "Image 8" },
        { image: "/assets/tools/image9.png", name: "Image 9" },
    ]

    return (
        <section>
            <div>
                <h1 className='text-center text-[32px] font-bold'>Our <span className='text-primary'>Tools</span></h1>
                <p className='text-center md:max-w-175 text-sm mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8.5 gap-y-10'>
                {tools.map((tool, index) => (
                    <div key={index} className=' rounded-lg p-5 flex flex-col gap-4'>
                        <Image src={tool.image} alt={tool.name} width={150} height={100} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tools;