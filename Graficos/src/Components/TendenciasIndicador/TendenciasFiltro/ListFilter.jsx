import React, {Component, PropTypes} from 'react'
import ItemListFilter from './ItemListFilter.jsx'

class ListFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {hasChilds: false}
  }
  componentDidMount () {
    this.setState({hasChilds: this.props.SubFilters.length > 0 ? true : false})
  }
  render () {
    var childs = []
    if (this.state.hasChilds) {
       childs = this.props.SubFilters.map((item) => <ItemListFilter Value={item} Text={item}/>)
    }
    return (
        <div>
           <label><input type='radio' name='parent_checkbox' onChange={this.changeHandler}/> {this.props.ParentText}</label>
           <ul>
           {
               this.props.SubFilters.map()
           }
           </ul>
        </div>
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
