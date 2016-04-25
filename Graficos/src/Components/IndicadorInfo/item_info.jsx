import React, {Component, PropTypes} from 'react'
import ItemSVG from './item_svg.jsx'

class ItemInfo extends Component {
  componentDidMount () {
    this._svg = new ItemSVG({
      target: this.refs.itemSvg,
      color: this.props.Status,
      diameter: 30,
      text: this.props.Time
    })
  }
  render () {
    return (
      <div className='row'>
        <div className='col-xs-4 col-sm-4'>
           {`${this.props.Month} ${this.props.Year}`}
        </div>
        <div className='col-xs-5 col-sm-5' style={{textAlign: 'center'}}>
            <svg ref='itemSvg'></svg>
        </div>
        <div className='col-xs-1 col-sm-1'>
            <button className='btn btn-info'><i className='glyphicon glyphicon-list-alt'></i></button>
        </div>
        <div className='col-xs-1 col-sm-1'>
            <button className='btn btn-info'><i className='glyphicon glyphicon-save-file'></i></button>
        </div>
    </div>
    )
  }
}

ItemInfo.propTypes = {
  Year: PropTypes.any,
  Month: PropTypes.any,
  Time: PropTypes.any,
  Status: PropTypes.string
}

export default ItemInfo
