import React, {Component, PropTypes} from 'react'
import ItemStatus from './item_status.jsx'
import ItemInfo from './item_info.jsx'

class IndicadorItem extends Component {
    constructor (props) {
      super(props)
    }
    render () {
      var childs = null
      childs = this.props.ItemData.activities.map((activitie, indx) => {
        return [<ItemStatus key={activitie.year} Data={activitie} />, activitie.months.map((m, i) => <ItemInfo key={`${activitie.year} ${m.month}`} Status={m.status} Year={activitie.year} Month={m.month} Time={m.time} />)]
      })
      return (
        <div className='row'>
            <div className='col-md-12'>
                <h4>{this.props.ItemData.indicador}</h4>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div><strong>Indicador</strong></div>
                    </div>
                    <div className='col-sm-2'>
                        <div><strong>Mes</strong></div>
                    </div>
                    <div className='col-sm-2'>
                        <div><strong>Cumplimiento</strong></div>
                    </div>
                    <div className='col-sm-1'>
                        <div><strong>&nbsp;</strong></div>
                    </div>
                    <div className='col-sm-1'>
                        <div><strong>&nbsp;</strong></div>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-xs-6 col-sm-6'>
                        <div>{this.props.ItemData.indicador_desc}</div>
                    </div>
                    <div className='col-xs-6 col-sm-6'>
                        {childs}
                    </div>
                </div>
            </div>
        </div>
      )
    }
}

IndicadorItem.propTypes = {
  ItemData: PropTypes.any
}

export default IndicadorItem
