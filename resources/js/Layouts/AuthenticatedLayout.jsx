import { useState } from "react";
import Header from "./Partials/Header";

import SideBar from "./Partials/SideBar";
import Footer from "./Partials/Footer";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Header user={user} header={header} />

            <div className="page-body-wrapper">
            <SideBar />
                <div className="page-body">{children}</div>
                <Footer />
            </div>
        </>
    );
}
