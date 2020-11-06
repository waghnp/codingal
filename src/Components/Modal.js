import React,{useState} from 'react'
import './Modal.css'

const Modal =({show,handleClose,handleStop})=>{
    const [currentState,changeState]=useState({
        selected:''
    })
    const [currentOther,changeOther]=useState({other:''})

        const showHideClassName = show ? "modal display-block" : "modal display-none";
        const showHideOptions= currentState.selected ? "display-block":"display-none";
        const showTextArea=currentOther.other ? "display-block":"display-none";
 
        return (
            <div className={showHideClassName}>
              
                  <div className="modal-main">
                      <h1>Select a reason to end class</h1>
                      <div>
                        <h3><input type="radio" name="interupt" value="complete"/>Class Completed</h3> 
      
                        <h3><input type="radio" name="interupt" value="interupt" checked={currentState.selected === 'interupt'} onChange={(e) => changeState({ selected: e.target.value })}/>Class interrupted/aborted</h3> 
                        <div className={showHideOptions}>
                            <div className="options">
                                           
                                <h4> <input type="radio" name="opn" value="interupt"/>Student didn't show up for the class</h4> 
                                              
                                <h4><input type="radio" name="opn" value="interupt"/>Student didn't show any interest</h4>
                                                
                                <h4></h4><input type="radio" name="opn" value="interupt"/>Student got disconnected<h4/>
                                          
                                <h4></h4><input type="radio" name="opn" value="interupt"/>I got disconnected<h4/>
                                           
                                <h4><input type="radio" name="opn" value="other" checked={currentOther.other === 'other'} onChange={(e) => changeOther({ other: e.target.value })}/>Other reason</h4>
                                <div className={showTextArea}>
                                    <textarea rows="5" cols="50"></textarea>
                                </div>
                                
                            </div>
                        </div>
                              
                      </div>
                      <div>
                        <button className="btn end_class" onClick={handleStop}>End Class</button>
                        <button className="btn cancel" onClick={handleClose}>Cancel</button>
                      </div>
                  </div>
            </div>
          );
  };

  export default Modal;