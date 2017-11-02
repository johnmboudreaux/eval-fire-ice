import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';
import React from 'react';


describe('App snapshot', () => {

  it('should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {
      houseReducer: [{name: 'something'}]
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<App
      store={store}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
