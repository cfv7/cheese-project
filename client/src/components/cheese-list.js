import React from 'react'
import {connect} from 'react-redux'

export function CheeseList(props) {
  console.log(props.cheeses)
  const cheeses = props.cheeses.map((cheese, index)=> {
    return <li key={index}> {cheeses} </li>
  })
  return <ul> {cheeses} </ul>
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList)

