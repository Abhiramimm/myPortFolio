import React from 'react'

import picture from "./assets/images/cake.jpeg"

import picture2 from "./assets/images/taskapp.jpeg"

import picture3 from "./assets/images/fund.jpeg"

import picture4 from "./assets/images/service.jpeg"



function Projects() {
    return (
        <div>
            <div className="container mt-5" id='projects'>

                <div class="card mb-3 border shadow  mx-auto p-5" style={{ "width": "800px" }}>
                    <div class="row g-0">
                        <div class="col-md-8">
                            <h4 className='text-primary fw-bold'>CakeBox</h4>
                            <p className='fw-bold'>E-commerce project</p>

                            <p class="card-text mt-4">The CakeBox is an online cake shop project aims to develop a web-based application 
                                where users can browse,select and order cakes online.
                                Technologies used: Python, Django, DevUI, HTML, Sqlite3
                            </p>

                        </div>
                        <div class="col-md-4">
                            <div class="card-body">

                                <img src={picture} class="img-fluid" alt="..." />




                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mt-5">

                <div class="card mb-3 border shadow  mx-auto p-5" style={{ "width": "800px" }}>
                    <div class="row g-0">
                        <div class="col-md-8">
                            <h4 className='text-primary fw-bold'>TaskApp</h4>
                            <p className='fw-bold'>Role title</p>

                            <p class="card-text mt-4">The TaskApp is an essential tool that can help individuals from
                               all walks of life to prioritize and manage their tasks efficently. One of the primary benefits of the TaskApp is
                               that it enables users to create, edit and delete tasks easily.
                               Technologies used: Python, Django, HTML, Bootstrap, Bootswatch,Sqlite3
                                  </p>

                        </div>
                        <div class="col-md-4">
                            <div class="card-body">

                                <img src={picture2} class="img-fluid" alt="..." />




                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mt-5">

                <div class="card mb-3 border shadow  mx-auto p-5" style={{ "width": "800px" }}>
                    <div class="row g-0">
                        <div class="col-md-8">
                            <h4 className='text-primary fw-bold'>FundKeeper</h4>
                            <p className='fw-bold'>Role title</p>

                            <p class="card-text mt-4">Developed a expense and income tracker application designed to help users 
                                efficiently manage their finances. Technologies used: Python, Django, HTML,DjangoRestFramework, Bootstrap, Bootswatch,Sqlite3



                               </p>

                        </div>
                        <div class="col-md-4">
                            <div class="card-body">

                                <img src={picture3} class="img-fluid" alt="..." />




                            </div>
                        </div>
                    </div>
                </div>

            </div>

                        <div className="container mt-5">

                <div class="card mb-3 border shadow  mx-auto p-5" style={{ "width": "800px" }}>
                    <div class="row g-0">
                        <div class="col-md-8">
                            <h4 className='text-primary fw-bold'>ServiceCenter</h4>
                            <p className='fw-bold'>Role title</p>

                            <p class="card-text mt-4">Developed a service center tracker management system designed to help service advisor
                                efficiently manage their customer services. </p>
                                <p>Technologies used: Python, Django,DjangoRestFramework,React,javascript,Sqlite3
</p>

                        </div>
                        <div class="col-md-4">
                            <div class="card-body">

                                <img src={picture4} class="img-fluid" alt="..." />




                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
