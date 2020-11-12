import React from 'react';
import Modal from 'react-modal';
import './Modal.css';



const Mdal = (props) =>{
    
 
    return( <div>
              
              <Modal isOpen= {props.visible} onRequestClose= {props.onClose}  >
              
              
              <div className= ' '>
              <div className= 'box-1'><h1>6:30 Am  Morning Yoga</h1></div>
              <div> <p classname= 'box-2'>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project
              that the writer is trying to complete. </p><button >Regsiter now</button></div>
              </div>

                <div className=' '>
               <div className= 'box-1'><h1>5:30 Pm Evening Yoga</h1></div>
               <div classname= 'box-2'><p >A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project
               that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been
                causing the writers' block in the first place </p>     <button >Regsiter now</button></div>
               </div>
               
               <div className='mainconatiner '>
               <div className= 'box-1'><h1>8:30 Pm  Meditation</h1></div>
               <div classname= 'box-2'><p >A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project
               that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been
                causing the writers' block in the first place </p>     <button >Regsiter now</button></div>
               </div>

              
              
             
             </Modal>
          
             
        </div>
           
    );
  

}

export default Mdal