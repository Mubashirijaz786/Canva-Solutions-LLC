import React from 'react';
import { Eye, MessageSquare, FileText, TrendingUp, ArrowUpRight } from 'lucide-react';

const Dashboard = () => {
    
    // Mock Data
    const stats = [
        { label: "Total Views", value: "24.5k", change: "+14%", icon: <Eye />, color: "blue" },
        { label: "New Messages", value: "12", change: "+4", icon: <MessageSquare />, color: "green" },
        { label: "Blog Posts", value: "48", change: "+2", icon: <FileText />, color: "purple" },
        { label: "Conversion Rate", value: "3.2%", change: "+0.4%", icon: <TrendingUp />, color: "orange" },
    ];

    const recentMsgs = [
        { name: "Alice Cooper", email: "alice@gmail.com", subject: "Web Dev Project", time: "2 hrs ago" },
        { name: "John Doe", email: "john@tech.com", subject: "Partnership Inquiry", time: "5 hrs ago" },
        { name: "Sarah Smith", email: "sarah@design.io", subject: "App Quote needed", time: "1 day ago" },
    ];

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-[#0f172a] border border-white/10">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl bg-${stat.color}-500/10 text-${stat.color}-400`}>
                                {stat.icon}
                            </div>
                            <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-lg">{stat.change}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Messages */}
                <div className="lg:col-span-2 p-6 rounded-2xl bg-[#0f172a] border border-white/10">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-white">Recent Inquiries</h3>
                        <button className="text-blue-400 text-sm hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                        {recentMsgs.map((msg, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">
                                        {msg.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{msg.name}</h4>
                                        <p className="text-gray-400 text-xs">{msg.subject}</p>
                                    </div>
                                </div>
                                <span className="text-gray-500 text-xs">{msg.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                    <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                    <p className="text-blue-100 text-sm mb-6">Add new content to your site instantly.</p>
                    
                    <div className="space-y-3">
                        <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            <FileText size={16} /> Write New Blog
                        </button>
                        <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            <FileText size={16} /> Add Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;