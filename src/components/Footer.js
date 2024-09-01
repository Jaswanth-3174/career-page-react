import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Additional Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">About Us</a></li>
                            <li><a href="#" className="text-white">Services</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                            <li><a href="#" className="text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Social Media</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white"><i className="fab fa-facebook"></i> Facebook</a></li>
                            <li><a href="#" className="text-white"><i className="fab fa-twitter"></i> Twitter</a></li>
                            <li><a href="#" className="text-white"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                            <li><a href="#" className="text-white"><i className="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Newsletter Signup</h5>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    &copy; 2024 Your Company. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
