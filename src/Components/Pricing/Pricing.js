import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pricing.css'
import {useNavigate } from "react-router-dom";

export const Pricing = () => {
    const navigate = useNavigate();
    const submit = () => {
        navigate('/verifaccount');
    }


        return (


            <div className="maincontainer">
                <section>
                    <div class="container py-5">

                        <header class="text-center mb-5 text-black">
                            <div class="row">
                                <div class="col-lg-8 mx-auto">
                                    <h1>Choose your plan</h1>
                                    <p>We offer you the best price ever!</p>
                                </div>
                            </div>
                        </header>

                        <div class="row text-center align-items-end">

                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <div class="bg-white p-5 rounded-lg shadow">
                                    <h1 class="h6 text-uppercase font-weight-bold mb-4">Silver</h1>
                                    <h2 class="h1 font-weight-bold">$199<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                                    <div class="custom-separator my-4 mx-auto bg-silver"></div>
                                    <ul class="list-unstyled my-5 text-small text-left">
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                                        <li class="mb-3 text-muted">
                                            <i class="fa fa-times mr-2"></i>
                                            <del>Nam libero tempore</del>
                                        </li>
                                        <li class="mb-3 text-muted">
                                            <i class="fa fa-times mr-2"></i>
                                            <del>Sed ut perspiciatis</del>
                                        </li>
                                        <li class="mb-3 text-muted">
                                            <i class="fa fa-times mr-2"></i>
                                            <del>Sed ut perspiciatis</del>
                                        </li>
                                    </ul>
                                    <a href="/verifaccount" class="btn btn-primary btn-block p-2 shadow rounded-pill">Get Started</a>
                                </div>
                            </div>

                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <div class="bg-white p-5 rounded-lg shadow">
                                    <h1 class="h6 text-uppercase font-weight-bold mb-4">Gold</h1>
                                    <h2 class="h1 font-weight-bold">$399<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                                    <div class="custom-separator my-4 mx-auto bg-gold"></div>
                                    <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Nam libero tempore</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                                        <li class="mb-3 text-muted">
                                            <i class="fa fa-times mr-2"></i>
                                            <del>Sed ut perspiciatis</del>
                                        </li>
                                    </ul>
                                    <a href="/verifaccount" class="btn btn-primary btn-block p-2 shadow rounded-pill">Get Started</a>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="bg-white p-5 rounded-lg shadow">
                                    <h1 class="h6 text-uppercase font-weight-bold mb-4">Platinum</h1>
                                    <h2 class="h1 font-weight-bold">$899<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                                    <div class="custom-separator my-4 mx-auto bg-platinum"></div>
                                    <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Nam libero tempore</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                                    </ul>
                                    <a href="/verifaccount" class="btn btn-primary btn-block p-2 shadow rounded-pill">Get Started</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>


        )
}