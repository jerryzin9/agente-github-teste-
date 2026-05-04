'use client';

import { CURRENT_SQUAD, getSquadName, getSquadColor } from '@/lib/squads/config';

export default function SquadBadge() {
  const squadStyle = CURRENT_SQUAD;
  const squadName = getSquadName(squadStyle);
  const squadColor = getSquadColor(squadStyle);

  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
      style={{
        backgroundColor: `${squadColor}20`,
        color: squadColor,
        border: `1px solid ${squadColor}40`,
      }}
    >
      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: squadColor }} />
      {squadName}
    </span>
  );
}