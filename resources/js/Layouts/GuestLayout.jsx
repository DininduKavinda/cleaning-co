import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-5 login_two_image"></div>
                <div className="col-xl-7 p-0">
                    <div className="login-card login-dark login-bg">
                        <div>
                            <div>
                                <Link className="logo" href="index.html">
                                    <img
                                        className="img-fluid for-light m-auto"
                                        src="theme/assets/images/logo/logo1.png"
                                        alt="looginpage"
                                    />
                                    <img
                                        className="for-dark"
                                        src="theme/assets/images/logo/logo-dark.png"
                                        alt="logo"
                                    />
                                </Link>
                                <div className="login-main">{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
