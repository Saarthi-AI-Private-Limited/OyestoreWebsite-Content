import React from 'react'

const StatCard = ({ icon, value, label }) => {
    return (
        <div className="bg-card border border-border backdrop-blur-sm rounded-2xl p-6 hover:shadow-card transition-all duration-300">
            <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-accent rounded-xl shadow-glow">
                    {icon}
                </div>
                <div>
                    <div className="text-2xl font-bold text-card-foreground">{value}</div>
                    <div className="text-muted-foreground text-sm font-medium">
                        {label}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
