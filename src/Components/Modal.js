import React,{useState} from 'react'
import './Modal.css'

const Modal =({show,handleClose,handleStop,smallnav})=>{
    const [currentState,changeState]=useState({
        selected:''
    })
    const [currentOther,changeOther]=useState({other:''})

  const handleSubmit=(event)=> {
        event.preventDefault();
      }
        const showHideClassName = show ? "modal display-block" : "modal display-none";
        const showHideOptions= currentState.selected ? "display-block":"display-none";
        const showTextArea=currentOther.other ? "display-block":"display-none";
 
        return (
            <div className={showHideClassName}>
              
                  <form className="modal-main" onSubmit={handleSubmit}>
                      <h1>Select a reason to end class</h1>
                      <div>
                        <h3><input type="radio" name="interupt" value="complete" required/>Class Completed</h3> 
      
                        <h3><input type="radio" name="interupt" value="interupt" required checked={currentState.selected === 'interupt'} onChange={(e) => changeState({ selected: e.target.value })}/>Class interrupted/aborted</h3> 
                        <div className={showHideOptions}>
                            <div className="options">
                                           
                                <h4> <input type="radio" name="opn" value="interupt"/>Student didn't show up for the class</h4> 
                                              
                                <h4><input type="radio" name="opn" value="interupt"/>Student didn't show any interest</h4>
                                                
                                <h4></h4><input type="radio" name="opn" value="interupt"/>Student got disconnected<h4/>
                                          
                                <h4></h4><input type="radio" name="opn" value="interupt"/>I got disconnected<h4/>
                                           
                                <h4><input type="radio" name="opn" value="other" checked={currentOther.other === 'other'} onChange={(e) => changeOther({ other: e.target.value })}/>Other reason</h4>
                                <div className={showTextArea}>
                                    <textarea rows={smallnav==='true'?"4":"5"} cols={smallnav==='true'?"40":"50"}></textarea>
                                </div>
                                
                            </div>
                        </div>
                              
                      </div>
                      <div>
                        <button className="btn end_class" onClick={handleStop} type="submit" >End Class</button>
                        <button className="btn cancel" onClick={handleClose} type="button">Cancel</button>
                      </div>
                    </form>
            </div>
          );
  };

  export default Modal;