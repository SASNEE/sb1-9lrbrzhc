import React from 'react';
import { Clock, CheckCircle, Circle } from 'lucide-react';
import { useTokens } from '../lib/hooks/useTokens';

const statusIcons = {
  pending: Circle,
  in_progress: Clock,
  completed: CheckCircle,
};

export function TokenList() {
  const { tokens, loading } = useTokens();

  if (loading) {
    return <div className="text-center">Loading tokens...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Comment
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tokens.map((token) => {
            const StatusIcon = statusIcons[token.status];
            return (
              <tr key={token.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <StatusIcon className="h-5 w-5 text-gray-500" />
                    <span className="ml-2 text-sm text-gray-900">
                      {token.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{token.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {new Date(token.created_at).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">{token.admin_comment}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}