import { leagues } from "@/lib/products";

interface FilterBarProps {
  selectedLeague: string;
  onLeagueChange: (league: string) => void;
}

export default function FilterBar({ selectedLeague, onLeagueChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <span className="font-semibold text-gray-700 self-center">Filtrar por:</span>
      {leagues.map((league) => (
        <button
          key={league}
          onClick={() => onLeagueChange(league)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedLeague === league
              ? "bg-red-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {league}
        </button>
      ))}
    </div>
  );
}
