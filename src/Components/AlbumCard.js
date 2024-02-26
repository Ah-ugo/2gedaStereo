import React from "react";

export default function AlbumCard({ img, title, artist }) {
  return (
    <div className="w-full h-[189]">
      <img
        className="w-full"
        src={img}
        style={{
          //   maxWidth: 168,
          //   minWidth: 168,
          //   width: "168px",
          maxHeight: 148,
          minHeight: 148,
          //   borderRadius: 6,
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col">
        <p className="font-medium text-sm">{title}</p>
        <p className="font-normal text-xs text-[#403F3F]">Album. {artist}</p>
        <p></p>
      </div>
    </div>
  );
}
