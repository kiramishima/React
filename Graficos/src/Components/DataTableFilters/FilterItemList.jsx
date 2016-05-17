import React, {Component, PropTypes} from 'react'
import FilterItemRow from './FilterItemRow.jsx'

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
      this.props.SelectedItem(state)
    }
    render () {
      var styles = {
        listStyle: 'none',
        display: 'block',
        clear: 'both'
      }
      var rows = []
      this.props.Items.forEach((item) => {
        rows.push(<FilterItemRow key={item.id} Item={item} onClick={this.onClick} UUID={item.id} Label={item.name} />)
      })
      return (
          <div className='row'>
            <div className='col-md-12 col-sm-12'>
              <ul style={styles}>
              {rows}
              </ul>
            </div>
          </div>
      )
    }
}

FilterItemList.propTypes = {
  Items: PropTypes.array.isRequired,
  SelectedItem: PropTypes.func.isRequired
}
