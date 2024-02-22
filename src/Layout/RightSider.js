import React from "react";
import Search from "../Assets/Vector.svg";
import LibraryCard from "../Components/LibraryCard";

export default function RightSider() {
  return (
    <div className="bg-white lg:px-10 xl:px-10 md:px-5 pt-10 w-auto h-full mx-10">
      <div className="flex justify-between items-center lg:mt-10 xl:mt-10">
        <p className="text-2xl font-medium">Your library</p>

        <button>
          <p className="text-2xl font-medium">+</p>
        </button>
      </div>
      <div
        className="flex gap-1 justify-between my-5 flex-shrink-0 overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}>
        <button className="bg-[#F5F5F5] rounded-full px-4 py-2">
          <p className="font-normal text-sm">Playlists</p>
        </button>
        <button className="bg-[#F5F5F5] rounded-full px-4 py-2">
          <p className="font-normal text-sm">Album</p>
        </button>
        <button className="bg-[#F5F5F5] rounded-full px-4 py-2">
          <p className="font-normal text-sm">Artists</p>
        </button>
        <button className="bg-[#F5F5F5] col-span-2 rounded-full px-4 py-2">
          <p className="font-normal text-sm">Downloaded</p>
        </button>
      </div>
      <div className="relative">
        <input
          type="text"
          className="w-full bg-[#F5F5F5] py-2 rounded-3xl pl-8"
        />
        <img src={Search} className="absolute top-3 left-2" />
      </div>

      <div className="grid grid-cols-1 gap-2 mt-4 justify-center align-middle items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1">
        <LibraryCard
          img={require("../Assets/Frame 1243.png")}
          title={"Liked songs"}
          no={"85"}
        />
        <LibraryCard
          img={require("../Assets/Component 14.png")}
          title={"Liked songs"}
          no={"85"}
        />
        <LibraryCard
          img={require("../Assets/Image2.jpeg")}
          title={"Liked songs"}
          no={"85"}
        />
        <LibraryCard
          img={require("../Assets/Component 14.png")}
          title={"Liked songs"}
          no={"85"}
        />
        <LibraryCard
          img={require("../Assets/Image2.jpeg")}
          title={"Liked songs"}
          no={"85"}
        />
        <LibraryCard
          img={require("../Assets/Component 14.png")}
          title={"Liked songs"}
          no={"85"}
        />
        <LibraryCard
          img={require("../Assets/Image2.jpeg")}
          title={"Liked songs"}
          no={"85"}
        />
        <LibraryCard
          img={require("../Assets/Component 14.png")}
          title={"Liked songs"}
          no={"85"}
        />
      </div>
    </div>
  );
}
