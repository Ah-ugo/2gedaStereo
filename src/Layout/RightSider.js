import React, { useState } from "react";
import Search from "../Assets/Vector.svg";
import LibraryCard from "../Components/LibraryCard";
import Close from "../Assets/Vector (8).png";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";
import AlbumCard from "../Components/AlbumCard";
import ArtistTabCard from "../Components/ArtistTabCard";
// import Modal from "../Components/Modals/ModalWrapper1"
import ArtistProfile from "../Pages/ArtistProfile";
import Modal from "../Components/Modals/ModalWrapper1";

export default function RightSider() {
  const [activeTab, setActiveTab] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  return (
    <div className="bg-white lg:px-10 xl:px-10 md:px-5 pt-10 w-auto h-full mx-10">
      <div className="flex justify-between items-center lg:mt-10 xl:mt-10">
        <p className="text-2xl font-medium">Your library</p>

        <button>
          <p className="text-2xl font-medium">+</p>
        </button>
      </div>
      <div
        className="flex gap-1 justify-between my-5 flex-shrink-0 overflow-x-scroll mx-2"
        style={{ scrollbarWidth: "none" }}>
        {activeTab ? (
          <button
            onClick={() => setActiveTab(null)}
            className="bg-[#4F0DA3] px-3 py-1 rounded-full">
            {/* <p className="text-lg text-white">x</p> */}
            <HiOutlineXMark color="white" size={11.67} />
          </button>
        ) : null}
        <button
          onClick={() => setActiveTab(1)}
          className={`${
            activeTab === 1 ? "bg-[#4F0DA3]" : "bg-[#F5F5F5]"
          } rounded-full px-4 py-2`}>
          <p
            className={`font-normal text-sm ${
              activeTab === 1 ? "text-white" : "text-black"
            }`}>
            Playlists
          </p>
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`${
            activeTab === 2 ? "bg-[#4F0DA3]" : "bg-[#F5F5F5]"
          } rounded-full px-4 py-2`}>
          <p
            className={`font-normal text-sm ${
              activeTab === 2 ? "text-white" : "text-black"
            }`}>
            Album
          </p>
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`${
            activeTab === 3 ? "bg-[#4F0DA3]" : "bg-[#F5F5F5]"
          } rounded-full px-4 py-2`}>
          <p
            className={`font-normal text-sm ${
              activeTab === 3 ? "text-white" : "text-black"
            }`}>
            Artists
          </p>
        </button>
        <button
          onClick={() => setActiveTab(4)}
          className={`${
            activeTab === 4 ? "bg-[#4F0DA3]" : "bg-[#F5F5F5]"
          } rounded-full px-4 py-2`}>
          <p
            className={`font-normal text-sm ${
              activeTab === 4 ? "text-white" : "text-black"
            }`}>
            Downloaded
          </p>
        </button>
      </div>
      <div className="relative">
        <input
          type="text"
          className="w-full bg-[#F5F5F5] py-2 rounded-3xl pl-8"
        />
        <img src={Search} className="absolute top-3 left-2" />
      </div>

      {activeTab === null && (
        <div className="grid grid-cols-1 gap-2 mt-4 justify-center align-middle items-center md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
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
      )}

      {activeTab === 1 && (
        <div className="grid grid-cols-1 gap-2 mt-4 justify-center align-middle items-center md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
        </div>
      )}

      {activeTab === 2 && (
        <div className="grid grid-cols-1 gap-2 mt-4 justify-center align-middle items-center md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
        </div>
      )}

      {activeTab === 3 && (
        <div className="grid grid-cols-1 gap-2 mt-4 justify-center align-middle items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
        </div>
      )}

      {activeTab === 4 && (
        <div className="grid grid-cols-1 gap-2 mt-4 justify-center align-middle items-center md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
        </div>
      )}

      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ArtistProfile onClick={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
}
