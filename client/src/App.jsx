import React, { useState } from 'react';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  const [user, setUser] = useState(null);
  const [currentTab, setCurrentTab] = useState('dashboard');

  if (!user) {
    return <LoginPage onLogin={(userData) => setUser(userData)} />;
  }

  return (
    <Layout currentTab={currentTab} setCurrentTab={setCurrentTab} user={user} onLogout={() => setUser(null)}>
      {currentTab === 'dashboard' && <DashboardPage />}
      {currentTab !== 'dashboard' && (
        <div className="bg-white p-8 rounded-xl border text-center text-gray-500">
          Workspace workspace views coming soon!
        </div>
      )}
    </Layout>
  );
}
