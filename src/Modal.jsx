import React, { useEffect } from 'react'

const Modal = (props) => {
    const toggleModal = (idx) => {
        let modal = document.getElementById(`card${idx}Modal`)
        modal.classList.toggle('d-none')
    }
  return (
    <>
        <div className='card'>
            <div 
              className='openModalDiv' 
              role={'open-modal'}
              data-toggle='modal' 
              data-target={'card'+ props.idx + 'Modal'}
              onClick={() => toggleModal(props.idx)}
            >
                <h5>{props.item.name}</h5>
                <img src={props.item.img} alt='some image'/>
            </div>
        </div>
        
        <div 
          aria-label='modal'
          role={'modal'}
          className='modal d-none' 
          id={'card'+ props.idx + 'Modal'}
        >
            <div className='modal-header'>
                <p>{props.item.name}</p>
                <button 
                  aria-label='close-modal'
                  onClick={() => toggleModal(props.idx)}
                >
                    close
                </button>
            </div>
            <div>
                <p>
                    a great bio full of information that helps you find interesting its is very big wow
                </p>

            </div>
        </div>
    </>
    
  )
}

export default Modal