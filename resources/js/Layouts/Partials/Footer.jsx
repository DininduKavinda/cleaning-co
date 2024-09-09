import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 footer-copyright">
                        <p className="mb-0">
                            Copyright 2024 © Dinindu Kavinda.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p className="float-end mb-0">
                            <svg className="svg-color footer-icon">
                                <use href="/theme/assets/svg/iconly-sprite.svg#heart"></use>
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
