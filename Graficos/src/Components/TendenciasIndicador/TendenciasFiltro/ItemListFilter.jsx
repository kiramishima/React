import React, {Component, PropTypes} from 'react'

class ItemListFilter extends Component {
  constructor (props) {
    super(props)
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler (e) {
    if (typeof this.props.onFilter === 'function') {
      // TODO Parent Handler
      this.props.onFilter(e.target.value)
    }
  }
  render () {
    return (
        <li className='list-group-item'>
           <label>
              <input type='radio' name='filterOption' value={this.props.Value} onChange={this.changeHandler} /> {this.props.Text}
           </label>
        </li>
    )
  }
}

ItemListFilter.propTypes = {
  Value: PropTypes.string,
  Text: PropTypes.string,
  onFilter: PropTypes.func
}

ItemListFilter.defaultProps = {
  SubFilters: []
}

export default ItemListFilter
