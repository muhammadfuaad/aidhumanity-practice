import React from "react";


function Footer() {
    return (
      <footer class="bg-Space-Cadet p-5 px-48 pt-16 relative overflow-hidden z-0">
        <%= image_tag "logo-lg-gray.svg", class: "absolute top-0 right-[1rem] z-10", alt: "stripe logo" %>
        <div class="wrapper">
          <p class="text-xs text-White opacity-50 font-medium mb-4">Aid Humanity is a UK registered charity 1184639.</p>
          <div class="flex gap-12">
            <!-- First col  -->
            <div class="flex flex-col basis-[40%]">
              <div class="mr-12 ">
                <div class="flex">
                  <%= image_tag "footer-logo.png", class: "h-[7.4rem] w-[10.6rem]", alt: "footer logo" %>
                  <div class="ml-12 flex flex-col justify-between">
                    <div class="flex space-x-2 items-center">
                      <%= image_tag "phone.png", class: "w-[17px] h-[1rem] mr-1", alt: "phone icon" %>
                      <div><p class="text-Vivd-Cerulean text-lg font-bold tracking-[-.27px]">0330 057 9957</p></div>
                    </div>
                    <div><p class="text-Amber text-lg font-semibold tracking-[-.27px]">info@aidhumanity.co.uk</p></div>
                    <div class="flex justify-between items-center w-[10.3rem]">
                      <%= image_tag "facebook.png", class: "w-[9px] h-[1rem]", alt: "facebook icon" %>
                      <%= image_tag "twitter.png", class: "w-[20px] h-[17px]", alt: "twitter icon" %>
                      <%= image_tag "instagram.png", class: "w-[25px] h-[25px]", alt: "instagram icon" %>
                      <%= image_tag "linkedin.png", class: "w-[18px] h-[17px]", alt: "linkedin icon" %>
                    </div>
                  </div>
                </div>
                <p class="text-Bluish text-base font-medium leading-[26px] tracking-[-.24px] mt-6">Aid Humanity is proud to be a non-profit organization that passes 100% of our donations to charitable causes around the world.</p>
              </div>
              <div class="flex items-center mt-[4rem]">
                <span class="text-xs text-White opacity-50 font-medium mr-2">Registered with</span>
                <%= image_tag "regulator.png", class: "w-[7.5rem] h-[2.25rem] mix-blend-luminosity", alt: "regulator icon" %>
              </div>
            </div>
      
            <!-- Second column -->
            <div class="flex flex-col basis-[20%]">
              <span class="text-White mb-3 font-semibold text-sm tracking-[-.21px]">ABOUT US</span>
              <ul class="text-Bluish flex flex-col text-base font-medium leading-[30px] tracking-[-.24px]">
                <li><a href="/" class="hover:underline">Our Story</a></li>
                <li><a href="/" class="hover:underline">Marketing</a></li>
                <li><a href="/" class="hover:underline">Blog</a></li>
                <li><a href="/" class="hover:underline">Zakat</a></li>
                <li><a href="/" class="hover:underline">Get Involved</a></li>
                <li><a href="/" class="hover:underline">Contact</a></li>
                <li><a href="/" class="hover:underline">Donate</a></li>
                <li><a href="/" class="hover:underline">How it works</a></li>
                <li><a href="/" class="hover:underline">Become a Fundraiser</a></li>
              </ul>
            </div>
      
            <!-- Third column -->
            <div class="flex flex-col basis-[20%]">
              <span class="text-White mb-3 text-link-heading-color font-semibold text-sm tracking-[-.21px]">APPEALS</span>
              <ul class="text-Bluish flex flex-col text-base font-medium leading-[30px] tracking-[-.24px]">
                <li><a href="/" class="hover:underline">Build a Mosque</a></li>
                <li><a href="/" class="hover:underline">Disaster & Emergency</a></li>
                <li><a href="/" class="hover:underline">Appeals</a></li>
                <li><a href="/" class="hover:underline">Water For All</a></li>
                <li><a href="/" class="hover:underline">Sponsor an Orphan</a></li>
                <li><a href="/" class="hover:underline">Hunger Appeal</a></li>
              </ul>
            </div>
      
            <!-- Fourth colmn -->
            <div class="flex flex-col">
              <span class="text-White mb-3 text-link-heading-color font-semibold text-sm tracking-[-.21px]">NEWSLETTER</span>
              <span class="text-White font-bold text-lg leading-7 tracking-[-.45px]">Subscribe to the free newsletter and stay up-to date</span>
              <div class="flex mt-5 mr-0">
                <div class="mb-3">
                  <div class="flex flex-wrap items-center w-full">
                    <input type="search" class="form-control relative min-w-0 w-[16.8rem] h-[2.5rem] block px-3 py-0 text-base font-normal text-secondary-light bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg" placeholder="Your email" aria-label="Search" aria-describedby="button-addon2">
                    <button class="w-[45px] h-[40px] ml-3 bg-Vivd-Cerulean text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="10.121" viewBox="0 0 13.24 10.121">
                        <g id="arrow-right" transform="translate(0.75 1.061)">
                          <path id="Path_4820" data-name="Path 4820" d="M6.962.7l3.911,3.97L6.962,8.7" transform="translate(0.865 -0.702)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                          <line id="Line_158" data-name="Line 158" x1="11.74" transform="translate(0 4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.5" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex items-center text-White mt-[6.8rem]">
                <span class="font-semibold text-lg tracking-[-.9px] mr-4">we transfer</span>
                <%= image_tag "100percent.png", class: "w-[113px] h-[46px]", alt: "100percent" %>
                <span class="font-semibold text-xs tracking-[-.6px] ml-1">of your donation</span>
              </div>
            </div>
          </div>
      
          <ul class="flex justify-center space-x-6 text-White opacity-50 mt-[50px] text-xs font-normal tracking-[-.06px]">
            <li><a href="/" class="">Terms & Conditions</a></li>
            <li><a href="/" class="">Privacy Policy</a></li>
            <li><a href="/" class="">Donation Policy</a></li>
            <li><a href="/" class="">Refund Policy</a></li>
          </ul>
          <hr class="my-3 bg-White opacity-25 h-[0.15rem]">
      
          <div class="flex justify-between items-center mt-4">
            <p class="opacity-50 text-xs tracking-[-.06px]">
              <span class="font-medium">&copy; 2022</span>
              <span class="font-semibold">Aid Humanity.</span>
              <span class="font-medium">All rights reserved.</span>
            </p>
            <div class="flex justify-between items-center basis-[25%]">
              <%= image_tag "visa.png", class: "w-[43px] h-[14px] mix-blend-luminosity", alt: "visa logo" %>
              <%= image_tag "mastercard.png", class: "w-[29px] h-[18px] mix-blend-luminosity", alt: "mastercard logo" %>
              <%= image_tag "paypal.png", class: "w-[87px] h-[21px] mix-blend-luminosity", alt: "paypal logo" %>
              <%= image_tag "stripe.png", class: "w-[53px] h-[22px] mix-blend-luminosity", alt: "stripe logo" %>
            </div>
          </div>
        </div>
      </footer>
          

    );
}

export default Footer;