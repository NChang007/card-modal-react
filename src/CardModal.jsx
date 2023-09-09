import React, { useEffect } from 'react'

const CardModal = (props) => {
    // toggleModal is how we open and close the modal 
    const toggleModal = (id) => {
      let modalroot = document.getElementById(`card${id}ModalRoot`)
      modalroot.classList.toggle('d-none')
    }
    // this is how the modal does not close when you click in it 
    const modalClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      // e.stopImmediatePropagation();
      // return false;
    }
  return (
    <>  
        {/* this is the card that acts as the trigger for the modal */}
        <div className='card'>
            <div 
              className='openModalDiv' 
              role={'open-modal'}
              data-toggle='modal'
              onClick={() => toggleModal(props.MU_ID)}
            >
                <h5>{props.item.title}</h5>
                <img src={props.item.img} alt='some image'/>
            </div>
        </div>
        {/* 
          this is the modal root which is now we are centering the modal 
          we also set the backgound color here.
        */}
        <div 
          className='modal-root d-none' 
          id={'card'+ props.MU_ID + 'ModalRoot'}
          onClick={() => toggleModal(props.MU_ID)}
        >
          <div 
            aria-label='modal'
            role={'modal'}
            className='modal' 
            onClick={(e) => modalClick(e)}
          >
              <div className='modal-header'>
                  <p><b>{props.item.title}</b></p>
                  <button 
                    aria-label='close-modal'
                    onClick={() => toggleModal(props.MU_ID)}
                  >
                      X
                  </button>
              </div>

              <div className='modal-body'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>

              <div className='modal-footer'>
                <button className='modal-submit-btn'>SUBMIT</button>
              </div>
          </div>

        </div>
    </>
    
  )
}

export default CardModal