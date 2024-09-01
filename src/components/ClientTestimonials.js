import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap

function ClientTestimonials() {
    // Example testimonials data
    const testimonials = [
        {
            name: 'John Doe',
            feedback: 'Great service! Highly recommend.',
        },
        {
            name: 'Jane Smith',
            feedback: 'Amazing experience with the team!',
        },
        {
            name: 'Michael Johnson',
            feedback: 'Professional and efficient.',
        },
        {
            name: 'Emily Davis',
            feedback: 'Exceeded my expectations!',
        },
        {
            name: 'David Brown',
            feedback: 'Will definitely come back.',
        },
        {
            name: 'Sarah Wilson',
            feedback: 'A pleasure to work with.',
        },
    ];

    return (
        <section className="client-testimonials py-5">
            <div className="container">
                <h2 className="text-center mb-4">What Our Clients Say</h2>
                <Carousel>
                    {testimonials.map((testimonial, index) => (
                        <Carousel.Item key={index}>
                            <div className="d-flex justify-content-center">
                                <div className="testimonial-card text-center p-4">
                                    <p className="lead">{testimonial.feedback}</p>
                                    <h5 className="mt-3">{testimonial.name}</h5>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default ClientTestimonials;
