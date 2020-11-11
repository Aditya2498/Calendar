import React,{useState} from 'react';
import './App.css';
import Calen from './Calendar';
import Mdal from './Modal';

function App() {
  const [isModalOpen,setisModalOpen] = useState(false) ;

  const onClickDay = () => {setisModalOpen(true)};
  const onModalClose = () =>{setisModalOpen(false)};

  return (
    <div className="App">
    <Calen onClickDay= {onClickDay}/>
    <Mdal onClose={onModalClose} visible={isModalOpen}/>
      
    </div>
  );
}

export default App;
