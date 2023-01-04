import Media from '../components/media';
import Contact_form from '../components/contact_form';
function Contact_page() {
  return (
    <section className="page">
      <div className="page__header">
        <h2>Contact</h2>
      </div>
      <div className="block">
        <p className="navigator">Home / Contact</p>
        <div className="flex page relative">
          <img className="absolute" src="/images/vectors/blue-circle-small.svg"></img>
          <img className="absolute top-1/2 -left-[10%]" src="/images/vectors/yellow-ring-small.svg"></img>
          <img className="absolute" src="/images/vectors/yellow-ring-large.svg"></img>
          <div className="basis-1/2 flex flex-col space-y-8 page__content">
            <div className="flex flex-col space-y-8">
              
              <h1 className="page__heading">Contact</h1>
              <h2 className="card__heading">Got a Question?</h2>
              <p className="body__text">Aid Humanity is a thoughtful, caring community of like-minded individuals ready to give back and make a difference. If you’d like to know more about what we do, or have a question about how you can help, all you have to do is ask.</p>
      
              <Media />
      
              <h2 className="card__heading">Company Details</h2>
              <p className="body__text">Aid Humanity, Unit 9, Twelve o’clock Court, Sheffield, S4 7WW</p>
            </div>
          </div>
          <Contact_form />
        </div>
      </div>     
    </section>
  );
}
export default Contact_page;