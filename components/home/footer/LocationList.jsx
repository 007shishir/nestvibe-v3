import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const LocationList = () => {
  // This allows your component to "know" what the current search is from the URL
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get('search');

  const locations = [
    { name: "Properties in Gulshan", slug: "gulshan" },
    { name: "Properties in Banani", slug: "banani" },
    { name: "Bashundhara R/A", slug: "bashundhara" },
    { name: "Flats in Dhanmondi", slug: "dhanmondi" },
  ];

  return (
    <ul className="space-y-4 text-sm">
      {locations.map((item) => {
        // Optional: Check if this item is the one currently selected
        const isActive = currentSearch === item.slug;

        return (
          <li key={item.slug}>
            <Link
              href={`/buy?search=${encodeURIComponent(item.slug)}`}
              className={`transition-colors ${
                isActive ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LocationList;