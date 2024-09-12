import { Link, Head } from "@inertiajs/react";
import OriginLayout from "@/Layouts/OriginLayout";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <OriginLayout>
                <Head title="Welcome" />
                <div className="authentication-main mt-0">
                    <div className="row">
                        <div className="col-12">
                            <div className="login-card login-dark">
                                <div>
                                    <div>
                                        <Link
                                            className="logo"
                                            href="index.html"
                                        >
                                            <img
                                                className="img-fluid for-light"
                                                src="/theme/assets/images/logo/logo1.png"
                                                alt="looginpage"
                                            />
                                            <img
                                                className="img-fluid for-dark"
                                                src="/theme/assets/images/logo/logo-dark.png"
                                                alt="logo"
                                            />
                                        </Link>
                                    </div>

                                    <div className="login-main">
                                        <div className="theme-form">
                                            <h2 className=""> Welcome </h2>
                                            {auth.user ? (
                                                <span className="mb-0">
                                                    {auth.user.name}
                                                </span>
                                            ) : (
                                                <span className=" mb-0">
                                                    Login Or Register To
                                                    Continue
                                                </span>
                                            )}

                                            <div className="form-group mt-4">
                                                    <img className="img-thumbnail border-0" src="/theme/assets/images/forms/authenticate.png" />
                                            </div>
                                            <div>
                                                {auth.user ? (
                                                    <Link
                                                        href={route(
                                                            "dashboard"
                                                        )}
                                                        className="btn btn-primary btn-block w-100 mt-3"
                                                    >
                                                        Dashboard
                                                    </Link>
                                                ) : (
                                                    <>
                                                        <Link
                                                            href={route(
                                                                "login"
                                                            )}
                                                            className="btn btn-primary btn-block w-100 mt-3"
                                                        >
                                                            Log in
                                                        </Link>
                                                        <Link
                                                            href={route(
                                                                "register"
                                                            )}
                                                            className="btn btn-secondary btn-block w-100 mt-3"
                                                        >
                                                            Register
                                                        </Link>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OriginLayout>
        </>
    );
}
