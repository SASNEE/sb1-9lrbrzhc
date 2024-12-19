import React from 'react';
import { TokenForm } from '../components/TokenForm';

export function CreateToken() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create New Token
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please provide a description for your token request
          </p>
        </div>
        <TokenForm />
      </div>
    </div>
  );
}