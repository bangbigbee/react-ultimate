//import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Header from './components/Header/Header';

// class App extends React.Component {

//   render() {
//     return (
//       <div className='app-container'>
//         Hello World from BigBee Media!
//         <MyComponent></MyComponent>
//       </div>
//     )
//   }
// }

const App = () => {

  return (
    <div className="App">
      <Header/>
    </div>
  );
}
export default App;
