import React from 'react'
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-light border-o">
                <img src="/assets/images/home/img1.jpg" className="card-img" alt=" Background"
                height="690px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-4 fw-bolder mb-0">NEW SECTION ARRIVALS</h5>
                    <p className="card-text lead fs-2">
                        CHECK OUT ALL THE TRENDS
                    </p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
};

export default Home
