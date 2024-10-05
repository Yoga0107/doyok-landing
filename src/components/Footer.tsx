"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-theme-first-color rounded-t-[54px] md:rounded-t-[104px]">
      <div className="bg-theme-bg bg-cover bg-opacity-10 -mt-28">
        <div className="bg-theme-first-color-alt bg-opacity-90 rounded-t-[54px] md:rounded-t-[104px] w-full lg:px-[150px] px-4 pb-[172px] pt-10 lg:pt-[140px] relative">
          <div className="flex flex-col lg:flex-row justify-center md:justify-around">
            <div
              className="flex flex-col justify-center items-center gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex gap-x-2 text-lg items-center justify-center">
                <Image
                  alt="Logo"
                  src={"/image/logo.svg"}
                  width={32}
                  height={32}
                />
                <h1 className="text-white font-pacifico text-2xl md:text-3xl">
                  Coffee Shop
                </h1>
              </div>
              <h1 className="font-pacifico text-white text-[24px] md:text-[36px] mb-8 text-center">
                Sign up for our newsletter
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-5" data-aos="fade-left">
              <input
                type="text"
                className="bg-transparent border-2 rounded-full border-theme-second-color px-5 py-3 w-full max-w-[400px] focus:outline-none focus:ring-2 focus:ring-theme-second-color transition"
                placeholder="Enter e-mail address"
              />
              <button className="px-7 flex gap-x-2 items-center text-lg font-semibold rounded-full font-poppins py-4 w-full max-w-[400px] bg-theme-second-color text-theme-title-color shadow-btn-shadow hover:bg-theme-second-color-dark transition">
                Subscription
              </button>
              <p className="text-sm text-white font-poppins text-center">
                We care about your data. Read our
                <span className="text-theme-second-color"> Privacy Policy</span>
              </p>
            </div>
          </div>
          <div className="w-full flex gap-x-5 justify-center mt-10" data-aos="zoom-in-down">
            <Image
              alt="Facebook"
              src={"/icon/facebook.svg"}
              width={32}
              height={32}
            />
            <Image
              alt="Instagram"
              src={"/icon/instagram.svg"}
              width={32}
              height={32}
            />
            <Image
              alt="Twitter"
              src={"/icon/twitter.svg"}
              width={32}
              height={32}
            />
          </div>
          <div className="relative">
          <p className="absolute top-32 text-theme-text-color text-sm font-poppins text-center w-full">
  &#169; MC Doyok&#39;s. All rights reserved
</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
