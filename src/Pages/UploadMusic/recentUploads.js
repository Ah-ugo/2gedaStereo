import React from "react";
import UploadMusicLayout from "../../Layout/UploadMusicLayout";
import Arrow from "../../Assets/arrowback.svg";
import Search from "../../Assets/majesticons_search-line.svg";
import RecentUploadCard from "../../Components/recentUploadCard";
import Ad from "../../Assets/AD.jpeg";
import UploadSongHeader from "../../Components/UploadSongHeader";

export default function RecentUploads() {
  return (
    <>
      <UploadMusicLayout>
        <UploadSongHeader title={"Recent uploads"} />
        <div className="mt-20 sm:mt-0">
          <div className="bg-white w-full pb-10 sm:mx-5">
            <div
              id="container"
              className="sm:flex hidden mx-3 pt-6 justify-between align-middle items-center">
              <div
                id="iconwrapper"
                className="flex align-middle items-center space-x-2">
                <button style={{ widows: 24, height: 24 }}>
                  <img src={Arrow} />
                </button>
                <p
                  style={{ fontSize: 20, fontWeight: "700" }}
                  fontSize={"20px"}>
                  Recent uploads
                </p>
              </div>
            </div>
            <section className="mx-5 relative my-4 mt-10">
              <input
                type="text"
                className="w-full bg-[#F5F5F5] py-2 rounded-xl pl-10 pr-2"
              />
              <img src={Search} className="absolute top-2 left-3" />
            </section>

            <section className="mx-5">
              <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard />
            </section>
            {/* ad */}
            <div className="mt-4 mx-5">
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
        </div>
      </UploadMusicLayout>
    </>
  );
}
