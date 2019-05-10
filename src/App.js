import React from 'react';
import Container from './Container';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Container header="Example header" direction="horizontal">
          <div>This is an example!</div>
          <div>This is an example!</div>
          <div>This is an example!</div>
          <div>This is an example!</div>
          <div>This is an example!</div>
          <div>This is an example!</div>
          <div>This is an example!</div>
        </Container>
        <Container header="Example header" textPosition="center">
          <img alt="turtle" src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"/>
          <img alt="turtle" src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"/>
          <img alt="turtle" src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"/>
          <img alt="turtle" src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"/>
        </Container>
      </div>
    );
  }
}

export default App;
