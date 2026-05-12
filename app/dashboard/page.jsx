'use client';

import React, { useState, useEffect } from 'react';
import { 
  Card, CardBody, Button, Input, Image, Chip, Spinner
} from "@heroui/react";
import { LogOut, Heart } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function UserDashboard() {
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/me');
      const data = await res.json();
      
      if (!data.authenticated) {
        router.push('/auth');
        return;
      }

      // Redirect admins to admin dashboard
      if (data.user.role === 'admin') {
        router.push('/admin');
        return;
      }

      setUser(data.user);
      await fetchProperties();
    } catch {
      router.push('/auth');
    }
  };

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/properties?limit=100');
      const data = await res.json();
      if (data.success) {
        setProperties(data.properties);
        setFilteredProperties(data.properties);
      }
    } catch (error) {
      console.error("Failed to fetch properties:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (!value.trim()) {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter(prop => 
        prop.title?.toLowerCase().includes(value.toLowerCase()) ||
        prop.location?.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProperties(filtered);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome, {user?.name}!</h1>
            <p className="text-slate-500 text-sm mt-1">Browse available properties</p>
          </div>
          <Button
            isIconOnly
            variant="flat"
            color="danger"
            onClick={handleLogout}
            startContent={<LogOut className="w-4 h-4" />}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Search Section */}
        <Card className="border-0 shadow-sm">
          <CardBody className="p-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-slate-900">Search Properties</h2>
              <Input
                isClearable
                size="lg"
                placeholder="Search by title or location..."
                value={searchTerm}
                onValueChange={handleSearch}
                onClear={() => {
                  setSearchTerm('');
                  setFilteredProperties(properties);
                }}
                variant="bordered"
              />
            </div>
          </CardBody>
        </Card>

        {/* Properties Grid */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Available Properties</h2>
              <p className="text-slate-500 text-sm mt-1">{filteredProperties.length} properties found</p>
            </div>
          </div>

          {filteredProperties.length === 0 ? (
            <Card className="border-0 shadow-sm">
              <CardBody className="p-12 text-center">
                <p className="text-slate-500">No properties found matching your search.</p>
              </CardBody>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <Card key={property._id} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer" isPressable>
                  <CardBody className="space-y-4">
                    {/* Property Image */}
                    <div className="w-full h-48 rounded-lg bg-slate-100 overflow-hidden">
                      {property.image ? (
                        <Image 
                          src={property.image} 
                          alt={property.title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                          <span className="text-slate-400">No image</span>
                        </div>
                      )}
                    </div>

                    {/* Property Details */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 line-clamp-2">{property.title}</h3>
                          <p className="text-xs text-slate-500 mt-1">{property.location}</p>
                        </div>
                        <Button isIconOnly size="sm" variant="light" className="text-red-500">
                          <Heart className="w-5 h-5" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="bg-slate-50 rounded-lg p-3">
                        <p className="text-lg font-bold text-[#005162]">{property.price}</p>
                      </div>

                      {/* Specs */}
                      <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-200">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-slate-900">{property.beds || 0}</p>
                          <p className="text-xs text-slate-500">Beds</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-slate-900">{property.baths || 0}</p>
                          <p className="text-xs text-slate-500">Baths</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-semibold text-slate-900">{property.size || 'N/A'}</p>
                          <p className="text-xs text-slate-500">Size</p>
                        </div>
                      </div>

                      {/* Type Chips */}
                      <div className="flex gap-2">
                        <Chip 
                          size="sm" 
                          variant="flat" 
                          color={property.type === 'Buy' ? "primary" : "secondary"}
                        >
                          {property.type}
                        </Chip>
                        <Chip 
                          size="sm" 
                          variant="flat" 
                          color="default"
                        >
                          {property.category}
                        </Chip>
                      </div>

                      {/* View Details Button */}
                      <Button 
                        fullWidth 
                        color="primary" 
                        className="bg-[#005162] text-white font-semibold mt-2"
                        onClick={() => router.push(`/properties/${property._id}`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
