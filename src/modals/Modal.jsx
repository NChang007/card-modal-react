import React from 'react'
import PropTypes from 'prop-types'

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

const Modal = ({children, id}) => {
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
          >
            <div 
              aria-label='modal'
              role={'modal'}
              className='modal' 
              onClick={(e) => modalClick(e)}
            >
                {children}
            </div>
  
          </div>
      </>
      
    )
}
Modal.defaultProps = {
    id : 'example'
}
Modal.propTypes ={
    id : PropTypes.string
}


Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.Trigger = ModalTrigger
Modal.Close = ModalClose



export { Modal, ModalTrigger }