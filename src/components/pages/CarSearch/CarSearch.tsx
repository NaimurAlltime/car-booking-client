import React from "react";
import Container from "./Container";
import Googlemap from "./Googlemap";
import Filter from "./Filter";
import Cars from "./Cars";

export default function CarSearch() {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-2">
        {/* left part of design */}
        <div className="overflow-hidden">
          <Googlemap />
          <Filter />
        </div>
        {/* right part of design */}
        <div className="col-span-1 lg:col-span-3">
          <Cars />
        </div>
      </div>
    </Container>
  );
}
