import React from 'react'
import PropTypes from 'prop-types'


// varient Ideas 
// Clean : for minimal css and no colors
// Primary : will include primary color
// Secondary : will include secondary color
// Hazard : for the red or something went wrong
// Caution : for the warning colors so yellow
// Light / Dark : for general color schemes 
// Success : for a successfull message or just a green color 

const toggleModal = (id) => {
    let modalroot = document.getElementById('modalRoot'+ id)
    modalroot.classList.toggle('d-none')
}

// this is how the modal does not close when you click in it 
const modalClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // e.stopImmediatePropagation();
    // return false;
}

const ModalTrigger = ({children, id }) => {
    return (
        <div
            className='openModalDiv' 
            role={'open-modal'}
            data-toggle='modal' 
            data-target={'modalRoot'+ id }
            onClick={() => toggleModal(id)}
        >
            {children}
        </div>
    )
}
ModalTrigger.defaultProps = {
    id : "example"
}
ModalTrigger.propTypes = {
    id : PropTypes.string
}
const ModalHeader = ({children}) => {
    return (
        <div className='modal-header'>
            {children}
        </div>
    )
}
const ModalBody = ({children}) => {
    return (
        <div className='modal-body'>
            {children}
        </div>
    )
}
const ModalFooter = ({children}) => {
    return (
        <div className='modal-footer'>
            {children}
        </div>
    )
}
const ModalClose = ({id, variant}) => {
    return (
        <button 
            aria-label='close-modal'
            onClick={() => toggleModal(id)}
        >
            X
        </button>
    )
}

ModalClose.defaultProps = {
    id : "example",
    variant: "clean"
}
ModalClose.propTypes = {
    id : PropTypes.string,
    variant : PropTypes.string
}
// Must be passed a id or will default to "example" 
// if you have more than one you need to have different id
const Modal = ({children, id, width}) => {
    return (
      <>  
          {/* 
            this is the modal root which is now we are centering the modal 
            we also set the backgound color here.
          */}
          <div 
            className='modal-root d-none' 
            id={'modalRoot'+ id}
            onClick={() => toggleModal(id)}
            style={{
                inset: '0',
                display: 'flex',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
            }}
          >
            <div 
              aria-label='modal'
              role={'modal'}
              className='modal' 
              onClick={(e) => modalClick(e)}
              style={{
                width: `${width}`,
                backgroundColor: '#fff',
                color: '#242424',
                padding: '0.5rem',
                borderRadius: '0.356rem'
              }}
            >
                {children}
            </div>
  
          </div>
      </>
      
    )
}
Modal.defaultProps = {
    id : 'example',
    width : '600px'
}
Modal.propTypes ={
    id : PropTypes.string,
    width : PropTypes.string
}


Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.Trigger = ModalTrigger
Modal.Close = ModalClose



export { Modal, ModalTrigger }