import React from 'react';

function Clients() {
    const clients = ["/7.jpg", "/7.jpg", "/7.jpg", "/7.jpg"];

    return (
        <section className="clients py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Our Clients</h2>
                <div className="row">
                    {clients.map((client, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <img src={client} alt={`Client ${index + 1}`} className="img-fluid" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Clients;
