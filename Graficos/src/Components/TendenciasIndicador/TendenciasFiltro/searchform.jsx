import React, {Component} from 'react'

export default class SearchForm extends Component {
    constructor (props) {
      super(props)
      this.displayName = 'SearchFormComponent'
      this.state = {month: null, year: null}
      this.changeHandler = this.changeHandler.bind(this)
      this.onClickBtnSearch = this.onClickBtnSearch.bind(this)
      /* this.showDtEndWidget = this.showDtEndWidget.bind(this)
      this.showDtStartWidget = this.showDtStartWidget.bind(this)*/
    }
    componentDidMount () {
    }
    componentDidUpdate () {
      // :-D
    }
    changeHandler (e) {
      if (e.target.name === 'cmbMonth') {
        this.setState({month: e.target.value})
      }
      if (e.target.name === 'cmbYear') {
        this.setState({year: e.target.value})
      }
    }
    onClickBtnSearch (e) {
      if (typeof this.props.onSearch === 'function') {
        this.props.onSearch(this.state.month, this.state.year)
      }
    }
    render () {
      return (
          <div className='row'>
            <form className='form-horizontal'>
               <div className='form-group'>
                    <label htmlFor='cmbMonth' className='col-sm-2 control-label'>Mes</label>
                    <div className='col-sm-10'>
                       <select name='cmbMonth' onChange={this.changeHandler}>
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
                       <select name='cmbYear' onChange={this.changeHandler}>
                          <option></option>
                          {
                              [2013, 2014, 2015, 2016].map((year) => <option key={year} value={year}>{year}</option>)
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
  onSearch: React.PropTypes.func
}
