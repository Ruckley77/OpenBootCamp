/* 
  Example of component with class type that uses life cycle methods.
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
  constructor(props) {
    super(props)
    console.log("CONSTRUCTOR: When the component is instanced or initiated")
  }

  componentWillMount() {
    console.log("WillMount: before the mount of the component")

  }

  componentDidMount() {
    console.log("DidMount: When it finishes Mounting it before rendering it")

  }

  componentWillReceiveProps(nextProps) {
    console.log("WillReceiveProps: If it is going to receive props")

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: It will receive TRUE or FALSE") //Controls if it should or not update.
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate: Before it updates")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: When it finishes updating")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Before it disappears/unmounts")
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

LifeCycleExample.propTypes = {

}

export default LifeCycleExample