import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { houseAction } from '../../actions';
import { houseFetch } from './fetchCalls';

class App extends Component {

  componentDidMount() {
    let fetcher = async () => {
      const fetchHouses = await houseFetch();
      this.props.houseAction(fetchHouses);
    };
    fetcher();
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.houseAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  houseReducer: PropTypes.func,
  houseAction: PropTypes.func
};

const mapStateToProps = (store) => ({
  houses: store.houses
});

const mapDispatchToProps = dispatch => ({
  houseAction: (houses) => dispatch(houseAction(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
