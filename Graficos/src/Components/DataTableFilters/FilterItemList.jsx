import React, {Component} from 'react'
import FilterItemRow from './FilterItemRow.jsx'

export default class FilterItemList extends Component {
    constructor (props) {
      super(props)
      this.state = {}
    }

    render () {
      var rows = []
      this.props.Items.forEach((item) => {
        rows.push(<FilterItemRow UUID={item.UUID} Label={item.Project} />)
      })
      return (
          <ul>
          {rows}
          </ul>
      )
    }
}

FilterItemList.propTypes = {
  UUID: React.PropTypes.string.isRequired,
  Label: React.PropTypes.string.isRequired,
  Items: React.PropTypes.array
}
