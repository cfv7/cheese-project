import React from 'react'
import {connect} from 'react-redux'

export function CheeseList(props) {
  let cheeses;
  console.log(props);
  if (typeof props.cheeses !== 'undefined') {
    cheeses = props.cheeses.map((cheese, index) => 
      <li key={index}>{cheese.cheeseType}</li>
    )
  }
  return (
    <div className='container'> 
      <ul>
        {cheeses}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList)

