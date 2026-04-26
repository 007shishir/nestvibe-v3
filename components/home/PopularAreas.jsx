import React from 'react';
// REMOVE the motion import from here
import AreaGrid from './AreaGrid';
import { getCollectionData } from "@/lib/fetchData"; // Ensure this import is correct

export default async function PopularAreas() {
  // This is now a pure Server Component - async is allowed!
  const propertiesData = await getCollectionData("properties");

  if (!propertiesData || propertiesData.length === 0) {
    return <div className="text-center py-10">No properties found.</div>;
  }

  return (
    <section className="container mx-auto py-10">
      <div className="container">
        {/* Pass the data to the Client Component where the motion logic lives */}
        <AreaGrid propertiesData={propertiesData || []} />
      </div>
    </section>
  );
}
