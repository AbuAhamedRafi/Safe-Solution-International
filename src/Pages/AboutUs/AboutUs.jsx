// import React from 'react';

import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Construction equipment"
                width={600}
                height={500}
                className="w-full h-auto rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-500 transition-colors group">
                  <video
                    size={24}
                    className="text-orange-500 group-hover:text-white ml-1"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-orange-500 font-medium mb-2">
                Welcome to Safe solution international
              </h3>
              <h2 className="text-3xl font-bold mb-6">
                50 Years of Experience in Industry
              </h2>

              <p className="text-gray-700 mb-6 font-medium">
                We are ready to build your dream home Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Dolorum, beatae.
              </p>

              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                repudiandae odit dolorum quis laudantium impedit beatae
                perferendis natus, hic libero sed atque quibusdam possimus
                error, voluptate est molestiae doloremque necessitatibus illum
                rerum sunt! Ad sunt obcaecati voluptatem sint sequi quos, qui
                non deleniti a praesentium, sapiente accusantium odit.
              </p>

              <Link
                href="#"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-medium transition-colors"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
