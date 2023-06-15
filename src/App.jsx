import React from 'react'
import Modal from './Modal'

function App() {
  let data = [
    {
      "name":"Nelson Chang",
      "img":"https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      "name":"Bianca Chang",
      "img":"https://images.pexels.com/photos/4215102/pexels-photo-4215102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      "name":"Daniel Chang",
      "img":"https://images.pexels.com/photos/7919366/pexels-photo-7919366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]
  return (
    <div className='card-container'>
        {data.map((item,idx) => {
            return (
                <Modal item={item} key={idx} idx={idx} />
            )
        })}
    </div>
  )
}

export default App
