import React from "react";
import LayoutCardListProject from "@/components/layout/list-card-project";

const Page = () => {

  return (
      <div
          style={{backgroundImage: "url(/bg-3.jpg)"}}
          className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      >
       <LayoutCardListProject/>
      </div>
  );
};

export default Page;
