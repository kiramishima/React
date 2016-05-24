import React, {Component, PropTypes} from 'react'
import ItemStatus from './item_status.jsx'
import ItemInfo from './item_info.jsx'

class IndicadorItem extends Component {
    constructor (props) {
      super(props)
    }
    render () {
      var childs = null
      // console.log(this.props.Indicador)
      childs = this.props.Indicador.metas.map((meta, index) => {

        return meta.months.map((m, i) => { 
            // Obtenemos el color
            var rank = _.find(meta.ranks, {semaphore: parseInt(m.semaphore)})
            // console.log('Ranks', meta.ranks, 'Rank', rank)
            var color = rank.color || "black"
            return <ItemInfo Rank={rank} Status={m.status} Year={meta.year} Month={m.month} Color={color} Comment={m.comments} File={m.file}/>
        })
      })
      return (
        <div className='row'>
            <div className='col-md-12'>
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
                        <h4>{this.props.Indicador.name}</h4>
                        <div>{this.props.Indicador.description}</div>
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
  Indicador: PropTypes.any
}

export default IndicadorItem
