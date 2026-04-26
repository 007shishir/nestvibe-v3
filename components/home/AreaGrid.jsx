"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AreaGrid({ propertiesData = [] }) {
  console.log("Received Properties in AreaGrid:", propertiesData);

  const popularAreas = [
    {
      name: "Gulshan",
      count: 120,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80",
    },
    {
      name: "Banani",
      count: 85,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80",
    },
    {
      name: "Dhanmondi",
      count: 95,
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=80",
    },
    {
      name: "Uttara",
      count: 150,
      image:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&q=80",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-7xl">
        {popularAreas.map((area) => (
          <Link href={`/buy?search=${area.name.toLowerCase()}`} key={area.name}>
            <motion.div
              whileHover={{ y: -5 }}
              className="relative h-60 rounded-3xl overflow-hidden cursor-pointer group"
            >
              <img
                src={area.image || "/placeholder-area.jpg"}
                alt={area.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold">{area.name}</h4>
                <p className="text-slate-200 text-sm">
                  {propertiesData.filter(
                    (p) =>
                      p.location
                        ?.toLowerCase()
                        .includes(area.name.toLowerCase()) &&
                      // 2. Excludes Rent and Commercial (Case-insensitive check)
                      p.type?.toLowerCase() !== "rent",
                  ).length || 0}{" "}
                  Listings
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </>
  );
}
