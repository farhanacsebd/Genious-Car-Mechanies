import React from 'react';

const Expert = ({ expert }) => {

    const { name, img, expertize } = expert;
    return (
        <div className="col-lg-4 col-12">
            <div className="pt-3 pb-4"> <img className="w-75 img-fluid" src={img} alt="" />
                <h3>{name}</h3>
                <h5 className="text-danger">{expertize}</h5></div>
        </div>
    );
};

export default Expert;