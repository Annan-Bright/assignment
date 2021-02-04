import React from "react";

class WelcomeComponent extends React.Component {
  render() {
    return <h1>{this.props.name} is awesome, react works!!!! </h1>;
  }
}

const App = () => {
  return <WelcomeComponent name="Codetrain" />;
};

export default App;
