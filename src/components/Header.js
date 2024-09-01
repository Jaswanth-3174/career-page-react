import React from 'react';

function Header() {
    return (
        <header className="bg-primary text-white p-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div id="logo">Logo</div>
                    <nav id="navigation-menu">Navigation Menu</nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
