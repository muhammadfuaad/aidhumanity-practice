import React from "react";


function Footer() {
    return (
      <footer className="bg-primary-dark p-5 px-48 pt-16 relative overflow-hidden z-0">
        <img src="./Icons/icon_toogle-off.svg" className= "absolute top-0 right-[1rem] z-10" alt= "stripe logo" />
        <div className="wrapper">
          <p className="text-xs text-white opacity-50 font-medium mb-4">Aid Humanity is a UK registered charity 1184639.</p>
          <div className="flex gap-12">
            {/* First col */}
            <div className="flex flex-col basis-[40%]">
              <div className="mr-12 ">
                <div className="flex">
                  <img src="./Icons/icon_toogle-off.svg" className= "h-[7.4rem] w-[10.6rem]" alt= "footer logo" />
                  <div className="ml-12 flex flex-col justify-between">
                    <div className="flex space-x-2 items-center">
                      <img src="./Icons/icon_toogle-off.svg" className= "w-[17px] h-[1rem] mr-1" alt= "phone icon" />
                      <div><p className="text-primary text-lg font-bold tracking-[-.27px]">0330 057 9957</p></div>
                    </div>
                    <div><p className="text-amber text-lg font-semibold tracking-[-.27px]">info@aidhumanity.co.uk</p></div>
                    <div className="flex justify-between items-center w-[10.3rem]">
                      <img src="./Icons/facebook.png" className= "w-[9px] h-[1rem]" alt= "facebook icon" />
                      <img src="./Icons/twitter.png" className= "w-[20px] h-[17px]" alt= "twitter icon" />
                      <img src="./Icons/instagram.png" className= "w-[25px] h-[25px]" alt= "instagram icon" />
                      <img src="./Icons/linkedin.png" className= "w-[18px] h-[17px]" alt= "linkedin icon" />
                    </div>
                  </div>
                </div>
                <p className="text-footer-text text-base font-medium leading-[26px] tracking-[-.24px] mt-6">Aid Humanity is proud to be a non-profit organization that passes 100% of our donations to charitable causes around the world.</p>
              </div>
              <div className="flex items-center mt-[4rem]">
                <span className="text-xs text-white opacity-50 font-medium mr-2">Registered with</span>
                <img src="./Icons/icon_toogle-off.svg" className= "w-[7.5rem] h-[2.25rem] mix-blend-luminosity" alt= "regulator icon" />
              </div>
            </div>
      
            {/* Second column */}
            <div className="flex flex-col basis-[20%]">
              <span className="text-white mb-3 font-semibold text-sm tracking-[-.21px]">ABOUT US</span>
              <ul className="text-footer-text flex flex-col text-base font-medium leading-[30px] tracking-[-.24px]">
                <li><a href="/" className="hover:underline">Our Story</a></li>
                <li><a href="/" className="hover:underline">Marketing</a></li>
                <li><a href="/" className="hover:underline">Blog</a></li>
                <li><a href="/" className="hover:underline">Zakat</a></li>
                <li><a href="/" className="hover:underline">Get Involved</a></li>
                <li><a href="/" className="hover:underline">Contact</a></li>
                <li><a href="/" className="hover:underline">Donate</a></li>
                <li><a href="/" className="hover:underline">How it works</a></li>
                <li><a href="/" className="hover:underline">Become a Fundraiser</a></li>
              </ul>
            </div>
      
            {/* Third column */}
            <div className="flex flex-col basis-[20%]">
              <span className="text-white mb-3 text-link-heading-color font-semibold text-sm tracking-[-.21px]">APPEALS</span>
              <ul className="text-footer-text flex flex-col text-base font-medium leading-[30px] tracking-[-.24px]">
                <li><a href="/" className="hover:underline">Build a Mosque</a></li>
                <li><a href="/" className="hover:underline">Disaster & Emergency</a></li>
                <li><a href="/" className="hover:underline">Appeals</a></li>
                <li><a href="/" className="hover:underline">Water For All</a></li>
                <li><a href="/" className="hover:underline">Sponsor an Orphan</a></li>
                <li><a href="/" className="hover:underline">Hunger Appeal</a></li>
              </ul>
            </div>
      
            {/* Fourth colmn */}
            <div className="flex flex-col">
              <span className="text-white mb-3 text-link-heading-color font-semibold text-sm tracking-[-.21px]">NEWSLETTER</span>
              <span className="text-white font-bold text-lg leading-7 tracking-[-.45px]">Subscribe to the free newsletter and stay up-to date</span>
              <div className="flex mt-5 mr-0">
                <div className="mb-3">
                  <div className="flex flex-wrap items-center w-full">
                    <input type="search" className="form-control relative min-w-0 w-[16.8rem] h-[2.5rem] block px-3 py-0 text-base font-normal text-secondary-light bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg" placeholder="Your email" aria-label="Search" aria-describedby="button-addon2"></input>
                    <button className="w-[45px] h-[40px] ml-3 bg-Vivd-Cerulean text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="10.121" viewBox="0 0 13.24 10.121">
                        <g id="arrow-right" transform="translate(0.75 1.061)">
                          <path id="Path_4820" data-name="Path 4820" d="M6.962.7l3.9113.97L6.9628.7" transform="translate(0.865 -0.702)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                          <line id="Line_158" data-name="Line 158" x1="11.74" transform="translate(0 4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.5" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-white mt-[6.8rem]">
                <span className="font-semibold text-lg tracking-[-.9px] mr-4">we transfer</span>
                <img src="./Icons/icon_toogle-off.svg" className= "w-[113px] h-[46px]" alt= "100percent" />
                <span className="font-semibold text-xs tracking-[-.6px] ml-1">of your donation</span>
              </div>
            </div>
          </div>
      
          <ul className="flex justify-center space-x-6 text-white opacity-50 mt-[50px] text-xs font-normal tracking-[-.06px]">
            <li><a href="/" className="">Terms & Conditions</a></li>
            <li><a href="/" className="">Privacy Policy</a></li>
            <li><a href="/" className="">Donation Policy</a></li>
            <li><a href="/" className="">Refund Policy</a></li>
          </ul>
          <hr className="my-3 bg-white opacity-25 h-[0.15rem]"></hr>
      
          <div className="flex justify-between items-center mt-4">
            <p className="opacity-50 text-xs tracking-[-.06px]">
              <span className="font-medium">&copy; 2022</span>
              <span className="font-semibold">Aid Humanity.</span>
              <span className="font-medium">All rights reserved.</span>
            </p>
            <div className="flex justify-between items-center basis-[25%]">
              <img src="./Icons/visa.png" className= "w-[43px] h-[14px] mix-blend-luminosity" alt= "visa logo" />
              <img src="./Icons/mastercard.png" className= "w-[29px] h-[18px] mix-blend-luminosity" alt= "mastercard logo" />
              <img src="./Icons/paypal.png" className= "w-[87px] h-[21px] mix-blend-luminosity" alt= "paypal logo" />
              <img src="./Icons/stripe.png" className= "w-[53px] h-[22px] mix-blend-luminosity" alt= "stripe logo" />
            </div>
          </div>
        </div>
      </footer>
          

    );
}

export default Footer;