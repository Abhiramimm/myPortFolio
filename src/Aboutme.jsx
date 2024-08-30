import React from 'react'

import picture from "./assets/images/abhirami.png"

function Aboutme() {
    return (
        <div>
            <div className="container mt-5" id='aboutme'>

                <div class="card mb-3 border shadow  mx-auto" style= {{"width": "800px"}}>
                    <div class="row g-0">
                        <div class="col-md-4 p-4" style={{"background":"#fcf8f4"}}>
                            <img src={picture} class="rounded-circle object-fit-cover" alt="..." width="200px" height="200px"/>
                            <h2 className='fw-bold text-center'>ABHIRAMI</h2>
                            <h2 className='fw-bold text-center'>M M</h2>
                            <hr className='new4'></hr>
                            <h4 className='text-center'>SOFTWARE DEVELOPER</h4>

                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title fw-bold">Hello</h1>
                                <h4>Here's who I am & what I do</h4>
                                <div className='mt-5'>
                                <a className='btn btn-primary me-3 rounded-pill px-5' href='#resume'>Resume</a>
                                 <a className='btn btn-outline-primary rounded-pill px-5' href='#projects'>Projects</a>


                                  </div>
                                  <p class="card-text mt-4">I am a hardworking individual seeking a position 
                                  where I can showcase my skills and contribute to the organization's growth.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutme
