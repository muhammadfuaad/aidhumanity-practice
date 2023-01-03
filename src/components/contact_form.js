function Contact_form() {


  return (
  <div className="card contact-form relative">
    <p className="card__heading">Contact Form</p>
    <div className="input-container">
      <input className="input" type="text" id="name" required></input>
      <label for="name">Name*</label>
    </div>
    <div className="input-container">
      <input className="input" type="text" id="email" required></input>
      <label for="email">email*</label>
    </div>
    <div className="input-container">
      <input className="input" type="text" id="phone" required></input>
      <label for="phone">phone*</label>
    </div>
    <div className="input-container">
      <input className="input" type="text" id="subject" required></input>
      <label for="subject">subject*</label>
    </div>
    <div className="input-container">
      <input className="input message" type="text" id="message" required></input>
      <label for="message">message*</label>
    </div>
    
    <div className="flex space-x-2">
    <a href=""><img className="w-5 mt-1" src="/Icons/icon_toogle-off.svg" alt="logo_facebook" /></a>
      <p className="disclaimer">I agree to <span className="highlights">Terms & Conditions </span>
      and <span className="highlights">Privacy Policy</span></p>
    </div>
    <button className="btn btn--primary">Submit</button>   
  </div>
  );
}
export default Contact_form;