// src/components/AboutUsPage.js

import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto p-8">
                {/* Banner Section */}
                <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-8 rounded-lg text-white mb-8">
                    <h1 className="text-4xl font-semibold mb-4">Welcome to Food Villa</h1>
                    <p className="text-lg">
                        Discover the joy of food with Food Villa. We bring delicious meals from the best restaurants to your doorstep.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700">
                        At Food Villa, our mission is to make food delivery convenient, enjoyable, and accessible for everyone. We strive to connect food lovers with their favorite restaurants, offering a diverse range of cuisines to satisfy every palate.
                    </p>
                </div>

                {/* Quality Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Quality Assurance</h2>
                    <p className="text-gray-700">
                        We prioritize quality at every step, from selecting fresh ingredients to ensuring timely delivery. Our team is committed to providing a seamless and delightful experience for our customers.
                    </p>
                </div>

                {/* Team Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
                    <p className="text-gray-700">
                        Behind Food Villa is a dedicated team passionate about food and customer satisfaction. We work tirelessly to bring you the best culinary experiences, right to your doorstep.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default About;

