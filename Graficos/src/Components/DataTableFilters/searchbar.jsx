import React, {Component} from 'react'
import Pikaday from 'pikaday'
import moment from 'moment'

export default class SearchBar extends Component {
    constructor (props) {
      super(props)
      this.displayName = 'SearchBarComponent'
      this.state = {inputs: null, dtStart: null, dtEnd: null}
      this.changeHandler = this.changeHandler.bind(this)
      this.onClickBtnSearch = this.onClickBtnSearch.bind(this)
    }
    componentDidMount () {
      this._dtStart = new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'DD/MM/YYYY'
      })
      this._dtEnd = new Pikaday({
        field: document.getElementById('datepicker2'),
        format: 'DD/MM/YYYY'
      })
    }
    componentDidUpdate () {
      // :-D
    }
    changeHandler (e) {
      if (typeof this.props.onChange === 'function') {
        if (e.target.name === 'dtStart') {
          var dt = moment(this._dtStart.getDate()).add(7, 'days').format('MM/DD/YYYY')
          this._dtEnd.setDate(dt)
          this.setState({
            dtStart: document.querySelector('#datepicker').value,
            dtEnd: document.querySelector('#datepicker2').value
          })
        }
        if (e.target.name === 'dtEnd') {
          var dt2 = moment(this._dtEnd.getDate()).add(-7, 'days').format('MM/DD/YYYY')
          this._dtStart.setDate(dt2)
          this.setState({
            dtStart: document.querySelector('#datepicker').value,
            dtEnd: document.querySelector('#datepicker2').value
          })
        }

        var { dtStart: dtStart, dtEnd: dtEnd } = this.state
        if (dtStart !== null && dtEnd !== null) {
          this.props.onChange({dtStart: dtStart, dtEnd: dtEnd})
        }
        // his.props.onChange('dtStart', document.querySelector('#datepicker').value)
        // this.props.onChange('dtEnd', document.querySelector('#datepicker2').value)
      }
    }
    onClickBtnSearch (e) {
      if (typeof this.props.onSearch === 'function') {
        this.props.onSearch()
      }
    }
    render () {
      var styles = {
        'listStyle': 'none',
        'display': 'flex'
      }
      return (
          <div className={"searchBarContainer"} >
            <ul style={styles}>
                <li>
                <div className={"input-group input-group-sm"}>
                    <input id='datepicker' name='dtStart' onBlur={this.changeHandler} type='text' className={"form-control"} placeholder='DD/MM/YYYY' />
                    <span className={"input-group-btn"}>
                        <button className={"btn btn-default"} type='button' onClick={this.onClickBtn} >
                           <span className={"glyphicon glyphicon glyphicon-calendar"} aria-hidden='true'></span>
                        </button>
                    </span>
                </div>
                </li>
                <li>&nbsp;</li>
                <li>
                <div className={"input-group input-group-sm"}>
                    <input id='datepicker2' name='dtEnd' onBlur={this.changeHandler} type='text' className={"form-control"} placeholder='DD/MM/YYYY' />
                    <span className={"input-group-btn"}>
                        <button className={"btn btn-default"} type='button'>
                        <span className={"glyphicon glyphicon glyphicon-calendar"} aria-hidden='true'></span>
                        </button>
                    </span>
                </div>
                </li>
            </ul>
            <button type='button' onClick={this.onClickBtnSearch}>Buscar</button>
          </div>
      )
    }
}

SearchBar.propTypes = {
  onChange: React.PropTypes.func,
  onSearch: React.PropTypes.func
}
