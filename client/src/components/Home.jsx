import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="font-sans text-gray-800">
            {/* Hero Section */}
            <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">We Build Brands That Grow</h1>
                <p className="text-lg md:text-xl max-w-2xl mb-6">
                    A powerful online portfolio to showcase your services, work, and brand — all in one place.
                </p>
                <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-medium transition">
                    Get Started
                </Link>
            </section>

            {/* About Preview */}
            <section className="py-16 px-6 bg-white text-center">
                <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                <p className="max-w-3xl mx-auto text-lg">
                    We’re a small but passionate team focused on creating beautiful, functional web experiences for businesses.
                </p>
                <Link to="/about" className="inline-block mt-6 text-blue-600 font-semibold hover:underline">
                    Learn more →
                </Link>
            </section>

            {/* Services */}
            <section className="bg-gray-100 py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-6 shadow rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">Website Development</h3>
                        <p>Fast, responsive, and SEO-optimized websites tailored to your business goals.</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                        <p>Visually stunning and user-friendly interfaces that engage and convert.</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">Brand Strategy</h3>
                        <p>Helping you define and communicate your brand clearly and confidently.</p>
                    </div>
                </div>
                <Link to="/services" className="inline-block mt-8 text-blue-600 font-semibold hover:underline">
                    View all services →
                </Link>
            </section>

            {/* Portfolio Preview */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">Recent Work</h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div className="bg-gray-200 h-48 rounded-lg">Project 1</div>
                    <div className="bg-gray-200 h-48 rounded-lg">Project 2</div>
                    <div className="bg-gray-200 h-48 rounded-lg">Project 3</div>
                </div>
                <Link to="/portfolio" className="inline-block mt-8 text-blue-600 font-semibold hover:underline">
                    Explore portfolio →
                </Link>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
                <p className="text-lg mb-6">Let's create something powerful together. Get in touch today.</p>
                <Link to="/contact" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                    Contact Us
                </Link>
            </section>
        </main>
    );
}
