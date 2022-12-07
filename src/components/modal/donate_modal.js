import './modal.css';


function Donate_modal({showModal, setshowModal, quick}) {


    return (

      <div>
        <div className='dimmer'></div>
        <div class="messageBox lg:top-24 top-0 lg:h-auto h-screen lg:w-2/5 w-full z-50 rounded-xl lg:bg-white bg-gray">
            <p className="text-sm font-semibold pl-6 py-6 flex items-center gap-2 lg:hidden bg-white" onClick={()=>{setshowModal(false)}}><img className="w-3 h-3" src="images/icons/dashboard/angle-left.svg" alt="" />DONATE</p>
            <div class="w-full h-auto border-b-2 border-l2black p-6 lg:flex justify-between hidden">
                <h1 class="text-lg text-mont text-lblack font-bold">Donate Now</h1>
                <button onClick={()=>setshowModal(false)} class="text-lg text-lgray"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>
            {! quick ?
            <div class="w-full h-auto bg-l2gray px-6 pt-6">
                <div class="w-full h-auto grid lg:grid-cols-4 grid-cols-2 gap-2">
                    <div className='rounded-2xl'>
                      <div className='w-full rounded-t-xl relative'>
                        <img className='w-full rounded-t-xl' src="./images/vertical Pakistan Floods 2022.png" alt="Pakistan Floods 2022" />
                        <img class="absolute left-0 right-0 mx-auto -bottom-2" src="./Icons/badge_zakat.svg" alt="badge_zakat" />
                      </div>
                      <div class="flex flex-col bg-white px-2 py-4 text-start items-center rounded-b-2xl">
                          <h3 class="text-xs text-mont text-lblack font-bold h-6">Pakistan Floods</h3>
                          <button class="text-blue mx-auto mt-8 text-sm font-bold text-mont p-2 rounded-lg border-2 border-lgray">DONATE</button>
                      </div>
                    </div>
                    <div className='rounded-2xl'>
                      <div className='w-full rounded-t-xl relative'>
                        <img className='w-full rounded-t-xl' src="./images/vertical maxresdefault.png" alt="maxresdefault" />
                        <img class="absolute left-0 right-0 mx-auto -bottom-2" src="./Icons/badge_zakat.svg" alt="badge_zakat" />
                      </div>
                      <div class="flex flex-col bg-white px-2 py-4 text-start items-center rounded-b-2xl">
                          <h3 class="text-xs text-mont text-lblack font-bold h-6">Support an Orphaned Child</h3>
                          <button class="text-blue mx-auto mt-8 text-sm font-bold text-mont p-2 rounded-lg border-2 border-lgray">DONATE</button>
                      </div>
                    </div>
                    <div className='rounded-2xl hidden lg:block'>
                      <div className='w-full rounded-t-xl relative'>
                        <img className='w-full rounded-t-xl' src="./images/vertical 36404f884e19.png" alt="36404f884e19" />
                        <img class="absolute left-0 right-0 mx-auto -bottom-2" src="./Icons/badge_zakat.svg" alt="badge_zakat" />
                      </div>
                      <div class="flex flex-col bg-white px-2 py-4 text-start items-center rounded-b-2xl">
                          <h3 class="text-xs text-mont text-lblack font-bold h-6">Water Hands Pumps</h3>
                          <button class="text-blue mx-auto mt-8 text-sm font-bold text-mont p-2 rounded-lg border-2 border-lgray">DONATE</button>
                      </div>
                    </div>
                    <div className='rounded-2xl hidden lg:block'>
                      <div className='w-full rounded-t-xl relative'>
                        <img className='w-full rounded-t-xl' src="./images/vertical rf1110721-somali-refugee-family-in-yemen-1200x800-images.png" alt="somali-refugee-family-in-yemen" />
                        <img class="absolute left-0 right-0 mx-auto -bottom-2" src="./Icons/badge_zakat.svg" alt="badge_zakat" />
                      </div>
                      <div class="flex flex-col bg-white px-2 py-4 text-start items-center rounded-b-2xl">
                          <h3 class="text-xs text-mont text-lblack font-bold h-6">Yemen Emergency</h3>
                          <button class="text-blue mx-auto mt-8 text-sm font-bold text-mont p-2 rounded-lg border-2 border-lgray">DONATE</button>
                      </div>
                    </div>
               
                </div>
                <div class="w-full h-auto mt-8">
                    <hr class="solid" />
                </div>
                <div class="w-full h-auto p-4 mt-2 text-center">
                    <h1 class="text-mont text-base text-l2black">Donate to <span class="font-bold">Support an Orphaned Child</span></h1>
                    <p class="mt-2 text-l2black text-mont text-xs">fundraised by <span class="text-nblue font-semibold"><i class="fa-regular fa-circle-user"></i> Ron Hill</span></p>
                </div>
            </div> : 
                <div class="w-full h-auto bg-l2gray px-6 py-6 flex justify-between">
                <button class="w-1/3 h-auto text-lblack text-mont text-sm font-medium flex lg:flex-row flex-col gap-2 justify-around px-6 py-4 items-center"><img src="./Icons/icon_dot-circle (1).svg" alt="icon_dot-circle" /><img src="./Icons/badge_sadhaka-jaraiyah.svg" alt="badge_sadhaka-jaraiyah" />Sadhakah</button>
                <button class="w-1/3 h-auto text-lblack text-mont text-sm font-medium flex lg:flex-row flex-col gap-2 justify-around px-6 py-4 items-center"><img src="./Icons/icon_dot-circle (1).svg" alt="icon_dot-circle" /><img class="lg:mx-4" src="./Icons/badge_sadhaka-jaraiyah.svg" alt="badge_sadhaka-jaraiyah" />Sadhakah Jaraiya</button>
                <button class="w-1/3 h-auto text-lblack text-mont text-sm font-medium flex lg:flex-row flex-col gap-2 justify-around px-8 py-4 items-center"><img src="./Icons/icon_dot-circle (1).svg" alt="icon_dot-circle" /><img src="./Icons/badge_zakat.svg" alt="badge_zakar" />Zakat</button>
            </div> }
            <div class="w-full h-auto p-6">
                <h1 class="text-lblack text-3xl text-mont font-bold text-center">Donation amount</h1>
                <div class="w-full h-auto mt-4 flex rounded-lg border-2 border-lgray bg-white">
                    <div class="w-1/5 h-auto px-6 py-4 border-r-2 border-lgray">
                        <p class="text-lblack text-mont text-center text-xs font-medium">£10</p>
                    </div>
                    <div class="w-1/5 h-auto px-6 py-4 border-r-2 border-lgray">
                        <p class="text-lblack text-mont text-center text-xs font-medium">£20</p>
                    </div>
                    <div class="w-1/5 h-auto bg-sblue px-6 py-4">
                        <p class="text-white text-mont text-center text-xs font-medium">£30</p>
                    </div>
                    <div class="w-1/5 h-auto px-6 py-4 border-r-2 border-lgray">
                        <p class="text-lblack text-mont text-center text-xs font-medium">£50</p>
                    </div>
                    <div class="w-1/5 h-auto px-6 py-4">
                        <p class="text-lblack text-mont text-center text-xs font-medium">£100</p>
                    </div>
                </div>
                <div class="w-full h-auto mt-4 flex justify-between rounded-lg border-2 border-lgray bg-white">
                    <div class="w-1/5 h-auto p-3 flex justify-around items-center">
                        <p class="text-xl text-mont font-medium text-dgray">£</p>
                        <h1 class="text-blue text-mont lg:text-5xl text-3xl font-bold">30</h1>
                    </div>
                    <button class="w-1/5 h-auto p-3 flex justify-around items-center">
                        <p class="text-xl text-mont font-medium text-dgray">GBP</p>
                        <img class="ml-2" src="./Icons/angle-down.svg" alt="angle-down" />
                    </button>
                </div>
                <button class="w-full h-auto bg-green mt-4 px-32 py-4 rounded-lg text-center">
                    <p class="text-xs text-mont text-lblack font-bold">CONTINUE</p>
                </button>
            </div>
        </div> 
      </div>      

    );
}

export default Donate_modal;