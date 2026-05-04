'use client';

import { useState } from 'react';
import {
  getAllSquadConfigs,
  CURRENT_SQUAD,
  isFeatureEnabled,
} from '@/lib/squads/config';
import { SquadConfig } from '@/lib/squads/types';

export default function SquadSelector() {
  const [selectedSquad, setSelectedSquad] = useState<string>(CURRENT_SQUAD);

  const squads = getAllSquadConfigs();

  const handleSelect = (style: string) => {
    setSelectedSquad(style);
    // In a full implementation, this would update CURRENT_SQUAD via a store or context
    // For now, we show the selection UI
    console.log('Squad selected:', style);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Estilos de Squad
      </h1>
      <p className="text-gray-600 mb-8">
        Selecione o estilo de organização do seu time de desenvolvimento
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {squads.map((squad) => (
          <SquadCard
            key={squad.style}
            squad={squad}
            isSelected={selectedSquad === squad.style}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {selectedSquad && (
        <SquadDetails squad={squads.find((s) => s.style === selectedSquad)!} />
      )}
    </div>
  );
}

function SquadCard({
  squad,
  isSelected,
  onSelect,
}: {
  squad: SquadConfig;
  isSelected: boolean;
  onSelect: (style: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect(squad.style)}
      className={`relative p-6 rounded-2xl border-2 text-left transition-all ${
        isSelected
          ? 'border-gray-900 bg-gray-50 shadow-lg'
          : 'border-gray-200 bg-white hover:border-gray-400'
      }`}
      style={{
        borderColor: isSelected ? squad.color : undefined,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: `${squad.color}20`,
            color: squad.color,
          }}
        >
          Squad {squad.style.toUpperCase()}
        </span>
        {isSelected && (
          <span className="text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{squad.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{squad.description}</p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {squad.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Roles */}
      <div className="text-sm text-gray-500">
        <span className="font-medium">Roles:</span> {squad.roles.join(', ')}
      </div>
    </button>
  );
}

function SquadDetails({ squad }: { squad: SquadConfig }) {
  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Features — {squad.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {squad.features.map((feature) => (
          <div
            key={feature.id}
            className={`p-4 rounded-xl border ${
              feature.enabled
                ? 'border-green-200 bg-green-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-900">{feature.name}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  feature.enabled
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {feature.enabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}