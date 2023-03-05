import React from 'react'
import './verifaccount.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useNavigate } from "react-router-dom";



export const VerifAccount = () => {

    const navigate = useNavigate();
    
    const submit = () => {
        navigate('/pricing');
    }

    return (
        <div className="App">
            <div class="container-fluid ps-md-0">
                <div class="row g-0">
                    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image2"></div>
                    <div class="col-md-8 col-lg-6">
                        <div class="login d-flex align-items-center py-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-9 col-lg-8 mx-auto">
                                        <h3 class="login-heading mb-4">Verify Your Account</h3>


                                        <form>
                                            <div class="form-floating mb-3">
                                                <input type="text" className={"form-control "} id="matnumber" name='matnumber' placeholder="Mat Number"  />
                                                <label for="matnumber">Mat Number </label>
                                            </div>
                                            
                                            <div class="form-floating mb-3">
                                                <input type="text" className={"form-control "} id="companypublickey" name="companypublickey" placeholder="companypublickey"  />
                                                <label for="companypublickey">Address</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" className={"form-control "} id="matnumber" name='matnumber' placeholder="Mat Number"  />
                                                <label for="matnumber">Mat Number </label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" className={"form-control "} id="matnumber" name='matnumber' placeholder="Mat Number"  />
                                                <label for="matnumber">Mat Number </label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="file" className={"form-control "} id="matnumber" name='matnumber' placeholder="Mat Number"  />
                                                <label for="matnumber">Mat Number </label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" className={"form-control "} id="matnumber" name='matnumber' placeholder="Mat Number"  />
                                                <label for="matnumber">Mat Number </label>
                                            </div>

                                            <div class="d-grid">
                                                <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="button" onClick={submit}>Get Verified</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}