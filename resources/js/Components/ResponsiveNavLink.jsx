import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className="ms-2 btn btn-outline-none"
        >
            {children}
        </Link>
    );
}
