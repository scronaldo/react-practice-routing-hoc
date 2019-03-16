import React, { PureComponent } from 'react';

class Life extends PureComponent {
    // 1 get default props
        
        
        
    // 2 set default state
    state = {
        title:'Life cycles'
    }

    // 3 before render
    componentWillMount(){
        console.log('3 before render');
    }

    componentWillUpdate(){
        console.log('BEFORE UPDATE')
    }

    componentDidUpdate(){
        console.log('AFTER UPDATE')
    }

    shouldComponentUpdate(nextProps,nextState){
        
        if(nextState.title === this.state.title){
            return false
        }
        console.log('should update');
        
        return true;
    }


    
    // 5 after render
    componentDidMount(){
        console.log('5 after render')
        document.querySelector('h3').style.color = 'red'
    }



    componentWillReceiveProps(){
        console.log('BEFORE RECEIVE PROPS')
    }

    componentWillUnmount(){
        console.log('UNMOUNT')
    }

    // 4 render jxs
    render(){
        console.log('RENDER')
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    ()=> this.setState({
                        title:'something else'
                    })}
                >CLICK TO CHANGE</div>

            </div>
        )
    }
}

export default Life;


//  LIFECYCLES

// Mounting
// constructor (props)	Before rendering #
// componentWillMount()	Don’t use this #
// render()	Render #
// componentDidMount()	After rendering (DOM available) #
// componentWillUnmount()	Before DOM removal #
// componentDidCatch()	Catch errors (16+) #
// Set initial the state on constructor(). Add DOM event handlers, timers (etc) on componentDidMount(), then remove them on componentWillUnmount().

// Updating
// componentDidUpdate (prevProps, prevState, snapshot)	Use setState() here, but remember to compare props
// shouldComponentUpdate (newProps, newState)	Skips render() if returns false
// render()	Render
// componentDidUpdate (prevProps, prevState)	Operate on the DOM here
