import React, {Component, PropTypes} from 'react'

class ItemInfo extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col-xs-2 col-sm-2'>
           {`${this.props.Month} ${this.props.Year}`}
        </div>
        <div className='col-xs-2 col-sm-2'>
            <button>U</button>
        </div>
        <div className='col-xs-1 col-sm-1'>
            <button>X</button>
        </div>
        <div className='col-xs-1 col-sm-1'>
            <button>Y</button>
        </div>
    </div>
    )
  }
}

ItemInfo.propTypes = {
  Year: PropTypes.any,
  Month: PropTypes.any,
  Time: PropTypes.any
}

export default ItemInfo
