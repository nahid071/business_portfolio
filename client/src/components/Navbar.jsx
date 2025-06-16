// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const linkClasses =
        "text-gray-600 hover:text-slate-300 transition font-medium px-3 py-2 rounded-md";

    const activeClasses = "text-white bg-blue-600";

    return (
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">BizPort</div>

                <div className="space-x-2 sm:space-x-4">
                    {["/", "/about", "/services", "/contact"].map((path, i) => {
                        const labels = ["Home", "About", "Services", "Contact"];
                        return (
                            <NavLink
                                key={path}
                                to={path}
                                end={path === "/"}
                                className={({ isActive }) =>
                                    `${linkClasses} ${isActive ? activeClasses : ""}`
                                }
                            >
                                {labels[i]}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
