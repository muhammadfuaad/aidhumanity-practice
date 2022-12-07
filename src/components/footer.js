import React from "react";


function Footer() {


    return (

        <footer class="w-full h-auto">
            <div class="w-full h-auto lg:px-20 px-4 py-8 bg-nblue relative">
                <div class="w-full h-auto">
                    <p class="text-white text-mont text-xs">Aid Humanity is a UK registered charity 1184639.</p>
                </div>
                <div class="w-full h-auto mt-4 flex lg:flex-row flex-col lg:gap-10 gap-5 justify-between items-center">
                    <div class="lg:w-1/3 w-full h-auto py-4">
                        <div class="w-full h-auto flex items-center justify-between">
                            <img src="./Icons/logo_aid-humanity-vertical-icon-end.svg" alt="logo" />
                            <div class="px-4">
                                <button class="flex flex-row items-center text-blue text-mont font-bold text-sm"><img class="mr-2" src="./Icons/icon_phone-volume.svg" alt="Phone" />0330 057 9957</button>
                                <p class="text-mont text-fyellow lg:text-lg text-sm font-semibold mt-4">info@aidhumanity.co.uk</p>
                                <div class="lg:w-full w-4/5 h-auto flex justify-between items-center mt-8 ml-4 lg:ml-0">
                                    <a href=""><img className="w-3" src="./Icons/logo_facebook.svg" alt="logo_facebook" /></a>
                                    <a href=""><img className="w-6" src="./Icons/logo_twitter.svg" alt="logo_twitter" /></a>
                                    <a href=""><img className="w-6" src="./Icons/logo_instagram.svg" alt="logo_instagram" /></a>
                                    <a href=""><img className="w-6" src="./Icons/logo_linkedin.svg" alt="logo_linkedin" /></a>
                                </div>    
                            </div>
                        </div>
                        <div class="w-full h-auto mt-8">
                            <p class="text-base text-mont text-footer">Aid Humanity is proud to be a non-profit organization that passes 100% of our donations to charitable causes around the world.</p>
                        </div>
                        <div class="w-full h-auto flex items-center mt-12">
                            <p class="text-white text-mont text-xs">Registered with</p>
                            <img class="ml-3" src="./Icons/logo_fundraising-regulator.svg" alt="logo_fundraising-regulator" />
                        </div>
                    </div>
                    <div class="lg:w-1/3 w-full h-auto flex lg:px-4">
                        <div class="w-1/2 h-auto">
                            <h2 class="text-mont text-white text-sm font-semibold">ABOUT US</h2>
                            <div class="w-full h-auto flex flex-col mt-4">
                                <a class="text-footer text-mont text-base font-medium" href="">Our Story</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Marketing</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Blog</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Zakat</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Get Involved</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Contact</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Donate</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">How it works</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Become a Fundraiser</a>
                            </div>
                        </div>
                        <div class="w-1/2 h-auto">
                            <h2 class="text-mont text-white text-sm font-semibold">APPEALS</h2>
                            <div class="w-full h-auto flex flex-col mt-4">
                                <a class="text-footer text-mont text-base font-medium" href="">Build a Mosque</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Disaster & Emergency</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Appeals</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Water for All</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Sponsor an Orphan</a>
                                <a class="text-footer text-mont text-base font-medium mt-2" href="">Hunger Appeal</a>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 w-full h-auto">
                        <h2 class="text-white text-sm text-mont font-semibold">NEWSLETTER</h2>
                        <h1 class="text-white text-lg text-mont font-bold mt-4 w-4/5">Subscribe to the free newsletter and stay up to date</h1>
                        <form class="w-full h-auto flex items-center mt-4" action="">
                            <input class="w-3/4 h-auto bg-white text-lgray text-xs text-mont p-2 border-2 rounded-xl z-10 focus:outline-none" type="text" name="" id="" placeholder="Your email" />
                            <button class="bg-sblue ml-2 rounded-xl py-2 px-4 text-white"><i class="fa-solid fa-arrow-right z-10"></i></button>
                        </form>
                        <div class="flex flex-row justify-between items-center lg:mt-32 mt-12">
                            <p class="text-lg text-white text-mont">we transfer</p>
                            <img class="w-1/3 mx-2" src="./Icons/logo_100percent.svg" alt="logo_100percent" />
                            <p class="text-xs text-white text-mont">of your donation</p>
                        </div>
                    </div>
                </div>
                <div class="w-full h-auto flex items-center justify-center mt-8 py-4 border-b-2 border-lgray">
                    <div class="lg:w-1/3 w-full h-auto flex justify-between">
                        <a class="text-white text-xs text-mont" href="">Terms & Conditions</a>
                        <a class="text-white text-xs text-mont" href="">Privacy Policy</a>
                        <a class="text-white text-xs text-mont" href="">Donation Policy</a>
                        <a class="text-white text-xs text-mont" href="">Refund Policy</a>
                    </div>
                </div>
                <div class="w-full h-auto mt-4 py-4 flex lg:flex-row flex-col justify-between items-center">
                    <div class="lg:w-1/2 w-full h-auto">
                        <p class="text-white text-mont text-xs text-center lg:text-left">© 2022 <span class="font-semibold">Aid Humanity</span>. All rights reserved.</p>
                    </div>
                    <div class="lg:w-1/2 w-full h-auto flex lg:justify-end justify-center mt-5 lg:mt-0">
                        <div class="lg:w-1/2 w-2/3 h-auto flex justify-between z-10">
                            <img src="./Icons/logo_visa.svg" alt="logo_visa" />
                            <img src="./Icons/symbol_maestro.svg" alt="symbol_maestro" />
                            <img src="./Icons/logo_paypal.svg" alt="logo_paypal" />
                            <img src="./Icons/logo_stripe.svg" alt="logo_stripe" />
                        </div>
                    </div>
                </div>
                <svg className='absolute w-1/3 right-0 bottom-0 z-0'  xmlns="http://www.w3.org/2000/svg" width="465.582" height="606.5" viewBox="0 0 465.582 606.5">
                    <g id="logo_aid-humanity-icon" transform="translate(0.5)" opacity="0.05">
                        <path id="Path_70532" data-name="Path 70532" d="M151.182,171.194A85.568,85.568,0,0,1,75.69,45.624a85.562,85.562,0,1,1,151.271,80h0A85.651,85.651,0,0,1,151.182,171.194Zm.2-123.8A38.214,38.214,0,1,0,185.1,103.49h0A38.247,38.247,0,0,0,151.381,47.4Zm54.647,67.161h0Z" transform="translate(80.943 0)" fill="#FFFFFF"/>
                        <path id="Union_1" data-name="Union 1" d="M215.338,410.359,40.351,235.3a137.947,137.947,0,0,1,0-194.982C93.1-12.443,178.337-13.43,232.288,37.408c53.957-50.838,139.166-49.85,191.905,2.913a137.857,137.857,0,0,1,0,194.982,23.669,23.669,0,1,1-33.465-33.48,90.5,90.5,0,1,0-127.984-128L249.026,87.554l-.031.025-84.637,84.664a23.688,23.688,0,0,1-33.5-33.505l67.787-67.776A90.432,90.432,0,0,0,73.872,201.822L248.821,376.854a23.684,23.684,0,1,1-33.483,33.505Zm61.783-56.27-81.977-82a23.688,23.688,0,1,1,33.5-33.505L310.6,320.609a23.675,23.675,0,1,1-33.483,33.48Zm58.488-61.628-78.857-78.886a23.68,23.68,0,0,1,33.5-33.48l78.838,78.887a23.673,23.673,0,1,1-33.477,33.48Z" transform="translate(0 188.703)" fill="#FFFFFF" stroke="rgba(0,0,0,0)" stroke-width="1"/>
                    </g>
                </svg>
            </div>
        </footer>      

    );
}

export default Footer;