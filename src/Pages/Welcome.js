import React from "react";
import LayoutMain from "../Layout/LayoutMain";
import Header1 from "../Components/Header1";
import TrendingCard from "../Components/TrendingCard";
import PromoCard from "../Components/PromoCard";

export default function Welcome() {
  return (
    <LayoutMain>
      <Header1 />
      <div className="bg-[#fff] sm:mx-5 pt-10 pb-20">
        <div
          id="heading-desktop"
          className="hidden sm:flex sm:flex-col sm:px-4">
          <p className="font-medium text-2xl">Stereo</p>
        </div>
        <div className="flex flex-col mt-14 sm:flex-row sm:justify-between">
          <div className="px-4">
            <p className="font-medium text-2xl sm:text-3xl">
              Welcome to 2geda stereo
            </p>
            <p className="text-lg font-normal sm:text-xl">
              Explore and discover new music features for you.
            </p>
          </div>
          <div className="px-4 flex gap-4 mt-4 sm:mt-0">
            <button className="border h-min px-4 py-1 rounded-xl border-[#4F0DA3]">
              <p className="font-normal text-xs text-[#4F0DA3]">Listener</p>
            </button>
            <button className="border h-min px-4 py-1 rounded-xl border-[#4F0DA3]">
              <p className="font-normal text-xs text-[#4F0DA3]">Artist</p>
            </button>
          </div>
        </div>

        {/* body */}
        <main>
          <section className="px-4 mt-5">
            <p className="font-medium text-base">Listen to trending songs</p>

            <div
              className="flex overflow-x-scroll gap-2 mt-3"
              style={{ scrollbarWidth: "none" }}>
              <TrendingCard />
              <TrendingCard />
              <TrendingCard />
              <TrendingCard />
              <TrendingCard />
              <TrendingCard />
            </div>
          </section>
          <section className="px-4 mt-5">
            <p className="font-medium text-xl sm:text-2xl">
              Upload and promote your songs
            </p>
            <div
              className="flex overflow-x-scroll gap-3 mt-3 pb-1"
              style={{ scrollbarWidth: "none" }}>
              <PromoCard />
              <PromoCard />
              <PromoCard />
              <PromoCard />
              <PromoCard />
              <PromoCard />
            </div>
          </section>
        </main>
      </div>
    </LayoutMain>
  );
}
