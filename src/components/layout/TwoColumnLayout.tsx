import React, { ReactNode } from "react";

interface TwoColumnLayoutProps {
  mainContent: ReactNode;
  sideContent: ReactNode;
  mainColumnWidth?: string; // Tailwind CSS width class for main column
  sideColumnWidth?: string; // Tailwind CSS width class for side column
}

export default function TwoColumnLayout({
  mainContent,
  sideContent,
  mainColumnWidth = "w-full lg:w-2/3",
  sideColumnWidth = "w-full lg:w-1/3",
}: TwoColumnLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className={`${mainColumnWidth}`}>
        {mainContent}
      </div>
      <div className={`${sideColumnWidth}`}>
        {sideContent}
      </div>
    </div>
  );
}
