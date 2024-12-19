import React from 'react';
import { TokenList } from '../components/TokenList';
import { QRCodeDisplay } from '../components/QRCode';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Token Management Dashboard</h1>
          
          <div className="mb-8">
            <QRCodeDisplay />
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">All Tokens</h2>
              <TokenList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}