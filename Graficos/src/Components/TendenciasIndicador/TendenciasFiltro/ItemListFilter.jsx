import React, {Component, PropTypes} from 'react'

class ItemListFilter extends Component {
  constructor (props) {
    super(props)
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler (e) {
    console.log(e.target.value)  
    if (typeof this.props.OnFilter === 'function') {
       // TODO Parent Handler
    }
  }
  render () {
    return (
        <li>
           <label><input type='radio' name='filterOption' value={this.props.Value} onChange={this.changeHandler}/> {this.props.Text}</label>
        </li>
    )
  }
}

ItemListFilter.propTypes = {
  Value: PropTypes.string,
  Text: PropTypes.string,
  OnFilter: PropTypes.func
}

ItemListFilter.defaultProps = {
  SubFilters: []
}

export default ItemListFilter
