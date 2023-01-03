import React from 'react';
import Switch from '../components/switch/switch';
import Header from '../components/header';
import Contact_form from '../components/contact_form';
import Media from '../components/media'
import Footer from '../components/footer';


function Home() {

  

  return (
    
      
    <>
    <Header />
    <div className="page-header">
      <p className="page-heading">Contact</p>
      
    </div>
    <section className="block">
      <div class="flex">
        <div class="basis-1/2 flex flex-col space-y-8 page-content">
          <div className="flex flex-col space-y-8">
            <p className="navigator">Home / Contact</p>
            <p className="page__heading">Contact</p>
            <p className="card__heading">Got a Question?</p>
            <p className="body__text">Aid Humanity is a thoughtful, caring community of like-minded individuals ready to give back and make a difference. If you’d like to know more about what we do, or have a question about how you can help, all you have to do is ask.</p>
        
            <Media />
        
            <p className="card__heading">Company Details</p>
            <p className="body__text">Aid Humanity, Unit 9, Twelve o’clock Court, Sheffield, S4 7WW</p>
          </div>
        </div>
        <Contact_form />
      </div>
      
      
      
    </section>


    
    </>

  );

}
  
export default Home;
