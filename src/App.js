import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import JobOpenings from './components/JobOpenings';
import Clients from './components/Clients';
import ClientTestimonials from './components/ClientTestimonials';
import Footer from './components/Footer';
import './App.css'; // Import global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function App() {
    return (
        <div>
            <Header />
            <Introduction />
            <JobOpenings />
            <Clients />
            <ClientTestimonials />
            <Footer />
        </div>
    );
}

export default App;
