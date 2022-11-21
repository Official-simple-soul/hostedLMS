import settingsmodal from '../../../assets/icons/settingsmodal.png'


const Modal = ({showModal, setShowModal}) => {
    const colors = {
        red: '#FF3F3F',
        ash: '#808080'
    }
  return (
    <>
    <div className="modal">
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4 px-4">
                <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <img src={settingsmodal} alt="" />
                </div>
                <div className="text-center">
                  <h1 className='text-2xl mb-2'>Password reset successful</h1>
                  <p style={{color:colors.ash}}>You can now use your new password to log in to your account.</p>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-blue-ribbon-500 text-white active:bg-emerald-600 font-bold px-20 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
    </>
  )
}

export default Modal