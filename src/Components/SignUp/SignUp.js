import React from 'react'
import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {useNavigate } from "react-router-dom";



const defaultState = {
    companyname: null,
    email: null,
    password: null,
    nameError: null,
    emailError: null,
    passwordError: null
}
export const SignUp = () => {

    const navigate = useNavigate();
    
    const submit = () => {
        navigate('/pricing');
    }

    return (
        <div className="App">
            <div class="container-fluid ps-md-0">
                <div class="row g-0">
                    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div class="col-md-8 col-lg-6">
                        <div class="login d-flex align-items-center py-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-9 col-lg-8 mx-auto">
                                        <h3 class="login-heading mb-4">SignUp</h3>


                                        <form>
                                            <div class="form-floating mb-3">
                                                <input type="text" className={"form-control "} id="companyname" name='companyname' placeholder="Company Name"  />
                                                <label for="companyname">Company Name</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" className={"form-control "} id="companypublickey" name="companypublickey" placeholder="companypublickey"  />
                                                <label for="companypublickey">Company Public Key</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <select class="form-select" aria-label="Default select example" id="type" name="type" placeholder="Type">
                                                    <option value="1">Startup</option>
                                                    <option value="2">PME</option>
                                                    <option value="3">Entreprise</option>
                                                </select>
                                                <label for="floatingPassword">Type</label>
                                            </div>

                                            <div class="d-grid">
                                                <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="button" onClick={submit}>Continue</button>
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