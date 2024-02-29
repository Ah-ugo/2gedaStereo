import React, { useState } from "react";
import LayoutMain from "../Layout/LayoutMain";
import Header1 from "../Components/Header1";
import TrendingCard from "../Components/TrendingCard";
import PromoCard from "../Components/PromoCard";
import Player from "../Assets/Mini player.svg";
import Logo from "../Assets/2gedaLogo.svg";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function Welcome() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [show, setShow] = useState(false);
  const closeModal = () => {
    setIsOpen(!isOpen);
  };
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border h-min px-4 py-1 rounded-xl border-[#4F0DA3]">
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

        {/* register Modal */}
        {isOpen && (
          <div
            id="modelConfirm"
            className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
            <div className="relative top-40 mx-auto shadow-xl bg-white max-w-[375px] rounded-xl overflow-x-hidden">
              <div className="relative w-full bg-[#4F0DA3] rounded-t-xl">
                <img src={Player} className="w-full rounded-t-xl" />
                <img src={Logo} className="absolute top-6 left-5" />
              </div>
              <main className="mx-3 mt-2 mb-5">
                <p className="font-normal text-base">Hello,</p>
                <p className="font-normal text-base">
                  Let’s get you signed up.
                </p>
              </main>
              {/* Pass any children as content within the modal */}
              <main id="form" className="w-auto mx-3 overflow-x-hidden">
                <input
                  type="text"
                  placeholder="Username"
                  className="max-w-[351px] px-3 mb-2 rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                />
                <input
                  type="text"
                  placeholder="Artist name"
                  className="max-w-[351px] px-3 mb-2 rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                />
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Create password"
                    className="max-w-[351px] px-3 mb-2 rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                  />
                  <button
                    onClick={() => setShow(!show)}
                    className="absolute top-4 right-5 w-[18.34px] h-[9.64px]">
                    {show ? (
                      <BsEyeSlash width={18.34} height={9.64} />
                    ) : (
                      <BsEye width={18.34} height={9.64} />
                    )}
                  </button>
                </div>
                <div className="flex items-center mb-5 gap-1">
                  <p className="font-light text-xs">
                    Already have an account?{" "}
                  </p>
                  <a
                    onClick={() => {
                      setIsLoginOpen(!isLoginOpen);
                      setIsOpen(!isOpen);
                    }}
                    href="#"
                    className="font-light text-xs text-[#4F0DA3]">
                    Sign in
                  </a>
                </div>
                <div className="flex justify-center mb-5">
                  <button className="bg-[#4F0DA3] text-white py-2 px-20 rounded-md">
                    Sign Up
                  </button>
                </div>
              </main>
            </div>
          </div>
        )}

        {/* register Modal */}
        {isLoginOpen && (
          <div
            id="modelConfirm"
            className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
            <div className="relative top-40 mx-auto shadow-xl bg-white max-w-[375px] rounded-xl overflow-x-hidden">
              <div className="relative w-full bg-[#4F0DA3] rounded-t-xl">
                <img src={Player} className="w-full rounded-t-xl" />
                <img src={Logo} className="absolute top-6 left-5" />
              </div>
              <main className="mx-3 mt-2 mb-5">
                <p className="font-normal text-base">Welcome back,</p>
                <p className="font-normal text-base">Login to your account</p>
              </main>
              {/* Pass any children as content within the modal */}
              <main id="form" className="w-auto mx-3 overflow-x-hidden">
                <input
                  type="text"
                  placeholder="Username"
                  className="max-w-[351px] px-3 mb-2 rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                />
                <div className="mb-2">
                  <a href="#" className="font-light text-xs text-[#4F0DA3]">
                    Use artist name instead
                  </a>
                </div>
                {/* <input
                  type="text"
                  placeholder="Artist name"
                  className="max-w-[351px] px-3 mb-2 rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                /> */}
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Enter Password"
                    className="max-w-[351px] px-3 mb-2 rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                  />
                  <button
                    onClick={() => setShow(!show)}
                    className="absolute top-4 right-5 w-[18.34px] h-[9.64px]">
                    {show ? (
                      <BsEyeSlash width={18.34} height={9.64} />
                    ) : (
                      <BsEye width={18.34} height={9.64} />
                    )}
                  </button>
                </div>
                <div className="mb-2">
                  <a href="#" className="font-normal text-xs text-[#FF0000]">
                    Forgot password?
                  </a>
                </div>
                <div className="flex items-center mb-5 gap-1">
                  <p className="font-light text-xs">New here?</p>
                  <a
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setIsLoginOpen(!isLoginOpen);
                    }}
                    href="#"
                    className="font-light text-xs text-[#4F0DA3]">
                    Create account
                  </a>
                </div>
                <div className="flex justify-center mb-5">
                  <button className="bg-[#4F0DA3] text-white py-2 px-20 rounded-md">
                    Login
                  </button>
                </div>
              </main>
            </div>
          </div>
        )}
      </div>
    </LayoutMain>
  );
}
