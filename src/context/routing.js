import React from 'react';

let RoutesContext;
const {Provider, Consumer} = (RoutesContext = React.createContext());

class RoutesProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: ['One', 'Four', 'Three', 'Two'],
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export {RoutesProvider, Consumer as RoutesConsumer, RoutesContext};
