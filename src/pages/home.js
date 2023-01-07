import React from 'react';
// import Switch from '../components/switch/switch';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import Refund_page from '../components/refund_page';
// import Donation_page from '../components/donation_page';
import Status_green from '../components/status/status--green';
import Status_declined from '../components/status/status--declined';
import Status_bug from '../components/status/status--bug';

function Home() {

  

  return (    
    <>
      <Status_green />
      <Status_bug />
      <Status_declined />
    </>
  );

}
  
export default Home;
