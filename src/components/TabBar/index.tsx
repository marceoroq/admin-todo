"use client";

import { cn } from "@/lib/utils";
import { setCookie } from "cookies-next";
import { useState } from "react";

interface TabBarProps {
  tabs: { label: string; value: string; desc: string }[];
  activeTab: string;
}

export default function TabBar({ tabs, activeTab: initialTab }: TabBarProps) {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    setCookie("activeTab", value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex space-x-4 bg-gray-100 p-2 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={cn(
              "py-2 px-4 text-sm font-medium rounded-lg transition-colors",
              activeTab === tab.value
                ? "text-blue-600 bg-white shadow"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-200"
            )}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs
          .filter((tab) => tab.value === activeTab)
          .map((tab) => (
            <div key={tab.value}>
              <h2 className="text-lg font-semibold mb-2">{tab.label}</h2>
              <p className="text-gray-700">{tab.desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
