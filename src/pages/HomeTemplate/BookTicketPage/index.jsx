import React from "react";
import Chair from "./Chair";
import "./style.css";
import InfoMovie from "./InfoMovie";

export default function BookTicketPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 pb-10">
      <div className="lg:grid lg:grid-cols-7">
        <div className="col-span-5">
          <Chair />
        </div>
        <div className="col-span-2 lg:pl-5">
          <InfoMovie />
        </div>
      </div>
    </div>
  );
}
