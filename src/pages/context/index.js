    import React from 'react';
    import './index.css';
    
    const AppContext = React.createContext();
    
    function GreenBox () {
      return <div className='green-box'>
        <AppContext.Consumer>
          {(context) => context.number}
        </AppContext.Consumer>
      </div>
    }
    function BlueBox () {
      return <div className='blue-box'>
        <AppContext.Consumer>
          {(context) => <button onClick={context.inc}>Increase</button>}
        </AppContext.Consumer>
        <GreenBox/>
      </div>
    }
    class RedBox extends React.Component {
      render() {
        return <div className='red-box'>
          <AppContext.Consumer>
            {(context) => context.number}
          </AppContext.Consumer>
          <BlueBox/>
          </div>
      }
    }
    
    class Context extends React.Component {
      state = {
        number: 10,
        inc: () => {
          this.setState({number: this.state.number + 1});
        }
      }
      render() {
        return (
          <AppContext.Provider value = {this.state}>
            <RedBox/>
          </AppContext.Provider>
        )
      }
    }
    
    export default Context;