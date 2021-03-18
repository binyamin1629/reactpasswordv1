import React from 'react'

const password = ({ password, toggle }) => {
    const goBack = () => {
        toggle(prev => !prev);
    }
    return (
        <div className="container my-4">



            <div class="row d-flex justify-content-center ">

                <div class="col-6">
                    <h1 class="display-5 alert alert-success p-4 text-center">{password}</h1>
                </div>

            </div>
            <div>
              
                <button className="btn btn-warning mx-2 col-6" onClick={goBack}>Home</button>
            </div>
        </div>

    )
}

export default password
