import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  
  return (

    <div className="content">
      <h6>Added features:</h6>

      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => {
            {console.log(item,"item")}
            
            return(
            <AddedFeature feature={item} removeFeature = {props.removeFeature} key = {item.id}/>
          )})}
        </ol>
      ) : (
        
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;