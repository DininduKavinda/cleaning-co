import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <form onSubmit={submit} className="theme-form">
                <h2 className="text-center">Sign in to account</h2>
                <p className="text-center">
                    Enter your email &amp; password to login
                </p>

                <div className="form-group">
                    <label htmlFor="email" className="col-form-label">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="form-control"
                        required
                        placeholder="Test@gmail.com"
                    />
                    {errors.email && (
                        <div className="mt-2 text-sm text-red-600">
                            {errors.email}
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="col-form-label">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        className="form-control"
                        required
                        placeholder="*********"
                    />
                    <div className="show-hide">
                        <span className="show"></span>
                    </div>

                    {errors.password && (
                        <div className="mt-2 text-sm text-red-600">
                            {errors.password}
                        </div>
                    )}
                </div>

                <div className="form-group mb-0 checkbox-checked">
                    <div className="form-check checkbox-solid-info">
                        <input
                            id="remember"
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                            className="form-check-input"
                        />
                        <label className="form-check-label" htmlFor="remember">
                            Remember password
                        </label>
                    </div>
                    {canResetPassword && (
                        <Link href={route("password.request")} className="link">
                            Forgot password?
                        </Link>
                    )}
                    <div className="text-end mt-3">
                        <button
                            className="btn btn-primary btn-block w-100"
                            type="submit"
                            disabled={processing}
                        >
                            Sign in
                        </button>
                    </div>
                </div>

                <div className="login-social-title">
                    <h6>Or Sign in with</h6>
                </div>

                <div className="form-group">
                    <ul className="login-social">
                        <li>
                            <a href="https://www.linkedin.com" target="_blank">
                                <i className="icon-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank">
                                <i className="icon-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target="_blank">
                                <i className="icon-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank">
                                <i className="icon-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <p className="mt-4 mb-0 text-center">
                    Don't have an account?{" "}
                    <a className="ms-2" href="sign-up.html">
                        Create Account
                    </a>
                </p>
            </form>
        </GuestLayout>
    );
}