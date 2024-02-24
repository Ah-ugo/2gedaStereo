import React from "react";
import ArtistTabCard from "../../Components/ArtistTabCard";
import Ad from "../../Assets/AD.jpeg";

export default function Artists() {
  return (
    <div className="mx-4">
      <div className="grid grid-cols-3 sm:grid-cols-6">
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
      </div>
      {/* ad */}
      <div className="mt-4" style={{}}>
        <img
          src={Ad}
          alt="Advertisement"
          style={{
            height: "80px",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}
