'use client';

import React, { useState, useEffect } from 'react';
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
  Checkbox,
  CheckboxGroup
} from "@heroui/react";
import { SlidersHorizontal, ChevronDown, Map, List as ListIcon, Search } from "lucide-react";
import { useRouter, useSearchParams } from 'next/navigation';

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for filters
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || "");
  const [beds, setBeds] = useState(searchParams.get('beds') || "");
  const [baths, setBaths] = useState(searchParams.get('baths') || "");
  const [category, setCategory] = useState(searchParams.get('category') || "all");
  const [location, setLocation] = useState(searchParams.get('search') || "");

  const locations = ["Gulshan", "Banani", "Dhanmondi", "Uttara", "Baridhara", "Bashundhara", "Mirpur", "Mohammadpur"];

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (minPrice) params.set('minPrice', minPrice); else params.delete('minPrice');
    if (maxPrice) params.set('maxPrice', maxPrice); else params.delete('maxPrice');
    if (beds) params.set('beds', beds); else params.delete('beds');
    if (baths) params.set('baths', baths); else params.delete('baths');
    if (category !== 'all') params.set('category', category); else params.delete('category');
    if (location) params.set('search', location); else params.delete('search');

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6 pt-2 border-t border-slate-100">
      <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-hide">

        {/* Price Filter */}
        <Popover placement="bottom-start" offset={10}>
          <PopoverTrigger>
            <Button
              variant="light"
              className="text-slate-700 font-medium h-10 px-4 min-w-fit border border-slate-200 hover:bg-slate-50 transition-colors"
              endContent={<ChevronDown className="w-4 h-4" />}
            >
              Price
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-5 w-80 bg-white shadow-2xl border border-slate-100 rounded-2xl">
            <div className="space-y-6 w-full">
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2">Price Range</h4>
              <div className="flex gap-4">
                <Input
                  type="number"
                  label={minPrice ? "" : "Minimum"}
                  placeholder={minPrice ? "" : "Min"}
                  labelPlacement="outside"
                  variant="bordered"
                  size="md"
                  value={minPrice}
                  onValueChange={setMinPrice}
                  className="max-w-[120px]"
                />
                <Input
                  type="number"
                  label={maxPrice ? "" : "Maximum"}
                  placeholder={maxPrice ? "" : "Max"}
                  labelPlacement="outside"
                  variant="bordered"
                  size="md"
                  value={maxPrice}
                  onValueChange={setMaxPrice}
                  className="max-w-[120px]"
                />
              </div>
              <Button
                color="primary"
                fullWidth
                size="lg"
                onClick={applyFilters}
                className="bg-[#005162] font-bold shadow-lg shadow-[#005162]/20"
              >
                Apply Filters
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Beds & Baths Filter */}
        <Popover placement="bottom-start" offset={10}>
          <PopoverTrigger>
            <Button
              variant="light"
              className="text-slate-700 font-medium h-10 px-4 min-w-fit border border-slate-200 hover:bg-slate-50 transition-colors"
              endContent={<ChevronDown className="w-4 h-4" />}
            >
              Beds & Baths
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-5 w-72 bg-white shadow-2xl border border-slate-100 rounded-2xl">
            <div className="space-y-6 w-full">
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2">Rooms</h4>
              <div className="space-y-6">
                <Input
                  type="number"
                  label={beds ? "" : "Min Bedrooms"}
                  placeholder={beds ? "" : "e.g. 3"}
                  labelPlacement="outside"
                  variant="bordered"
                  size="md"
                  value={beds}
                  onValueChange={setBeds}
                />
                <Input
                  type="number"
                  label={baths ? "" : "Min Bathrooms"}
                  placeholder={baths ? "" : "e.g. 2"}
                  labelPlacement="outside"
                  variant="bordered"
                  size="md"
                  value={baths}
                  onValueChange={setBaths}
                />
              </div>
              <Button
                color="primary"
                fullWidth
                size="lg"
                onClick={applyFilters}
                className="bg-[#005162] text-white font-bold shadow-lg shadow-[#005162]/20"
              >
                Apply Filters
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Home Type Filter */}
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="light"
              className="text-slate-700 font-medium h-10 px-4 min-w-fit border border-slate-200 hover:bg-slate-50 transition-colors"
              endContent={<ChevronDown className="w-4 h-4" />}
            >
              Home Type: {category === 'all' ? 'All' : category}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Home Type"
            className="p-2 min-w-[160px] bg-white shadow-xl border border-slate-100 rounded-xl"
            onAction={(key) => {
              const params = new URLSearchParams(searchParams.toString());
              if (key === 'all') params.delete('category');
              else params.set('category', key);
              router.push(`?${params.toString()}`);
              setCategory(key);
            }}
          >
            <DropdownItem key="all" className="rounded-lg">All Types</DropdownItem>
            <DropdownItem key="residential" className="rounded-lg">Residential</DropdownItem>
            <DropdownItem key="commercial" className="rounded-lg">Commercial</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Location Filter */}
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="light"
              className="text-slate-700 font-medium h-10 px-4 min-w-fit border border-slate-200 hover:bg-slate-50 transition-colors"
              endContent={<ChevronDown className="w-4 h-4" />}
            >
              Location: {location || 'All'}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Location"
            className="p-2 min-w-[200px] max-h-[300px] overflow-y-auto bg-white shadow-xl border border-slate-100 rounded-xl"
            onAction={(key) => {
              const params = new URLSearchParams(searchParams.toString());
              if (key === 'all') params.delete('search');
              else params.set('search', key);
              router.push(`?${params.toString()}`);
              setLocation(key === 'all' ? "" : key);
            }}
          >
            <DropdownItem key="all" className="rounded-lg">All Locations</DropdownItem>
            {locations.map(loc => (
              <DropdownItem key={loc} className="rounded-lg">{loc}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <div className="h-6 w-px bg-slate-200 mx-2"></div>

        <Button
          variant="light"
          onClick={() => {
            router.push(window.location.pathname);
            setMinPrice(""); setMaxPrice(""); setBeds(""); setBaths(""); setCategory("all"); setLocation("");
          }}
          className="text-[#005162] font-bold h-10 px-4 min-w-fit flex items-center gap-2 hover:bg-[#005162]/5"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Reset Filters</span>
        </Button>
      </div>

      <div className="flex items-center gap-3 bg-slate-100 p-1 rounded-lg self-end md:self-auto">
        <Button isIconOnly size="sm" variant="flat" className="bg-white text-[#005162] shadow-sm">
          <ListIcon className="w-4 h-4" />
        </Button>
        <Button isIconOnly size="sm" variant="light" className="text-slate-500">
          <Map className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
