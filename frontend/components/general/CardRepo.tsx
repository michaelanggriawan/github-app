import { languageColors } from "../constant/languange";

export default function CardRepo({ name, isPrivate, description, languange, updated_at, url }: { name: string; isPrivate: boolean; description: string; languange: string; updated_at: string; url: string }) {
    const circleColor = languageColors[languange] || 'gray';

    const updatedDate = new Date(updated_at);

    const date = updatedDate.getDate();
    const month = updatedDate.toLocaleString('default', { month: 'short' });
    return (
      <div className="w-full p-2 cursor-pointer" onClick={() => window.open(url)}>
        <div className="w-full bg-gray-50 rounded-lg p-4">
          <div className="flex items-center">
            <p className="text-md font-semibold">{name}</p>
            <span className="ml-2 inline-block px-2 py-1 text-xs font-bold rounded-full bg-purple-50 text-purple-700">
              {isPrivate ? 'private' : 'public'}
            </span>
          </div>
          <div className="pt-2">
            <p className="text-sm">{description}</p>
          </div>
          <div className="pt-4 flex items-center">
                <svg width="10" height="10" className="mr-2">
                    <circle cx="5" cy="5" r="5" fill={circleColor} />
                </svg>
                    <p className="text-xs mr-8">{languange}</p>
                <p className="text-xs">updated on {date} {month}</p>
        </div>
            
        </div>
      </div>
    );
  }
  