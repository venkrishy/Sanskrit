import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, BarChart3, User, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Card className="w-full mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          {/* Left side - Continue where left off */}
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Continue where I left off</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">pronouns-2</span>
          </div>

          {/* Right side - Dashboard links */}
          <div className="flex items-center space-x-6">
            <Link to="/dashboard">
              <Button variant="ghost" className="flex items-center space-x-2 text-blue-700 hover:bg-blue-100">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm">Student Dashboard</span>
              </Button>
            </Link>
            
            <Link to="/account">
              <Button variant="ghost" className="flex items-center space-x-2 text-blue-700 hover:bg-blue-100">
                <User className="w-4 h-4" />
                <span className="text-sm">Account</span>
              </Button>
            </Link>
            
            <Link to="/activity">
              <Button variant="ghost" className="flex items-center space-x-2 text-blue-700 hover:bg-blue-100">
                <Activity className="w-4 h-4" />
                <span className="text-sm">Recent Activity</span>
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
