import './modal.css';


function Upload_image({showModal, setshowModal}) {


    return (

      <div>
        <div className='dimmer'></div>
        <div className='messageBox lg:w-1/3 w-4/5 bg-white rounded-xl w-full z-50'>
          <div className='p-6 flex justify-between items-center border-b-2'>
            <h2 className='text-lg text-black-50 font-bold'>Upload a new image</h2>
            <div className='w-5 h-5 rounded-full border-2 border-gray-300 flex justify-center items-center'>
              <i onClick={()=>setshowModal(false)} className="fas fa-close text-xs text-gray-300 cursor-pointer"></i>
            </div>
          </div>
          <div className='p-6'>
            <p className='text-gray-600'>Please select an image by clicking on the icon below.</p>
            <div className='w-full h-36 rounded-xl border border-dashed border-gray-400 bg-gray flex flex-col items-center py-10 mt-6'>
                <div className='flex gap-2'>
                  <img className='w-full z-20' src="images/icons/dashboard/icon_cloud-upload.svg" alt="" />
                  <p className='text-sm text-blue font-bold'>BROWSE</p>
                </div>
                <p className='text-sm font-bold'>Drag & Drop files here</p>
                <p className='text-xs text-gray-400 w-1/2 text-center'>* Supported image formats: jpg, jpeg, png, max. filesize 2 MB</p>
            </div>
            <button className="py-4 w-1/3 bg-green text-black font-bold text-xs rounded-lg uppercase mt-8">Upload</button>

          </div>
        </div> 
      </div>      

    );
}

export default Upload_image;