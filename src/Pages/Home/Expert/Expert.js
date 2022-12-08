import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='g-3 col-sm-6 col-md-4 col-lg-3'>
            <div className="card p-1">
                <img src={img} className="rounded img-fluid " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-dark">Know More</a>
                </div>
            </div>
        </div>


    );
};

export default Expert;