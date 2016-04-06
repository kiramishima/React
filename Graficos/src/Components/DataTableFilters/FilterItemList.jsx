import React, {Component} from 'react'
import FilterItemRow from './FilterItemRow.jsx'
import _ from 'lodash'

export default class FilterItemList extends Component {
    constructor (props) {
      super(props)
      this.state = {selectedItems: []}
      this.onClick = this.onClick.bind(this)
    }
    onClick (item, selected) {
      var state = this.state.selectedItems
      if (selected) {
        state.push(item)
        this.setState({selectedItems: state})
      } else {
        _.remove(state, item)
        this.setState({selectedItems: state})
      }
      this.props.onSelected(state)
    }
    componentDidUpdate () {
      // :-D
    }
    render () {
      var styles = {
        'listStyle': 'none'
      }
      var rows = []
      this.props.Items.forEach((item) => {
        rows.push(<FilterItemRow key={item.UUID} Item={item} onClick={this.onClick} UUID={item.UUID} Label={item.Project} />)
      })
      return (
          <ul style={styles}>
          {rows}
          </ul>
      )
    }
}

FilterItemList.propTypes = {
  Items: React.PropTypes.array.isRequired,
  onSelected: React.PropTypes.func.isRequired
}
