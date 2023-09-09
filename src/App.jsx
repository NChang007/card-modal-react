import React from 'react'
import CardModal from './CardModal'
import { Modal, ModalTrigger } from './modals/Modal'

function App() {
  let data = [
    {
      "title":"First Title",
      "img":"https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      "title":"First Title",
      "img":"https://images.pexels.com/photos/4215102/pexels-photo-4215102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      "title":"First Title",
      "img":"https://images.pexels.com/photos/7919366/pexels-photo-7919366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]
  return (
    <div className='card-container'>
      <ModalTrigger>
        <button>openModal BTN</button>
      </ModalTrigger>
      <Modal>
        <Modal.Header>
          <h3>BIG TITLE</h3>
        </Modal.Header>
        <Modal.Body>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam aut blanditiis consectetur itaque cum similique minus saepe dolor earum vero voluptates, in ullam expedita ducimus nam temporibus vel maiores!</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close />
        </Modal.Footer>
      </Modal>

        {data.map((item,idx) => {
            return (
                <CardModal item={item} key={idx} idx={idx} />
                // unique card ID Must be sent 
            )
        })}
    </div>
  )
}

export default App
