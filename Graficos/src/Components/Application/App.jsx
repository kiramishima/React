import React, {Component} from 'react'

export default class Application extends Component {
    _getData () {
      (async () => {
          var req = await fetch(this.props.Url)
          var data = await req.json()
          this.setState({data: data})
      })()
    }
    render () {
      return (
          <div>
            {this.props.Url}
          </div>
      )
    }
}

Application.propTypes = {
  Url: React.PropTypes.string.isRequired
}
