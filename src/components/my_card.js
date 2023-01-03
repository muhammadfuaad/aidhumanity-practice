function My_card() {


  return (
  <div className="card">
    <p className="card__heading">Contact Form</p>
    <input className="input" type="text" placeholder="Name*"></input>
    <input className="input" type="text" placeholder="Email*"></input>
    <input className="input" type="text" placeholder="Phone*"></input>
    <input className="input" type="text" placeholder="Subject*"></input>
    <input className="input message" type="text" placeholder="Message*"></input>
    <div className="flex items-center space-x-2">
    <a href=""><img className="w-5" src="/Icons/icon_toogle-off.svg" alt="logo_facebook" /></a>
      <p className="disclaimer">I agree to <span className="highlights">Terms & Conditions </span>
      and <span className="highlights">Privacy Policy</span></p>
    </div>
    <button className="btn btn--primary">Submit</button>
  </div>
  );
}
export default My_card;