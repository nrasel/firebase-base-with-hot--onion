import React from 'react';
import './Banner.css'

const Banner = () => {
    const handleForm = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <div className="background-img mt-3" >
                <h1>Best food waiting for your belly! </h1>
                <form className="search-field mt-4" onSubmit={handleForm} action="">
                    <input className="search-input-field" type="text" placeholder="Search Your Food" name="" id="" />
                    <input className="submit-btn" type="submit" value="Search" />

                </form>
            </div>
        </div>
    );
};

export default Banner;