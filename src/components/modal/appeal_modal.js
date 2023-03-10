function Appeal_modal({showModal, setshowModal, active}) {

    return (

      <div class="lg:w-4/5 w-full lg:left-12 left-0 lg:top-24 top-0 h-auto z-50 absolute">
        <p className="text-sm font-semibold pl-6 py-6 flex items-center gap-2 lg:hidden bg-white" onClick={()=>{setshowModal(false)}}><img className="w-3 h-3" src="images/icons/dashboard/angle-left.svg" alt="" /> {active == 'appeal' ? "APPEAL" : active == 'zakat' ? "ZAKAT" : "EMERGENCY"}</p>
          <div class="w-full h-auto relative">
              <div class="w-full h-auto rounded-t-2xl">
                  { active == 'zakat' ?
                  <div class="w-full h-auto lg:p-10 p-5 relative rounded-t-2xl bg-blue-10 flex lg:flex-row flex-col justify-between items-center">
                      <img class="absolute top-0 left-0 hidden lg:block" src="./Icons/shape_mega-menu-horizontal-large.svg" alt="shape_mega-menu-horizontal-large" />
                      <h1 class="text-lblack text-mont text-base font-bold">Quick Zakat Calculator</h1>
                      <div class="lg:w-2/3 w-full mt-4 lg:mt-0 h-auto flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between items-center">
                          <div class="lg:w-1/3 w-full h-auto border-2 border-l2black rounded-2xl p-4">
                              <p class="text-lblack text-mont text-xs font-semibold">Total Savings inc. Gold</p>
                              <p class="text-lblack text-mont text-xs font-semibold">£ 980</p>
                          </div>
                          <div class=" lg:ml-4 lg:w-1/3 w-full h-auto border-2 border-l2black rounded-2xl p-4">
                              <p class="text-lblack text-mont text-xs font-semibold">Total Debt</p>
                              <p class="text-lblack text-mont text-xs font-semibold">£ 200</p>
                          </div>
                          <img class="mx-4" src="./Icons/icon_equal.svg" alt="icon_equal" />
                          <div class="lg:w-1/3 w-full h-auto border-2 border-l2black rounded-2xl p-4">
                              <p class="text-lblack text-mont text-xs font-semibold">Zakat amount to pay</p>
                              <p class="text-lblack text-mont text-xs font-semibold">£ 32</p>
                          </div>
                      </div>
                  </div> : null}
                  <div class={active != 'zakat' ? "w-full h-auto rounded-t-2xl px-10 pb-20 pt-10 relative lg:bg-white bg-gray flex lg:flex-row flex-col gap-4 justify-between" : "w-full h-auto px-10 pb-20 pt-10 relative lg:bg-white bg-gray flex lg:flex-row flex-col gap-4 justify-between" }>
                      { active != 'zakat' ? <img class="absolute top-0 left-0  hidden lg:block" src="./Icons/shape_mega-menu-horizontal-large.svg" alt="shape_mega-menu-horizontal-large" />: null}
                      { active == 'appeal' || active == 'zakat' ?
                      <div class="lg:w-1/3 w-full h-auto flex justify-between">
                          <div class="h-auto">
                              <img class="flex" src="./Icons/icon_mosque.svg" alt="icon_mosque" />
                          </div>
                          <div class="w-full h-auto ml-4 flex flex-col">
                              <a class="text-nblue text-mont text-lg font-bold" href="">Build a Mosque</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-4" href="">Pay for a Brick</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Books</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Quran Appeal</a>
                          </div>
                      </div> : null}
                      <div class="lg:w-1/3 w-full h-auto flex justify-between">
                          <div class="h-auto">
                              <img class="flex" src="./Icons/icon_emergency-color.svg" alt="icon_emergency-color" />
                          </div>
                          <div class="w-full h-auto ml-4 flex flex-col">
                              <a class="text-nblue text-mont text-lg font-bold" href="">Disaster & Emergency Appeals</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-4" href="">Pakistan Floods</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Bangladesh Floods</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Quran Appeal</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Rohingya Appeal</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Palestine Gaza</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Ukraine Emergency Appeal</a>
                          </div>
                      </div>
                      { active == 'appeal' || active == 'zakat' ?  
                      <div class="lg:w-1/3 w-full h-auto">
                          <div class="w-full h-auto flex justify-between">
                              <div class="h-auto">
                                  <img class="flex" src="./Icons/icon_water.svg" alt="icon_water" />
                              </div>
                              <div class="w-full h-auto ml-4 flex flex-col">
                                  <a class="text-nblue text-mont text-lg font-bold" href="">Water for All</a>
                                  <a class="text-base text-dgray tet-mont font-medium mt-4" href="">Water Wells</a>
                              </div>
                          </div>
                          <div class="w-full h-auto flex justify-between mt-6">
                              <div class="h-auto">
                                  <img class="flex" src="./Icons/icon_orphan-color.svg" alt="icon_orphan-color" />
                              </div>
                              <div class="w-full h-auto ml-4 flex flex-col">
                                  <a class="text-nblue text-mont text-lg font-bold" href="">Sponsor an Orphan</a>
                              </div>
                          </div>
                          <div class="w-full h-auto flex justify-between mt-6">
                              <div class="h-auto">
                                  <img class="flex" src="./Icons/icon_hungry.svg" alt="icon_hungry" />
                              </div>
                              <div class="w-full h-auto ml-4 flex flex-col">
                                  <a class="text-nblue text-mont text-lg font-bold" href="">Hunger Appeal</a>
                              </div>
                          </div>
                      </div> : null}
                  </div>
                  <div class="w-full h-auto rounded-b-2xl p-10 bg-gray lg:flex justify-between hidden">
                      <div class="w-1/4 h-auto">
                          <h1 class="text-lblack text-mont text-3xl font-bold">Popular <br /> Donations</h1>
                      </div>
                      <div class="w-1/4 h-auto px-4 flex justify-center">
                          <div class="w-1/2 h-auto relative">
                              <img className="w-full h-full" src="./images/Pakistan Floods 2022 horizontal.png" alt="Pakistan Floods 2022" />
                              <button id="cursor-pointer" class="absolute left-0 right-0 w-4/5 mx-auto bottom-4 text-vs font-semibold text-white text-mont bg-sblue rounded-lg px-3 py-2">DONATE NOW <i class="fa-solid fa-arrow-right"></i></button>    
                          </div>
                          <div class="w-1/2 h-auto bg-white rounded-r-xl flex flex-col justify-between relative p-4">
                              <h2 class="text-sm text-mont font-bold text-lblack">Pakistan <br /> Floods</h2>
                              <a class="text-sblue text-lg" href=""><i class="fa-solid fa-arrow-right"></i></a>
                              <img class="absolute -left-5" src="./Icons/badge_zakat.svg" alt="badge_zakat" />
                          </div>
                      </div>
                      <div class="w-1/4 h-auto px-4 flex justify-center">
                          <div class="w-1/2 h-auto relative">
                              <img className="w-full h-full" src="./images/maxresdefault horizontal.png" alt="maxresdefault" />
                              <button id="cursor-pointer" class="absolute left-0 right-0 w-4/5 mx-auto bottom-4 text-vs font-semibold text-white text-mont bg-sblue rounded-lg px-3 py-2">DONATE NOW <i class="fa-solid fa-arrow-right"></i></button>    
                          </div>
                          <div class="w-1/2 h-auto bg-white rounded-r-xl flex flex-col justify-between relative p-4">
                              <h2 class="text-sm text-mont font-bold text-lblack">Support <br /> an Orphaned <br /> Child</h2>
                              <a class="text-sblue text-lg" href=""><i class="fa-solid fa-arrow-right"></i></a>
                              <img class="absolute -left-5" src="./Icons/badge_sadhaka-jaraiyah.svg" alt="badge_sadhaka-jaraiyah" />
                          </div>
                      </div>
                      <div class="w-1/4 h-auto px-4 flex justify-center">
                          <div class="w-1/2 h-auto relative">
                              <img className="w-full h-full" src="./images/rf1110721-somali-refugee-family-in-yemen-1200x800-images horizontal.png" alt="somali-refugee-family-in-yemen" />
                              <button id="cursor-pointer" class="absolute left-0 right-0 w-4/5 mx-auto bottom-4 text-vs font-semibold text-white text-mont bg-sblue rounded-lg px-3 py-2">DONATE NOW <i class="fa-solid fa-arrow-right"></i></button>    
                          </div>
                          <div class="w-1/2 h-auto bg-white rounded-r-xl flex flex-col justify-between relative p-4">
                              <h2 class="text-sm text-mont font-bold text-lblack">Yemen <br /> Emergency</h2>
                              <a class="text-sblue text-lg" href=""><i class="fa-solid fa-arrow-right"></i></a>
                              <img class="absolute -left-5" src="./Icons/badge_sadhaka-jaraiyah.svg" alt="badge_sadhaka-jaraiyah"  />
                          </div>
                      </div>
                  </div>
                  <img class={active == 'appeal' ? "absolute -top-2 left-1/4  hidden lg:block" : active == 'zakat' ? "absolute -top-2 left-1/2 -ml-16  hidden lg:block" :  "absolute -top-2 left-1/3 ml-2  hidden lg:block"}  src="./Icons/triangle-up.svg" alt="triangle-up" />
              </div>
          </div>
      </div>     

    );
}

export default Appeal_modal;