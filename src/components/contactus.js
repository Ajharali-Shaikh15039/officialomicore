import React from 'react';

export default function Contactus(){
    return(
        <div className="container" style={{marginTop:"50px"}}>
                <p className="border-bottom"style={{display:'flex',justifyContent:'center',fontSize:'45px',fontFamily:'serif'}}>CONTACT US</p>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <p>
                    MUMBAI<br/>
                    <strong>OmiCore Art Gallery</strong><br/>
                    Lokhandwala Complex<br/>
                    Kandivali East,400101<br/>
                    Phone :+91 9819981802/ +91 8169073180<br/>
                    Email :  omicoreartgallery@gmail.com
                    </p>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6">
                    <div className="table-responsive" style={{fontSize:'16px',fontFamily:'serif'}}>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>DEPARTMENT</th>
                                <th>CONTACT</th>
                                <th>PHONE</th>
                                <th>EMAIL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Enquiry & Gallery Assistant</th>
                                <th>Shailendra</th>
                                <th>+91 9321011327</th>
                                <th>shailendrakanojiya@omicoreartgallery.com</th>
                            </tr>
                            <tr>
                                <th>Accounts & Management</th>
                                <th>Sagar</th>
                                <th>+91 8169073180</th>
                                <th>sagarkanu@omicoreartgallery.com</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
            </div>
    )

} 