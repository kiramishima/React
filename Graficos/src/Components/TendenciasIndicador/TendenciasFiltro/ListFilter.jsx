import React, {Component, PropTypes} from 'react'
import ItemListFilter from './ItemListFilter.jsx'

class ListFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {hasChilds: false, currentChild: 'Todos'}
    this.changeHandler = this.changeHandler.bind(this)
    this.filterChild = this.filterChild.bind(this)
  }
  componentDidMount () {
    var hasChilds = this.props.SubFilters.length > 0
    this.setState({hasChilds: hasChilds})
  }
  filterChild (childValue) {
    if (typeof this.props.onFilter === 'function') {
      this.setState({currentChild: childValue})
      this.props.onFilter(this.props.ParentText, childValue)
    }
  }
  changeHandler (e) {
    if (typeof this.props.onFilter === 'function') {
      var list = document.querySelectorAll('[name="filterOption"]')
      if (!this.state.hasChilds) {
        _.each(list, function(item){
          item.disabled = true
        })
        this.props.onFilter(this.props.ParentText, null)
      } else {
        _.each(list, function(item){
          item.disabled = false
        })
        this.props.onFilter(this.props.ParentText, this.state.currentChild)
      }
    }
  }
  render () {
    var childs = []
    if (this.state.hasChilds) {
      childs = this.props.SubFilters.map((item) => <ItemListFilter key={item} Value={item} Text={item} onFilter={this.filterChild}/>)
    }
    return (
        <div>
           <label><input type='radio' value={this.props.ParentText} name='parent_checkbox' onChange={this.changeHandler}/> {this.props.ParentText}</label>
           <ul className='list-group'>
           {childs}
           </ul>
        </div>
    )
  }
}

ListFilter.propTypes = {
  ParentText: PropTypes.string,
  SubFilters: PropTypes.array,
  onFilter: PropTypes.func
}

ListFilter.defaultProps = {
  SubFilters: [],
  Checked: ''
}

export default ListFilter
