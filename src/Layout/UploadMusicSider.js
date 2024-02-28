import React from "react";
import person from "../Assets/artist.jpeg";

export default function UploadMusicSider() {
  return (
    <div className="bg-white lg:px-10 xl:px-10 md:px-5 pt-5 w-auto h-full mx-10">
      <div className="flex justify-between items-center lg:mt-5 xl:mt-5">
        <p className="font-medium text-2xl">About artist</p>
      </div>

      <div className="flex items-center gap-3 mt-7 mb-7">
        <img src={person} className="w-[50px] h-[50px] rounded-full" />
        <div className="flex flex-col">
          <p className="font-normal text-xl">Bella Shrmuda</p>
          <button className="flex justify-between">
            <p className="text-sm font-light text-[#4F0DA3] underline">
              Edit profile
            </p>
          </button>
        </div>
      </div>

      <button className="bg-[#4F0DA3] flex text-white justify-between w-full px-2 py-3 rounded-lg mb-4 mt-4">
        <p className="font-normal text-base">New upload</p>
        <p className="font-normal text-base">+</p>
      </button>

      <section>
        <p className="font-medium text-2xl">Artist Overview</p>

        <section className="grid grid-cols-2 mt-4 gap-3">
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <p className="text-2xl font-normal">2.5b</p>
            <p className="font-normal text-sm text-[#4F0DA3]">Plays</p>
          </main>
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <p className="text-2xl font-normal">15</p>
            <p className="font-normal text-sm text-[#4F0DA3]">
              Playlist entries
            </p>
          </main>
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <p className="text-2xl font-normal">28k</p>
            <p className="font-normal text-sm text-[#4F0DA3]">Stickers</p>
          </main>
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <p className="text-2xl font-normal">200k</p>
            <p className="font-normal text-sm text-[#4F0DA3]">Downloads</p>
          </main>
        </section>
      </section>
    </div>
  );
}
