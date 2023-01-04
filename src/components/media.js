function media() {


  return (
    <>
      <div class="flex media-section justify-between">
        <div className="media">
          <div className="media__image">
            <img className="icon" src="/Icons/icon_phone-volume.svg"></img>
          </div>
          <div className="media__body">
            <h3 className="media__title">Phone</h3>
            <p className="media__content email">03300579957</p>
          </div>
        </div>
        <div className="media">
          <div className="media__image">
            <img className="icon" src="/Icons/icon_envelope-open.svg"></img>
          </div>
          <div className="media__body">
            <h3 className="media__title">Email</h3>
            <p className="media__content email">info@aidhumanity.co.uk</p>
          </div>
        </div>
      </div>
    </>
    
  );
}
export default media;