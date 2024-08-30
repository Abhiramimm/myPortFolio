import React from 'react'

function Resume() {
  return (
    <div>
      <div className="container border shadow mx-auto p-5" style= {{"width": "800px"}} id='resume'>
        <div className="row">
        <h3 className='fw-bold'>Internship Experience</h3>

            <div className="col-4 p-5">
                <h5 className='text-primary fw-bold'>Nov 2023 - Aug-2024</h5>
                <h6>PYTHON DJANGO FULL STACK DEVELOPER</h6>
                <p>Luminar Technolab Private Limited</p>
                <p>Kochi</p>

            </div>
            <div className="col-8 p-5">
                <p><ul>
                  <li>Developed Web Applications: Built and maintained web applications using python,django,html,css and related technologies.
                 
                 
                 </li>
                  <li> Database Management: Designed and managed databases using MYSQL and SQLite ensuring efficient data handling and retrieval.</li>
                  <li> E-commerce Website: Developed a full featured ecommerce website withuser authentication.</li>
                  <li> API Integeration: Developed and integrated RESTful APIs to connect the frontend and backend systems.</li>
                  </ul>
                </p>

            </div>
        </div>
      </div>
      <div className="container border shadow mx-auto mt-3 p-5" style= {{"width": "800px"}}>
        <div className="row">
            <h3 className='fw-bold'>Education</h3>
            <div className="col-4 p-5">
                <h5 className='text-primary fw-bold'>2020 - 2022</h5>
                <h6>MCA</h6>
                

            </div>
            <div className="col-8 p-5">
            <p>St Joseph's College of Engineering and Technology, Pala</p>

            </div>
        </div>
        
      </div>
      <div className="container border shadow mx-auto mt-3 p-5" style= {{"width": "800px"}}>
        <div className="row">
            <h3 className='fw-bold'>Professional skillset</h3>
            <div className="col-6 p-5">

            <ul style={{"list-style-type":"square"}}>
                
                    <li className='mb-3'>Programming Languages: Python,Javascript, React</li>
                    <li className='mb-2'>Web framework: Django</li>
                    <li>Web Desigining: HTML, CSS, Bootstrap, DevUI</li>
                
            </ul >
                
            </div>
            <div className="col-6 py-5">
                <ul style={{"list-style-type":"square"}}>
                    <li className='mb-3'>Restful API : Django Rest Framework</li>
                    <li className='mb-2'>Version Control: Git</li>
                    <li>Databases: MYSQL, SQLite3</li>
                </ul>
                

            </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
