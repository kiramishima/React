import React, {Component} from 'react'

export default class extends Component {
  constructor (props) {
    super(props)
  }
  _getHeaders () {
    console.log(this.props)
  }
  render () {
    return (
       <table className={"table table-bordered table-striped"}>
       </table>
    )
  }
}

React.propTypes = {}
