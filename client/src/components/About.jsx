export default function About() {
    return (
        <main className="font-sans text-gray-800">
            {/* Header */}
            <section className="bg-gray-900 text-white py-20 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    Learn who we are, what we do, and why we love building digital experiences that help businesses grow.
                </p>
            </section>

            {/* Company Story */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            We started with a simple mission — to help businesses thrive online. Over the years, we've worked with startups, agencies, and entrepreneurs to create digital platforms that make an impact.
                        </p>
                        <p className="text-lg leading-relaxed">
                            From a one-person setup to a growing creative team, our passion remains the same: building brands that are memorable, functional, and future-ready.
                        </p>
                    </div>
                    <img src="/about-us.jpg" alt="Our team" className="rounded-xl shadow-lg" />
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-gray-100 py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">What We Stand For</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                        <p>We communicate clearly and work with honesty — no hidden costs, no fluff.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-2">Quality</h3>
                        <p>We focus on doing the job right — modern design, clean code, and scalable architecture.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                        <p>We treat every project like a collaboration — your success is our success.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 bg-blue-600 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
                <p className="text-lg mb-6">Whether you're just starting or scaling up — we’re here to help you grow.</p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
                >
                    Contact Us
                </a>
            </section>
        </main>
    );
}
