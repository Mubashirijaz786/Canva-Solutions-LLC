import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Briefcase, Users, MessageSquare, Settings, LogOut,Star } from 'lucide-react';

const AdminLayout = () => {
    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
        { name: 'Blog Posts', path: '/admin/blogs', icon: <FileText size={20} /> },
        { name: 'Portfolio', path: '/admin/projects', icon: <Briefcase size={20} /> },
        { name: 'Team Members', path: '/admin/team', icon: <Users size={20} /> },
        { name: 'Messages', path: '/admin/messages', icon: <MessageSquare size={20} /> },
        { name: 'Reviews', path: '/admin/reviews', icon: <Star size={20} /> },
    ];

    return (
        <div className="flex min-h-screen bg-[#020617] text-white font-['Manrope']">
            
            {/* SIDEBAR */}
            <aside className="w-64 bg-[#0f172a] border-r border-white/10 fixed h-full z-50 flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <h2 className="text-2xl font-bold text-blue-500">Softy<span className="text-white">Admin</span></h2>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/admin'} // Only exact match for dashboard
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                                ${isActive 
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }
                            `}
                        >
                            {item.icon}
                            <span className="font-medium">{item.name}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="flex-1 ml-64">
                {/* Header */}
                <header className="h-20 border-b border-white/10 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Admin Control Panel</h2>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-bold text-white">Admin User</p>
                            <p className="text-xs text-gray-500">Super Admin</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">A</div>
                    </div>
                </header>

                {/* Dynamic Page Content */}
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout; 