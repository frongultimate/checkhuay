import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="flex flex-col py-16 px-16 gap-y-5">
      {/* container */}
      <div className="flex flex-row gap-5 justify-center">
        <div className="bg-gray-extra justify-center rounded-3xl hover:bg-black w-96 h-32 flex flex-col gap-1 shadow-md px-2">
          <Image
            src="/images/huaysod.png"
            alt="huaysod"
            width={512}
            height={96}
          />
          <div className="flex flex-row justify-between px-2">
            <div className="flex gap-x-1">
              <div className="bg-black py-1 px-4 text-white rounded-3xl text-center font-semibold">
                <p>3ตัว</p>
              </div>
              <div className="bg-black py-1 px-4 text-white rounded-3xl text-center font-semibold">
                <p>950</p>
              </div>
            </div>

            <div className="flex gap-x-1">
              <div className="bg-black py-1 px-4 text-white rounded-3xl text-center font-semibold">
                <p>2ตัว</p>
              </div>
              <div className="bg-black py-1 px-4 text-white rounded-3xl text-center font-semibold">
                <p>95</p>
              </div>
            </div>
          </div>
          {/* finish w-96 h-32 items-center = y justify-center = x*/}
        </div>
        <div className="bg-gray-extra p-5 rounded-3xl w-96 h-32 flex flex-col justify-center shadow-md gap-1">
          <div className="font-semibold">
            <div className="flex flex-row justify-between">
              <p>Jan 23</p>
              Loading
            </div>
            <div className="flex flex-row justify-between">
              <p>Feb 23</p>
              Loading
            </div>
            <div className="flex flex-row justify-between">
              <p>Mar 23</p>
              Loading
            </div>
          </div>
        </div>
      </div>
      {/* row-2 */}
      <div className="flex flex-row gap-5 justify-center">
        <div className="bg-gray-extra justify-center rounded-3xl hover:bg-black w-96 h-32 flex flex-col gap-1 shadow-md px-2">
          <Image
            src="/images/huaysod.png"
            alt="huaysod"
            width={512}
            height={96}
          />
          <div className="flex flex-row justify-between px-2">
            <div className="flex gap-x-1">
              <div className="bg-black py-1 px-4 text-white rounded-3xl text-center font-semibold">
                <p>3ตัว</p>
              </div>
              <div className="bg-black py-1 px-4 text-white rounded-3xl text-center font-semibold">
                <p>950</p>
              </div>
            </div>

            <div className="flex gap-x-1">
              <div className="bg-black py-1 px-4 text-white rounded-3xl text-center font-semibold">
                <p>2ตัว</p>
              </div>
              <div className="bg-black py-1 px-4 text-white rounded-3xl text-center font-semibold">
                <p>95</p>
              </div>
            </div>
          </div>
          {/* finish w-96 h-32 items-cent = y justify-center = x*/}
        </div>
        <div className="bg-gray-extra px-2 rounded-3xl w-96 h-32 flex flex-col justify-center shadow-md gap-1">
          <Image
            src="/images/huaysod.png"
            alt="huaysod"
            width={512}
            height={96}
          />
        </div>
      </div>
      {/* container - end */}
    </div>
  );
};

export default Cards;
