import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="flex flex-col py-16 px-16 gap-y-5">
      {/* container */}
      {/* row-1 */}
      <div className="flex flex-row gap-5 justify-center md: flex-wrap">
        <div className="bg-gray-extra justify-center rounded-3xl hover:bg-gray-400 duration-150 w-96 h-32 flex flex-col gap-1 shadow-md px-2">
          <Image
            src="/images/huaysod.png"
            alt="huaysod"
            width={368}
            height={69}
          />
          <div className="flex flex-row justify-between px-2">
            <div className="flex gap-x-1">
              <div className="bg-black py-1 px-3 text-white rounded-3xl text-center font-semibold">
                <p>3ตัว</p>
              </div>
              <div className="bg-black py-1 px-3 text-white rounded-3xl text-center font-semibold">
                <p>950</p>
              </div>
            </div>

            <div className="flex gap-x-1">
              <div className="bg-black py-1 px-3 text-white rounded-3xl text-center font-semibold">
                <p>2ตัว</p>
              </div>
              <div className="bg-black py-1 px-4 text-white rounded-3xl text-center font-semibold">
                <p>95</p>
              </div>
            </div>
          </div>
          {/* finish w-96 h-32 items-center = y justify-center = x*/}
        </div>
        {/* Progress bar */}
        <div className="bg-gray-extra p-5 rounded-3xl w-96 h-32 flex flex-col justify-center shadow-md gap-1">
          <div className="flex flex-col gap-2 font-semibold">
            <div className="flex flex-row gap-2 justify-between">
              <div className="mr-1">
                <p>Jan</p>
              </div>
              <div className="w-72 h-full bg-black-load text-white text-center rounded-full">
                <p>1M</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="mr-1">
                <p>Feb</p>
              </div>
              <div className="w-72 h-full bg-orange-extra text-white text-center rounded-full">
                <p>800K</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="mr-1">
                <p>Mar</p>
              </div>
              <div className="w-72 h-full bg-black-load text-white text-center rounded-full">
                <p>985K</p>
              </div>
            </div>
          </div>
        </div>
        {/* Progress bar */}
      </div>
      {/* row-2 */}
      <div className="flex flex-row gap-5 justify-center md: flex-wrap">
        <div className="bg-gray-extra justify-center rounded-3xl hover:bg-gray-400 duration-150 w-96 h-32 flex flex-col gap-1 shadow-md px-2">
          <Image
            src="/images/fox888.png"
            alt="huaysod"
            width={368}
            height={69}
          />
          <div className="flex flex-row justify-between px-2">
            <div className="flex gap-x-1">
              <div className="bg-black py-1 px-3 text-white rounded-3xl text-center font-semibold">
                <p>3ตัว</p>
              </div>
              <div className="bg-black py-1 px-3 text-white rounded-3xl text-center font-semibold">
                <p>950</p>
              </div>
            </div>

            <div className="flex gap-x-1">
              <div className="bg-black py-1 px-3 text-white rounded-3xl text-center font-semibold">
                <p>2ตัว</p>
              </div>
              <div className="bg-black py-1 px-4 text-white rounded-3xl text-center font-semibold">
                <p>95</p>
              </div>
            </div>
          </div>
        </div>
        {/* finish w-96 h-32 items-center = y justify-center = x*/}
        <div className="bg-gray-extra p-5 rounded-3xl w-96 h-32 flex flex-col justify-center shadow-md gap-1">
          <div className="flex flex-col gap-2 font-semibold">
            <div className="flex flex-row gap-2 justify-between">
              <div className="mr-1">
                <p>Jan</p>
              </div>
              <div className="w-72 h-full bg-black-load text-white text-center rounded-full">
                <p>1M</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="mr-1">
                <p>Feb</p>
              </div>
              <div className="w-72 h-full bg-black-load text-white text-center rounded-full">
                <p>800K</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="mr-1">
                <p>Mar</p>
              </div>
              <div className="w-72 h-full bg-black-load text-white text-center rounded-full">
                <p>985K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* container - end */}
    </div>
  );
};

export default Cards;
