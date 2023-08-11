
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <ParentComponent />
    </div>
  )
}

const ParentComponent = () => {

  let [showModal, setShowModal] = useState(false)
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

const ChildComponent = ( {showModal, setShowModal}) => {

  const handleShowModal = () => {
    setShowModal(true)
  }
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={handleShowModal}>Show Modal</button>
      {showModal ? (
        <div>
          <h3>Modal Content</h3>
          <p>This is the modal content.</p>
        </div>
      ): null}
    </div>
  )
}

export default App;
