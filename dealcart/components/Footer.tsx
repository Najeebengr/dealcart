import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  dealCart_nav_items,
  forBusiness_nav_items,
  support_nav_items,
} from "@/lib/constants";
import Link from "next/link";
function Footer() {
  return (
    <footer className="container relative py-8 md:py-14  w-full mt-10  mx-auto px-4 md:px-12 rounded-2xl bg-[#576aff]">
      <div className="flex flex-col md:flex-row  justify-between">
        <div className="">
          <Image
            src={"../white_logo.svg"}
            width={130}
            height={45}
            alt="Logo"
            className="w-[170px] md:w-[130px]"
          />
          <Link
            href={"/#header"}
            className="block md:hidden absolute top-[4%] right-[5%]"
          >
            <div>
              <Image
                src={"../scroll.svg"}
                width={35}
                height={45}
                alt="scroll"
                className=""
              />
              <p className="text-xs mt-2 text-white">
                SCROLL
                <br /> TO TOP
              </p>
            </div>
          </Link>

          <div className="social-icons  border-b-[1px] md:border-none border-white  flex gap-3 py-6 md:py-3">
            <FaFacebookF className="text-white text-2xl md:text-lg" />
            <FaTwitter className="text-white text-2xl md:text-lg" />
            <FaYoutube className="text-white text-2xl md:text-lg" />
            <FaInstagram className="text-white text-2xl md:text-lg" />
            <FaLinkedin className="text-white text-2xl md:text-lg" />
          </div>
          <div className="py-3 hidden md:block">
            <p className="flex text-white gap-1 order-3">
              Made with{" "}
              <Image src={"../heart.svg"} width={17} height={17} alt="Logo" />{" "}
              in Pakistan
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-white">
              9th Floor, Fortune Tower, <br />
              Shahra-e-Faisal, Karachi
            </p>
          </div>

          <div className="py-3 hidden md:block">
            <p className="text-white">0307 7775410</p>
          </div>
        </div>
        <div className="py-5 md:py-0 border-b-[1px] md:border-none border-white">
          <h4 className="text-white py-2 text-xl md:text-lg font-bold">
            DealCart
          </h4>
          <div className="flex py-2 md:py-0 flex-row md:flex-col md:gap-1 gap-5">
            {dealCart_nav_items.map((item) => (
              <Link key={item.url} href={item.url}>
                <p className="text-white">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="py-4 md:py-0 border-b-[1px] md:border-none border-white">
          <h4 className="text-white py-2 text-xl md:text-lg font-bold">
            For Business
          </h4>
          <div className="flex py-2 md:py-0 flex-row md:flex-col flex-wrap md:gap-1 gap-5">
            {forBusiness_nav_items.map((item) => (
              <Link key={item.url} href={item.url}>
                <p className="text-white">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="py-4 md:py-0 border-b-[1px] md:border-none border-white">
          <h4 className="text-white py-2 text-xl md:text-lg font-bold">
            Support
          </h4>
          <div className="flex py-2 md:py-0 flex-row md:flex-col flex-wrap md:gap-1 gap-5">
            {support_nav_items.map((item) => (
              <Link key={item.url} href={item.url}>
                <p className="text-white">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="qr hidden md:block">
          <Image src={"../qr_code.svg"} width={110} height={45} alt="Logo" />
        </div>
        <div className="block md:hidden">
        <div className="py-3">
          <p className="flex justify-center  text-white gap-1 order-3 text-center md:text-start">
            Made with{" "}
            <Image src={"../heart.svg"} width={17} height={17} alt="Logo" /> in
            Pakistan
          </p>
        </div>
        <div className="py-3">
          <p className="text-white text-center md:text-start">
            9th Floor, Fortune Tower, <br />
            Shahra-e-Faisal, Karachi
          </p>
        </div>

        <div className="py-3 text-center md:text-start">
          <p className="text-white">0307 7775410</p>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
