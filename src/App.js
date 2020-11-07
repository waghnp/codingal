import React,{Component} from 'react'
import './App.css';
import Modal from './Components/Modal'

class App extends Component{
  state = { 
    minutes: 10,
    change:true,
    seconds: 0,
    show: false,
    stop:''
   }

  showModal = () => {
    this.setState({ show: true })
  };

  hideModal = () => {
    this.setState({ show: false })
  }
  handleStop=()=>{
    this.setState({stop:'true',show:false})
    
  }
 
  componentDidMount() {
    this.myInterval = setInterval(() => {
        const { seconds, minutes} = this.state
       
        if (seconds > 0) {
            this.setState(({ seconds }) => ({
                seconds: seconds - 1
            }))
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(this.myInterval)
            } else {
                this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }
        } 
    }, 1000)
}

componentDidUpdate(){
  if(this.state.stop === 'true'){
    clearInterval(this.myInterval)
  }
}

componentWillUnmount() {
    clearInterval(this.myInterval)
}

  render(){
    const toggler= this.state.change?"container":"change";
    const showMenu=this.state.change?"hideMenu":"showMenu";
    return (
      <div className="App">
        <nav className="navbar">
          <div className="navbar_left">
            <div className="logo">
              <img width={120} src="https://cdn3.f-cdn.com/contestentries/1476233/31058983/5c769526b8dff_thumb900.jpg" alt="Logo"/>
            </div>
            <h3>Trial Lesson [Grade 1-3]</h3>
          </div> 
          <Modal show={this.state.show} handleClose={this.hideModal} handleStop={this.handleStop}/>
          <div className="navbar_right">
            <div>
                { this.state.minutes === 0 && this.state.seconds === 0
                    ? <h1>Busted!</h1>
                    : <h1>Time Remaining: {this.state.minutes}:{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}</h1>
                }
            </div>
           <button className="end_class_btn" type="button" onClick={this.showModal}>End Class</button>
          </div>
        </nav>
        <div  className="small-navbar">
          <nav>
            <div className="mobile_view">
                <div className="navbar_left">
                  <div className="logo">
                    <img width={100} src="https://cdn3.f-cdn.com/contestentries/1476233/31058983/5c769526b8dff_thumb900.jpg" alt="Logo"/>
                  </div>
                  <h1>Codingal</h1>
                </div>
                <div className="navbar_right"> 
                    <div className={toggler} onClick={()=>this.setState({change:!this.state.change})}>
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </div>
            </div>
          </nav>
          <Modal show={this.state.show} handleClose={this.hideModal} handleStop={this.handleStop} smallnav='true'/>
          <div className={showMenu}>
                  <div className="timer">
                      { this.state.minutes === 0 && this.state.seconds === 0
                          ? <h3>Busted!</h3>
                          : <h3>Time Remaining: {this.state.minutes}:{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}</h3>
                      }
                  </div>
                <button className="end_class_btn" type="button" onClick={this.showModal}>End Class</button>
            </div>
        </div>
       
      </div>
    );
  }
}

export default App;
