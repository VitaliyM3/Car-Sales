import React from 'react';


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';

import { addItem, removeFeature } from './actions/actions';

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carProps} />
        <AddedFeatures car={props.carProps}  removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeaturesProps} buyItem={buyItem}/>
        <Total car={props.carProps} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carProps: state.car,
    additionalFeaturesProps: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
};

export default connect(mapStateToProps, { addItem, removeFeature })(App);

