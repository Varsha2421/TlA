import React from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  LineChart,
  Line
} from 'recharts';
import { Users, CheckSquare, AlertTriangle, Award } from 'lucide-react';
import { StatCard, Badge } from '../components/Shared';

// Mock Data matching your original console structure
const performanceData = [
  { name: 'Mon', tasks: 12, efficiency: 85 },
  { name: 'Tue', tasks: 19, efficiency: 88 },
  { name: 'Wed', tasks: 15, efficiency: 92 },
  { name: 'Thu', tasks: 22, efficiency: 90 },
  { name: 'Fri', tasks: 25, efficiency: 95 },
];

const leaderboard = [
  { rank: 1, name: 'Ananya Sharma', points: 1250, completed: 28 },
  { rank: 2, name: 'Rahul Verma', points: 1100, completed: 24 },
  { rank: 3, name: 'Vikram Sai', points: 950, completed: 21 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Top Row: Quick Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Active Employees" 
          value="18 / 24" 
          icon={Users} 
          change="+3 checking in" 
          trend="up" 
        />
        <StatCard 
          title="Tasks Completed" 
          value="93%" 
          icon={CheckSquare} 
          change="+5% over last week" 
          trend="up" 
        />
        <StatCard 
          title="Attention Required" 
          value="2 Tickets" 
          icon={AlertTriangle} 
          change="SLA warning threshold" 
          trend="down" 
        />
        <StatCard 
          title="Team Target Progress" 
          value="88 Points" 
          icon={Award} 
          change="On track for bonus" 
          trend="up" 
        />
      </div>

      {/* Middle Row: Recharts Graphics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Productivity Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-md font-semibold text-gray-800 mb-4">Weekly Task Metrics</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="tasks" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Completed Tasks" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Efficiency Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-md font-semibold text-gray-800 mb-4">Team Efficiency Index (%)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={3} name="Efficiency Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row: Leaderboard Tracker */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-md font-semibold text-gray-800">Weekly Performance Leaderboard</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {leaderboard.map((user) => (
            <div key={user.rank} className="p-4 px-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
              <div className="flex items-center space-x-4">
                <span className={`w-6 h-6 flex items-center justify-center font-bold text-sm rounded-full ${
                  user.rank === 1 ? 'bg-yellow-100 text-yellow-700' : 
                  user.rank === 2 ? 'bg-gray-100 text-gray-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {user.rank}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{user.name}</h4>
                  <p className="text-xs text-gray-500">{user.completed} tasks finalized</p>
                </div>
              </div>
              <Badge variant={user.rank === 1 ? 'success' : 'info'}>{user.points} XP</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
