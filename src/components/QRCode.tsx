import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode } from 'lucide-react';

export function QRCodeDisplay() {
  const tokenUrl = `${window.location.origin}/create-token`;

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <QrCode className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold">Scan to Create Token</h2>
      </div>
      
      <div className="p-4 bg-white rounded-lg shadow-inner">
        <QRCodeSVG 
          value={tokenUrl}
          size={200}
          level="H"
          includeMargin={true}
          className="w-full h-full"
        />
      </div>
      
      <div className="mt-4 bg-gray-50 p-4 rounded-lg w-full">
        <p className="text-sm text-gray-600 mb-1">Token Creation URL:</p>
        <p className="font-mono text-sm break-all text-gray-800">{tokenUrl}</p>
      </div>
    </div>
  );
}