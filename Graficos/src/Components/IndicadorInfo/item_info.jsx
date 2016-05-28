import React, {Component, PropTypes} from 'react'
import ItemSVG from './item_svg.jsx'
import noty from 'noty'

class ItemInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.showRankDetails = this.showRankDetails.bind(this)
  }
  componentDidMount () {
    this._svg = new ItemSVG({
      target: this.refs.itemSvg,
      color: this.props.Color,
      diameter: 30,
      text: this.props.Value,
      fnDetails: this.showRankDetails
    })
  }
  showRankDetails () {
    var rank = this.props.Rank
    var type = rank.semaphore == 1 ? 'success' : rank.semaphore == 2 ? 'warning' : rank.semaphore == 3 ? 'error' : 'default'
    noty({
      layout: 'topRight',
      type: type,
      text: this.props.Rank.description,
      animation: {
          open: {height: 'toggle'}, // jQuery animate function property object
          close: {height: 'toggle'}, // jQuery animate function property object
          easing: 'swing', // easing
          speed: 500 // opening & closing animation speed
      }
  })
  }
  downloadFile () {
    window.open(this.props.File, '_blank')
  }
  showComments () {
    jQuery(this.refs.myModal).modal('toggle')
  }
  render () {
    return (
      <div className='row zebry'>
        <div className='col-xs-4 col-sm-4'>
           {`${this.props.Month} ${this.props.Year}`}
        </div>
        <div className='col-xs-5 col-sm-5' style={{paddingLeft: '48px'}}>
            <svg ref='itemSvg'></svg>
        </div>
        <div className='col-xs-1 col-sm-1'>
            <button onClick={this.showComments.bind(this)} className={'btn btn-default btn-xs ' + (this.props.Comment == '' ? 'hide_comment': '') }><i className='glyphicon glyphicon-list-alt'></i></button>
            <div className="modal fade" ref="myModal" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Descripcion</h4>
                  </div>
                  <div className="modal-body">
                    {this.props.Comment}
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className='col-xs-1 col-sm-1'>
            <button onClick={this.downloadFile.bind(this)} className={'btn btn-default btn-xs ' + (this.props.File == '' ? 'hide_file': '') }><i className='glyphicon glyphicon-save-file'></i></button>
        </div>
    </div>
    )
  }
}

ItemInfo.propTypes = {
  Rank: PropTypes.any,
  Year: PropTypes.number,
  Month: PropTypes.string,
  Value: PropTypes.string,
  Semaphore: PropTypes.string,
  Comment: PropTypes.string,
  File: PropTypes.string,
  Color: PropTypes.string
}

export default ItemInfo
