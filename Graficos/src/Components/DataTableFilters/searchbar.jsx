import React, {Component} from 'react'
import Pikaday from 'pikaday'
import moment from 'moment'

export default class SearchBar extends Component {
    constructor (props) {
      super(props)
      this.state = {inputs: null}
      this.onClickBtn = this.onClickBtn.bind(this)
      this.changeHandler = this.changeHandler.bind(this)
      this.onClickBtnSearch = this.onClickBtnSearch.bind(this)
    }
    componentDidMount () {
      var items = []
      var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'DD/MM/YYYY'
      })
      items.push(picker)
      var picker2 = new Pikaday({
        field: document.getElementById('datepicker2'),
        format: 'DD/MM/YYYY'
      })
      items.push(picker2)
      this.setState({inputs: items})
    }
    onClickBtn (el) {
      console.log(this, this.state, el)
    }
    changeHandler (e) {
      if (typeof this.props.onChange === 'function') {
        if (e.target.name === 'dtStart') {
          var dt = moment(this.state.inputs[0].getDate()).add(7, 'days').format('MM/DD/YYYY')
          this.state.inputs[1].setDate(dt)
        }
        if (e.target.name === 'dtEnd') {
          var dt2 = moment(this.state.inputs[1].getDate()).add(-7, 'days').format('MM/DD/YYYY')
          this.state.inputs[0].setDate(dt2)
        }
        this.props.onChange('dtStart', document.querySelector('#datepicker').value)
        this.props.onChange('dtEnd', document.querySelector('#datepicker2').value)
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
                        <button className={"btn btn-default"} type='button' onClick={this.onClickBtn(this)} >
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
