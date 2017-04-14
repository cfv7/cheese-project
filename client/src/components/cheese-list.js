import React from 'react'
import {connect} from 'react-redux'

export function CheeseList(props) {
  console.log(props.cheeses[0])
  const cheeses = props.cheeses.map((cheese, index)=> 
    <li key={index}>{cheese[0]}</li>
  )
  console.log(cheeses)
  return (<ul> {cheeses} </ul>);
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList)

