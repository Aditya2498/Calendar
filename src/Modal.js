import React,{useState} from 'react';
import Modal from 'react-modal';
import './Modal.css';
import Scroll from './Scroll';


const Mdal = (props) =>{
    
 
    return( <div>
              
              <Modal isOpen= {props.visible} onRequestClose= {props.onClose} >
              <Scroll className= 'maincontainer'>
              <div className = 'thecard'>
              <div className= 'thefront'><h1>6:30 Am  Morning Yoga</h1>
              <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project
                 that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been
                  causing the writers' block in the first place.</p>
              </div>
              <div className='theback'><h1>Suryanamaskar</h1></div>
              </div>
              <div className = 'thecard'>
              <div className= 'thefront'><h1>4:30 Am  Evening Yoga</h1></div>
              <div className='theback'><h1>Calesthenics</h1></div>
              </div>
              <div className = 'thecard'>
              <div className= 'thefront'><h1>8:30 pm  Evening Yoga</h1></div>
              <div className='theback'><h1>Body-Weight</h1></div>
              </div>
              </Scroll>
             </Modal>
          
             
        </div>
           
    );
  

}

export default Mdal