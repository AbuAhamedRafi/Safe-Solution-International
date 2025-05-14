// import React from 'react';
import hero_image from '../../assets/images/hero-image.png'; // Adjust the path as necessary

const Hero = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center p-8 min-h-[50vh]">
            <div>
                <h1 className="text-5xl font-bold">Safe solution International</h1>
                <p className="text-xl my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos, voluptatem rerum, tenetur iusto magni quia doloribus dicta atque facere pariatur consequatur itaque? Praesentium itaque neque nulla provident at, </p>
                <div className="flex gap-4">
                    <button className="px-10 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white">See Detail</button>
                    <button className="px-10 py-2 bg-green-500 text-white rounded hover:bg-green-800">Get Started</button>
                </div>
            </div>
            <div className='p-5'> 
                <img src={hero_image} alt="Descriptive Alt Text" className="w-full h-auto" />
            </div>
        </section>
    );
};

export default Hero;