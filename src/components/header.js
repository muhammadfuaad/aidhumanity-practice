import React from "react";
import {isMobile} from 'react-device-detect';
import Appeal_modal from "./modal/appeal_modal";
import Donate_modal from "./modal/donate_modal";
import { useHistory } from 'react-router-dom';


function Header() {

    const [showAppealModal, setshowAppealModal] = React.useState(false);
    const [active, setactive] = React.useState('');
    const [quick, setquick] = React.useState(false);
    const [showDonateModal, setshowDonateModal] = React.useState(false);
    const [showMenu, setshowMenu] = React.useState(false);
    let history = useHistory();


    if(!isMobile){
        return(
            <header class="w-full h-auto top-0 left-0 px-20 py-3 relative">
                <nav class="w-full h-auto px-4">
                    <div class="w-full h-auto py-4 flex flex-row justify-between items-center">
                        <div class="w-30 h-auto">
                            <a href=""><img class="w-1/2" src="./logo/logo_aid-humanity-icon.svg" alt="logo" /></a>
                        </div>
                        <p class="text-sm text-mont text-lgray font-semibold">|</p>
                        <div class="text-lg text-mont text-lblack font-medium w-2/3 h-auto flex justify-around items-center">
                            <a href="">Our Story</a>
                            <a onClick={()=>{setshowAppealModal(!showAppealModal); setactive('appeal')}} class="font-bold">Appeals</a>
                            <a onClick={()=>{setshowAppealModal(!showAppealModal); setactive('emergency')}} class="font-bold">Emergency</a>
                            <a onClick={()=>{setshowAppealModal(!showAppealModal); setactive('zakat')}} class="font-bold">Zakat</a>
                            <a onClick={()=>{setshowDonateModal(!showDonateModal); setquick(false)}}>Get Involved</a>
                        </div>
                        <div class="w-2/3 flex justify-between items-center pl-16">
                            <a class="text-sm text-mont text-lgray font-semibold" href="">Zakat Calculator</a>
                            <p class="text-sm text-mont text-lgray font-semibold">|</p>
                            <button class="text-sm text-mont text-lgray font-semibold">En <i class="fa-solid fa-angle-down"></i></button>
                            <a class="text-sm text-mont text-lblack font-semibold" href=""><i class="fa-regular fa-circle-user text-lg"></i> My Account</a>
                            <a href=""><img src="./Icons/icon_package- box.svg" alt="package-box" /></a>
                            <button class="donate-now p-2" onClick={()=>{setshowDonateModal(!showDonateModal); setquick(true)}}>DONATE NOW</button>
                        </div>
                    </div>
                </nav>
                { showAppealModal ? <Appeal_modal showModal={showAppealModal} setshowModal={setshowAppealModal} active={active} /> : null}
                { showDonateModal ? <Donate_modal showModal={showDonateModal} setshowModal={setshowDonateModal} quick={quick} /> : null }
            </header>
        )
    } else{
    
    return (

        <>

        <header class="w-full h-auto flex">
            <nav class="w-full h-auto">
                <div class="w-full h-auto py-4 flex flex-row justify-between items-center">
                    <div class="w-3/4 flex flex-row justify-between items-center px-3">
                        <button onClick={()=>setshowMenu(true)}><img src="./Icons/icon_bars.svg" alt="icon_bars" /></button>
                        <a href=""><img className='lg:w-full w-4/5' src="./logo/logo_aid-humanity-horizontal-icon-middle.svg" alt="logo" /></a>
                    </div>
                    <div class="w-1/4 h-auto flex flex-row justify-between items-center px-5">
                        <button><i class="fa-regular fa-circle-user text-2xl"></i></button>
                        <button><img className="w-5" src="./Icons/icon_package- box.svg" alt="package-box" /></button>
                    </div>
                </div>
            </nav>
        </header>

        { showMenu ?
        <div className="w-full bg-white h-full fixed top-0 left-0 pt-6 z-20">
            <p className="text-sm font-semibold pl-6 flex items-center gap-2"><img onClick={()=>{setshowMenu(false);}} className="w-3 h-3" src="images/icons/dashboard/angle-left.svg" alt="" /> MENU</p>
            <ul className="flex flex-col mt-4 bg-gray h-full">
                <li  className={active == 'dashboard' ? "cursor-pointer border-blue" : "cursor-pointer border-white" }>
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                    <p className="text-xs font-medium">Our Story</p>
                </div>
                </li>
                <li onClick={()=>{setshowAppealModal(true); setactive('appeal')}} className={active == 'profile' ? "cursor-pointer border-blue" : "cursor-pointer border-white" }>
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                <p className="text-xs font-medium">Appeals</p>
                </div>
                </li>
                <li  onClick={()=>{setshowAppealModal(!showAppealModal); setactive('emergency')}} className={active == 'funds' ? "cursor-pointer border-blue" : "cursor-pointer border-white" }>
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                <p className="text-xs font-medium">Emergency</p>
                </div>
                </li>
                <li onClick={()=>{setshowAppealModal(!showAppealModal); setactive('zakat')}}  className={active == 'security' ? "cursor-pointer border-blue" : "cursor-pointer border-white" }>
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                <p className="text-xs font-medium">Zakat</p>
                </div>
                </li>
                <a><li className={active == 'donation' ? "cursor-pointer border-blue" : "cursor-pointer border-white" }>
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                <p onClick={()=>{setshowDonateModal(true); setquick(false)}} className="text-xs font-medium">Get Involved</p>
                </div>
                </li></a>
                <li className={active == 'monthly' ? "cursor-pointer border-blue" : "cursor-pointer border-white" }>
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                <p className="text-xs font-medium">Zakat Calculator</p>
                </div>
                </li>
                <li className={active == 'payment' ? "cursor-pointer border-blue" : "cursor-pointer border-white" }>
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                <p className="text-xs font-medium">Blog</p>
                </div>
                </li>
                <li  className={active == 'prefer' ? "cursor-pointer border-blue" : "cursor-pointer border-white" }>
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                <p className="text-xs font-medium">My Account</p>
                </div>
                </li>
                <li  className={active == 'prefer' ? "cursor-pointer border-blue" : "cursor-pointer border-white" }>
                <div className="pl-6 flex gap-2 py-5 text-black">
                <p className="text-xs font-medium">Contact Us</p>
                </div>
                </li>
                <div className="px-6 mt-5">
                    <button class="w-full donate-now p-2 " onClick={()=>{setshowDonateModal(!showDonateModal); setquick(true)}}>DONATE NOW</button>
                </div>
                <li className={active == 'prefer' ? "cursor-pointer border-blue" : "cursor-pointer border-white" }>
                <div className="pl-6 flex gap-2 py-5 text-black border-b">
                <p className="text-xs font-medium">Languages</p>
                </div>
                </li>
            </ul>
        </div> : null}

        { showAppealModal ? <Appeal_modal showModal={showAppealModal} setshowModal={setshowAppealModal} active={active} /> : null}
        { showDonateModal ? <Donate_modal showModal={showDonateModal} setshowModal={setshowDonateModal} quick={quick} /> : null }

        </>

    

    );

    }
}

export default Header;
