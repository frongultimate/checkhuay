import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  return (
    <div className="flex flex-col py-5 px-2 gap-y-5">
      {/* Huaysod */}
      {/* Huaysod */}
      {/* Huaysod */}
      <div className="flex flex-row gap-5 justify-center sm: flex-wrap">
        <Link
          href="https://huaysod.net/signup?aff=4c13b98732a&fbclid=IwAR1ik_BXBf7BzHNq-IJ3p5_7lD14l9Eo89Wl1HS48rjUfWS3BJYhV-Si_qU"
          target="_blank"
        >
          <div className="bg-gray-extra justify-center rounded-3xl hover:bg-gray-300 duration-150 w-96 h-32 flex flex-col gap-1 shadow-md px-2 items-center cursor-pointer">
            <Image
              src="/images/huaysod.png"
              alt="huaysod"
              width={380}
              height={69}
            />
            <div className="flex flex-row gap-32">
              <div className="flex gap-x-1">
                <div className="bg-black py-1 px-3 text-white rounded-3xl text- cursor-pointer font-semibold">
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
        </Link>
        {/* Progress bar */}
        <div className="bg-gray-extra p-5 rounded-3xl w-96 h-32 flex flex-col justify-center shadow-md gap-1">
          <div className="flex flex-col gap-2 font-semibold">
            <div className="flex flex-row gap-2 justify-between">
              <div className="mr-1">
                <p>Jan</p>
              </div>
              <div className="w-72 h-full bg-black-load text-white text-center rounded-full">
                <span>1M</span>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="mr-1">
                <p>Feb</p>
              </div>
              <div className="w-72 h-full bg-orange-extra text-white text-center rounded-full">
                <span>800K</span>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="mr-1">
                <p>Mar</p>
              </div>
              <div className="w-72 h-full bg-black-load text-white text-center rounded-full">
                <span>985K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fox888 */}
      {/* Fox888 */}
      {/* Fox888 */}
      <div className="flex flex-row gap-5 justify-center sm: flex-wrap">
        <Link
          href="https://www.fox888.vip/register/3e2552de0e0c20169c750c5fb9876faf"
          target="_blank"
        >
          <div className="bg-gray-extra justify-center rounded-3xl hover:bg-gray-300 duration-150 w-96 h-32 flex flex-col gap-1 shadow-md px-2 items-center cursor-pointer">
            <Image
              src="/images/fox888.png"
              alt="huaysod"
              width={380}
              height={96}
            />
            <div className="flex flex-row gap-32">
              <div className="flex gap-x-1">
                <div className="bg-black py-1 px-3 text-white rounded-3xl text-center font-semibold">
                  <p>3ตัว</p>
                </div>
                <div className="bg-black py-1 px-3 text-white rounded-3xl text-center font-semibold">
                  <p>980</p>
                </div>
              </div>

              <div className="flex gap-x-1">
                <div className="bg-black py-1 px-3 text-white rounded-3xl text-center font-semibold">
                  <p>2ตัว</p>
                </div>
                <div className="bg-black py-1 px-4 text-white rounded-3xl text-center font-semibold">
                  <p>98</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* Progress bar */}
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
              <div className="w-72 h-full bg-orange-extra text-white text-center rounded-full">
                <p>985K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DNABET */}
      {/* DNABET */}
      {/* DNABET */}
      <div className="flex flex-row gap-5 justify-center sm: flex-wrap">
        <div className="bg-gray-extra justify-center rounded-3xl hover:bg-gray-300 duration-150 w-96 h-32 flex flex-col gap-1 shadow-md px-2 items-center cursor-pointer">
          <Image
            src="/images/dnabet.png"
            alt="huaysod"
            width={380}
            height={96}
          />
          <div className="flex flex-row gap-32">
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
        {/* Progress bar */}
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
              <div className="w-72 h-full bg-orange-extra text-white text-center rounded-full">
                <p>985K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* uwin789 */}
      {/* uwin789 */}
      {/* uwin789 */}
      <div className="flex flex-row gap-5 justify-center sm: flex-wrap">
        <div className="bg-gray-extra justify-center rounded-3xl hover:bg-gray-300 duration-150 w-96 h-32 flex flex-col gap-1 shadow-md px-2 items-center cursor-pointer">
          <Image
            src="/images/uwin789.png"
            alt="huaysod"
            width={380}
            height={96}
          />
          <div className="flex flex-row gap-32">
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
        {/* Progress bar */}
        {/* finish w-96 h-32 items-center = y justify-center = x*/}
        <div className="bg-gray-extra p-5 rounded-3xl w-96 h-32 flex flex-col justify-center shadow-md gap-1">
          <div className="flex flex-col gap-2 font-semibold">
            <div className="flex flex-row gap-2 justify-between">
              <div className="mr-1">
                <p>Jan</p>
              </div>
              <div className="w-72 h-full bg-orange-extra text-white text-center rounded-full">
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
      {/* chudjenbet */}
      {/* chudjenbet */}
      {/* chudjenbet */}
      <div className="flex flex-row gap-5 justify-center sm: flex-wrap">
        <Link
          href="https://chudjenbet.com/affiliate/pB1VDOtv4Z?fbclid=IwAR2EGtbuNF-l1NLe1PpKMsLwSsE0E0KzZkFeb4PXow-xahUkIbovqA7Vio4"
          target="_blank"
        >
          <div className="bg-gray-extra justify-center rounded-3xl hover:bg-gray-300 duration-150 w-96 h-32 flex flex-col gap-1 shadow-md px-2 items-center cursor-pointer">
            <Image
              src="/images/chudjenbet.gif"
              alt="huaysod"
              width={280}
              height={96}
            />
            <div className="flex flex-row gap-32">
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
        </Link>
        {/* Progress bar */}
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
      {/* kerry899plus */}
      {/* kerry899plus */}
      {/* kerry899plus */}
      <div className="flex flex-row gap-5 justify-center sm: flex-wrap">
        <div className="bg-gray-extra justify-center rounded-3xl hover:bg-gray-300 duration-150 w-96 h-32 flex flex-col gap-1 shadow-md px-2 items-center cursor-pointer">
          <Image
            src="/images/kerry899plus.png"
            alt="huaysod"
            width={300}
            height={96}
          />
          <div className="flex flex-row gap-32">
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
        {/* Progress bar */}
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
      </div>
      {/* lotto432 */}
      {/* lotto432 */}
      {/* lotto432 */}
      <div className="flex flex-row gap-5 justify-center sm: flex-wrap">
        <div className="bg-gray-extra justify-center rounded-3xl hover:bg-gray-300 duration-150 w-96 h-32 flex flex-col gap-1 shadow-md px-2 items-center cursor-pointer">
          <Image
            src="/images/lotto432.png"
            alt="huaysod"
            width={260}
            height={96}
          />
          <div className="flex flex-row gap-32">
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
        {/* Progress bar */}
        {/* finish w-96 h-32 items-center = y justify-center = x*/}
        <div className="bg-gray-extra p-5 rounded-3xl w-96 h-32 flex flex-col justify-center shadow-md gap-1">
          <div className="flex flex-col gap-2 font-semibold">
            <div className="flex flex-row gap-2 justify-between">
              <div className="mr-1">
                <p>Jan</p>
              </div>
              <div className="w-72 h-full bg-orange-extra text-white text-center rounded-full">
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
    </div>
  );
};

export default Cards;
