import React from 'react';
import Switch from '../components/switch/switch';
import Header from '../components/header';
import My_card from '../components/my_card';
import Footer from '../components/footer';


function Home() {

  

  return (
    
      
    <>
    <Header />
    <div className="page-header">
      <p className="page-heading">Contact</p>
      
    </div>
    <section className="container flex flex-col space-y-8">
      <div className="basis-3/5 flex flex-col space-y-8">
        <p className="navigator">Home / Contact</p>
        <p className="page__heading">Contact</p>
        <p className="card__heading">Got a Question?</p>
        <p className="body__text">Aid Humanity is a thoughtful, caring community of like-minded individuals ready to give back and make a difference. If you’d like to know more about what we do, or have a question about how you can help, all you have to do is ask.</p>
        
        <div class="media">
          <div class="media__image">
            <svg class="icon icon--primary">
              <img src="" ></img>
            </svg>
          </div>
          <div class="media__body">
            <h3 class="media__title">Easy Start & Managed Updates</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam,
              ex nostrum vero voluptates dicta excepturi vel perspiciatis consequuntur
              ab.
            </p>
          </div>
        </div>

        
        <p className="card__heading">Company Details</p>
        <p className="body__text">Aid Humanity, Unit 9, Twelve o’clock Court, Sheffield, S4 7WW</p>

      </div>

      <My_card />
      
      
      
    </section>


    
    </>

  );

}
  
export default Home;
