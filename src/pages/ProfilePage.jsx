import React from "react";
import { selectCurrentUser } from "features/session/sessionSlice";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <>
      <main className="profile-page">
        <section className="relative block min-h-screen-50">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url(" + require("assets/images/banner-bg.png").default + ")",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container flex justify-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-xl rounded-lg -mt-64 w-6/12">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/images/maleAvatar.png").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-auto max-w-180-px"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-center mt-12 pt-20 text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {currentUser.fullName ?? "Unknown"}
                  </h3>
                <div className = "flex flex-row justify-center">
                <div className="text-lg leading-normal text-blueGray-400 font-bold uppercase px-4 ">
                  <div className="pb-6">
                    Address
                  </div>
                  <div className="pb-6">
                    Phone number
                  </div>
                  <div className="pb-6">
                    Email
                  </div>
                </div>
                <div className="text-lg leading-normal text-blueGray-400">
                  <div className="pb-6">
                    475 Cong Hoa, Tan Binh District, Ho Chi Minh City, VietNam
                  </div>
                  <div className="pb-6">
                    {currentUser.contact}
                  </div>
                  <div className="pb-6">
                    {currentUser.email}
                  </div>
                </div>
              </div>
              <div className= "flex justify-center py-6">
              <button className="bg-lightBlue-500 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150">Update</button>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}
