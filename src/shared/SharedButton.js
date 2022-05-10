import React from 'react';

const SharedButton = ({ children }) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-secondary to-primary mt-10 font-bold text-white">{children}</button>
        </div>
    );
};

export default SharedButton;