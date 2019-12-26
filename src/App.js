import React from 'react';
import './App.css';
import List from'./List.jsx';

function App() {
  return (    
    <div>
      <h1>123</h1>
      <List liList={[
        {'top':'0', 'left':'0', 'position': 'rotate(45deg)'}, 
        {'top':'30px', 'left':'40px', 'position': 'rotate(-45deg)'}, 
        {'top':'0px', 'left':'80px', 'position': 'rotate(180deg)'},
        {'top':'70px', 'left':'80px', 'position': 'rotate(60deg)'},
        {'top':'110px', 'left':'200px', 'position': 'rotate(-60deg)'},
        {'top':'150px', 'left':'130px', 'position': 'rotate(-30deg)'},
      ]}/>
      {/* <List liList={['one', 'two', 'three', 'four', 'five']}/>
      <List liList={['1', '2', '3', '4', '5']}/>
      <br/>
      <List liList={['God', 'jul']}/>
      <List liList={['och','Goot', 'nytt','år']}/> */}
    </div>
  );
}

export default App;
