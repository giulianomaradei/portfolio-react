import React,{useEffect, useState} from 'react';
import './Modal.css';

function Modal(props){

    const [isOpen,setIsOpen] = useState(false);
    
    useEffect(() => {
        if(isOpen){
            document.addEventListener('keydown',keyPressHandler);
        }

        return () =>{
            document.removeEventListener('keydown',keyPressHandler);
        }
        // eslint-disable-next-line
    },[isOpen])

    function keyPressHandler(event){
        if(event.key === 'Escape'){
            modalOpenHandler();
        }
    }

    function modalOpenHandler(){
        setIsOpen(prev => !prev);
    }

    let content = (
        <div className='modal-container'>
            <div className='modal-title'>{props.title}</div>
            <button onClick={modalOpenHandler}><img className='modal-image' src={props.image} alt="modal-imae"></img></button>
        </div>
    );

    if(isOpen){
        content = (
            <React.Fragment>
                <button onClick={modalOpenHandler}>
                    <div className='modal-background'/>
                </button>
                <div className='modal-frame'>
                    <button onClick={modalOpenHandler} className="close-button">X</button>
                    
                </div>
            </React.Fragment>
            
        );
    }

    return(
        <React.Fragment>
            {content}
        </React.Fragment>
    )
}

export default Modal;