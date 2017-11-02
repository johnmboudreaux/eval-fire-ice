import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import { houseFetch } from './fetchCalls';
import Card from '../Card';

class App extends Component {

  componentDidMount() {
    let fetcher = async () => {
      const fetchHouses = await houseFetch();
      this.props.actions.houseAction(fetchHouses);
    };
    fetcher();
  }

  productMapping(houses, index) {
    console.log(houses);
    return (
      <Card
        name={houses.name}
        founded={houses.founded}
        seats={houses.seats}
        titles={houses.titles}
        coatOfArms={houses.coatOfArms}
        ancestralWeapons={houses.ancestralWeapons}
        words={houses.words}
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
          {this.props.houseReducer.map(this.productMapping)}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  houseReducer: PropTypes.func,
  actions: PropTypes.object
};

const mapStateToProps = ({houseReducer}) => ({houseReducer});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
