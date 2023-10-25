import React from 'react';

function Contact(){
    return(
        <>
            <section className='section'>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="fs-1 text-primary">Contact Us</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6  col-sm-8">
                                    <h4>Contact Form</h4>
                                    <hr/>
                                    <div className="form-group">
                                        <label htmlFor="">Full Name</label>
                                        <input type='text' className='form-control' placeholder='Enter full Name'/>                                    
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Phone number</label>
                                        <input type='text' className='form-control' placeholder='Enter Phone number'/>                                    
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email address</label>
                                        <input type='text' className='form-control' placeholder='Enter Email'/>                                    
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Message</label>
                                        <textarea className='form-control' rows='3' placeholder='Enter your message'/>                              
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className='btn btn-primary shadow w-100' >Send Message </button>                             
                                    </div>
                                </div>
                                <div className="col-md-6 border-start border-5 col-sm-4">
                                    <h5 className="fs-2 text-warning border-bottom border-5 border-warning">Address Information</h5>
                                    {/* <hr className='danger'/> */}
                                    <p>
                                        #Team-5 , Sahyadri Adyar , Dakshina-kannada Karnataka - 575007, India
                                    </p>
                                    <p>
                                        Phone : +91 88XXXXXXXX
                                    </p>
                                    <p>
                                        Email : team5@gmail.com
                                    </p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;