import './App.css';
import React from 'react'
// import DataOne from './DataFetching/DataOne';
import DataTwo from './DataFetching/DataTwo';
// import React, { useReducer } from 'react'
// import ComponentA from './Components/UseReducer/ComponentA'
// import ComponentB from './Components/UseReducer/ComponentB'
// import ComponentC from './Components/UseReducer/ComponentC'
// import CounterThree from './Components/UseReducer.js/CounterThree';
// import HoCounterEffectOne from './HooksComponents/HoCounterEffectOne';
// import PostList from './Components/PostList';
// import PostForm from './Components/PostForm';
// import ClassCounter from './HooksComponents/ClassCounter';
// import HooksCounter from './HooksComponents/HooksCounter';
// import HookCounterTwo from './HooksComponents/HookCounterTwo';
// import HookCounterThree from './HooksComponents/HookCounterThree';
// import HookCounterFour from './HooksComponents/HookCounterFour';
// import ClassCounterEffectOne from './HooksComponents/ClassCounterEffectOne';
// import HoMouse from './HooksComponents/HoMouse';
// import MouseContainer from './HooksComponents/MouseContainer';
// import IntervalCounter from './HooksComponents/IntervalCounter';
// import ComponentC from './HooksComponents/ComponentC';
// import DataFetching from './HooksComponents/DataFetching';
// import CounterOne from './Components/UseReducer.js/CounterOne';

// export const CountContext = React.createContext()



// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };


// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

function App() {

  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    
    
    // <CountContext.Provider 
    // value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      {/* <DataOne /> */}
      <DataTwo />
    
    {/* //   Count - {count}
    //   <ComponentA />
    //   <ComponentB />
    //   <ComponentC /> */}
      
      {/* <CounterThree /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={'Carmen'}>
        <ChannelContext.Provider value={'Techgirl'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HoMouse /> */}
      {/* <HoCounterEffectOne /> */}
      {/* <ClassCounterEffectOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo />
      <HooksCounter />
      <ClassCounter />
      <PostForm />
    <PostList /> */}
     
    {/* </CountContext.Provider> */}
    </div>
  );
}

export default App;
