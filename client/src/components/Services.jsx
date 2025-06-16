import React from 'react';

const services = [
    {
        title: 'Web Development',
        description: 'Custom websites built with React, Node, and modern frameworks to grow your business.',
        icon: '🌐',
    },
    {
        title: 'UI/UX Design',
        description: 'Clean, responsive interfaces with a focus on user experience and conversion.',
        icon: '🎨',
    },
    {
        title: 'SEO & Marketing',
        description: 'Boost your online visibility and traffic with proven SEO and digital marketing strategies.',
        icon: '🚀',
    },
];

export default function Services() {
    return (
        <div className="min-h-screen bg-gray-50">

            <section className="bg-gray-900 text-white py-20 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    We help businesses grow with modern web technologies and smart digital solutions.
                </p>
            </section>



            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {services.map((service, idx) => (
                    <div key={idx}
                         className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all">
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
