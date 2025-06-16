import React from 'react';

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gray-900 text-white py-20 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    Have a question, project, or feedback? Reach out and we’ll get back to you soon.
                </p>
            </section>




            <div className="mt-12 grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-6 text-gray-700">
                    <div>
                        <h3 className="text-lg font-semibold">📍 Address</h3>
                        <p>123 Developer Lane, Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">📞 Phone</h3>
                        <p>+880 123 456 7890</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">✉️ Email</h3>
                        <p>contact@yourcompany.com</p>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="bg-white shadow-md rounded-2xl p-8 space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium">Your Name</label>
                        <input type="text" placeholder="John Doe"
                               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">Email Address</label>
                        <input type="email" placeholder="john@example.com"
                               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">Message</label>
                        <textarea rows="5" placeholder="Type your message..."
                                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"/>
                    </div>

                    <button type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
