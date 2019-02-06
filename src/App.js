import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Home from './routes/Home';

class App extends React.Component {
  static propTypes = {
    // showLoader: PropTypes.func.isRequired,
    hideLoader: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.sayHi();
  }

  componentDidMount() {
    const { hideLoader } = this.props;
    hideLoader();
  }

  sayHi = () => {
    console.log(
      '%c Designed and developed by Elliot "Ratskin" Schep\t\n > Site: https://ratsk.in/home\t\t\t\t\t\t\n > Github: https://github.com/ratskin/home\t\t\t%c\n',
      'background: black; padding:5px; font-size: 10px; color: #ffffff',
      '',
    );
  }

  render() {
    return (
      <>
        <Route
          path="/"
          component={Home}
        />
      </>
    );
  }
}

export default App;
