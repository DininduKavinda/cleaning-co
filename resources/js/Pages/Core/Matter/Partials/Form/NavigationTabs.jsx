
import React from "react";

function NavigationTabs() {
    return (
        <div className="nav nav-pills horizontal-options shipping-options" id="cart-options-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" id="bill-wizard-tab" data-bs-toggle="pill" href="#bill-wizard" role="tab" aria-controls="bill-wizard" aria-selected="true">
                <div className="cart-options">
                    <div className="stroke-icon-wizard"><i className="fa-solid fa-user"></i></div>
                    <div className="cart-options-content">
                        <h6 className="f-w-700">Matter</h6>
                    </div>
                </div>
            </a>
            <a className="nav-link" id="ship-wizard-tab" data-bs-toggle="pill" href="#ship-wizard" role="tab" aria-controls="ship-wizard" aria-selected="false">
                <div className="cart-options">
                    <div className="stroke-icon-wizard"><i className="fa-solid fa-truck"></i></div>
                    <div className="cart-options-content">
                        <h6 className="f-w-700">Location & Contact</h6>
                    </div>
                </div>
            </a>
            <a className="nav-link" id="payment-wizard-tab" data-bs-toggle="pill" href="#payment-wizard" role="tab" aria-controls="payment-wizard" aria-selected="false">
                <div className="cart-options">
                    <div className="stroke-icon-wizard"><i className="fa-solid fa-money-bill"></i></div>
                    <div className="cart-options-content">
                        <h6 className="f-w-700">Files</h6>
                    </div>
                </div>
            </a>
            <a className="nav-link" id="finish-wizard-tab" data-bs-toggle="pill" href="#finish-wizard" role="tab" aria-controls="finish-wizard" aria-selected="false">
                <div className="cart-options">
                    <div className="stroke-icon-wizard"><i className="fa-solid fa-square-check"></i></div>
                    <div className="cart-options-content">
                        <h6 className="f-w-700">Access</h6>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default NavigationTabs;
