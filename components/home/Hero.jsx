"use client";

import React, { useState } from "react";
import { Button, Input, Link, Tab, Tabs } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Search, Bell, Heart, CircleDollarSign, Inbox } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      router.push(`/${activeTab}`);
      return;
    }
    router.push(`/${activeTab}?search=${encodeURIComponent(searchQuery)}`);
  };

  const sidebarItems = [
    { icon: Search, label: "Search", link: "/buy" },
    { icon: Bell, label: "Updates", link: "/auth" },
    { icon: Heart, label: "Favorites", link: "/auth" },
    { icon: CircleDollarSign, label: "Home Loans", link: "/home-loans" },
    { icon: Inbox, label: "Inbox", link: "/auth" },
  ];

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[550px] bg-white overflow-hidden">
      {/* Sidebar Menu - Kept as requested */}
      <aside className="hidden md:flex w-20 border-r border-slate-200 flex-col items-center py-6 gap-8 bg-white z-20">
        {sidebarItems.map((item, idx) => (
          <Link
            href={item.link || "#"}
            className="text-slate-500 hover:text-primary transition-colors"
          >
            <div
              key={idx}
              className="flex flex-col items-center gap-1 cursor-pointer group"
            >
              <div className="p-2 rounded-lg group-hover:bg-slate-100 transition-colors">
                <item.icon className="w-5 h-5 text-slate-700" />
              </div>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-tight">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </aside>

      {/* Hero Content - Updated to Rightmove Style */}
      <section className="relative flex-grow flex flex-col items-center justify-center py-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/background image.jpg")',
          }}
        />

        <div className="relative z-10 text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
            <span className="text-[#00f0c0]">believe</span> in finding it
          </h1>
          <p className="text-white text-lg md:text-xl font-semibold drop-shadow-md">
            with Bangladesh's largest choice of homes
          </p>
        </div>

        {/* Search Card */}
        <div className="relative z-10 w-full max-w-3xl px-6">
          <div className="bg-[#001b44]/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="border-b border-white/10 mb-6">
              <Tabs
                variant="underlined"
                selectedKey={activeTab}
                onSelectionChange={setActiveTab}
                classNames={{
                  tabList: "gap-8 relative rounded-none p-0 border-none",
                  cursor: "w-full bg-white h-[3px]",
                  tab: "max-w-fit px-0 h-12 text-lg font-bold text-white/60 hover:text-white transition-colors",
                  tabContent: "group-data-[selected=true]:text-white",
                }}
              >
                <Tab key="buy" title="Buy" />
                <Tab key="rent" title="Rent" />
                <Tab key="commercial" title="Commercial" />
              </Tabs>
            </div>

            <p className="text-white font-bold text-sm mb-4 capitalize">
              Search properties for {activeTab}
            </p>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-grow">
                <Input
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="e.g. 'Gulshan', 'Dhanmondi' or 'Airport Station'"
                  variant="flat"
                  size="lg"
                  classNames={{
                    inputWrapper: "bg-white h-14 rounded-xl px-4",
                    input: "text-slate-900 font-medium",
                  }}
                  startContent={
                    <Search className="w-5 h-5 text-slate-400 mr-2" />
                  }
                />
              </div>
              <Button
                size="lg"
                onClick={handleSearch}
                className="bg-[#00f0c0] text-[#001b44] font-bold h-14 rounded-xl px-12 hover:opacity-90"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
