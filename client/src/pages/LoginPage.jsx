import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) onLogin({ username, role: 'Admin' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <button type="submit" className="w-full py-3 px-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Log In</button>
        </form>
      </div>
    </div>
  );
}
