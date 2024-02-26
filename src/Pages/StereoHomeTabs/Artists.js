import React, { useState } from "react";
import ArtistTabCard from "../../Components/ArtistTabCard";
import Ad from "../../Assets/AD.jpeg";
import Modal from "../../Components/Modals/ModalWrapper1";
import ArtistProfile from "../ArtistProfile";

export default function Artists() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  return (
    <div className="mx-4">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
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
      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ArtistProfile onClick={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
}
