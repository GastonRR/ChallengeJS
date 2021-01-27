import React from 'react';


import Header from '../header/Header'

function NotFound() {
    return (
        <React.Fragment>
            <Header/>
            <div class="alert alert-dark mt-5 text-center w-25 mx-auto" role="alert">
              ERROR 404 NOT_FOUND
            </div>
        </React.Fragment>
    );
}

export default NotFound
