import React, {Component, PropTypes} from 'react'

className IndicadorInfo extends Component {
    constructor (props) {
      super(props)
    }
    render () {
      return (
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
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id quo quam dolorum, necessitatibus laudantium, et temporibus nihil facere officiis labore fugit quisquam ipsa, repellat amet. Vitae harum soluta ab.
                        </div>
                    </div>
                    <div className='col-xs-6 col-sm-6'>
                        <div style='display: flex;font-weight: bold;width: 100%;'>
                            <div style='width: 30%;background: green;'>&nbsp;</div>
                            <div style='background: red; width: 20%;'>&nbsp;</div>
                            <div style='background: yellow; width: 50%;'>&nbsp;</div>
                        </div>
                        <div className='row'>
                            <div className='col-xs-2 col-sm-2'>
                                Octubre 2015
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
                    </div>
                </div>
            </div>
      )
    }
}

IndicadorInfo.propTypes = {
  Data: PropTypes.any
}

export default IndicadorInfo
