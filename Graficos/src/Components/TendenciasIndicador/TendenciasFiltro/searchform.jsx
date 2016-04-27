import React, {Component} from 'react'

export default class SearchForm extends Component {
    constructor (props) {
      super(props)
      this.displayName = 'SearchFormComponent'
      this.state = {inputs: null, dtStart: null, dtEnd: null}
      this.changeHandler = this.changeHandler.bind(this)
      /* this.onClickBtnSearch = this.onClickBtnSearch.bind(this)
      this.showDtEndWidget = this.showDtEndWidget.bind(this)
      this.showDtStartWidget = this.showDtStartWidget.bind(this)*/
    }
    componentDidMount () {
    }
    componentDidUpdate () {
      // :-D
    }
    changeHandler (e) {
      console.log(e.target.value)
      if (typeof this.props.onChange === 'function') {
      }
    }
    onClickBtnSearch (e) {
      if (typeof this.props.onSearch === 'function') {
        this.props.onSearch()
      }
    }
    render () {
      return (
          <div className='row'>
            <form className='form-horizontal'>
               <div className='form-group'>
                    <label htmlFor='cmbMonth' className='col-sm-2 control-label'>Mes</label>
                    <div className='col-sm-10'>
                       <select id='cmbMonth' onChange={this.changeHandler}>
                          <option></option>
                          <option value='1'>Enero</option>
                          <option value='2'>Febrero</option>
                          <option value='3'>Marzo</option>
                          <option value='4'>Abril</option>
                          <option value='5'>Mayo</option>
                          <option value='6'>Junio</option>
                          <option value='7'>Julio</option>
                          <option value='8'>Agosto</option>
                          <option value='9'>Septiembre</option>
                          <option value='10'>Octubre</option>
                          <option value='11'>Noviembre</option>
                          <option value='12'>Diciembre</option>
                       </select>
                    </div>
               </div>
               <div className='form-group'>
                    <label htmlFor='cmbYear' className='col-sm-2 control-label'>Mes</label>
                    <div className='col-sm-10'>
                       <select id='cmbYear' onChange={this.changeHandler}>
                          <option></option>
                          {
                              [2013, 2014, 2015, 2016].map((year) => <option value={year}>{year}</option>)
                          }
                       </select>
                    </div>
               </div>
               <div className='form-group'>
                  <div className='col-sm-offset-10 col-sm-2'>
                    <button className='btn btn-default' type='button' onClick={this.onClickBtnSearch} style={{float: 'right'}}>Buscar</button>
                  </div>
               </div>
            </form>
          </div>
      )
    }
}

SearchForm.propTypes = {
  onChange: React.PropTypes.func,
  onSearch: React.PropTypes.func
}
