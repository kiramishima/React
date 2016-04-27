import React, {Component, PropTypes} from 'react'

class ListFilter extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
        <ul>
           <input type='checkbox' ref='chkParent' />
           {
               this.props.SubFilters.map()
           }
        </ul>
    )
  }
}

ListFilter.propTypes = {
  ParentText: PropTypes.string,
  SubFilters: PropTypes.array
}

ListFilter.defaultProps = {
  SubFilters: []
}

export default ListFilter
