import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { houseAction } from '../../actions';
import { houseFetch } from './fetchCalls';
import Card from '../Card';

class App extends Component {

  componentDidMount() {
    let fetcher = async () => {
      const fetchHouses = await houseFetch();
      this.props.houseAction(fetchHouses);
    };
    fetcher();
  }

  productMapping(house, index) {
    return (
      <Card
        name={house.name}
        founded={house.founded}
        seats={house.seats}
        titles={house.titles}
        coatOfArms={house.coatOfArms}
        ancestralWeapons={house.ancestralWeapons}
        words={house.words}
        key={index}
      />
    );
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          {this.productMapping()}
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
