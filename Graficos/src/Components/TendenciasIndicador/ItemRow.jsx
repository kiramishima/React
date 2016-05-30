import React, {Component, PropTypes} from 'react'
import ItemSVG from '../IndicadorInfo/item_svg.jsx'

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this._getStyle = this._getStyle.bind(this)
  }
  _getStyle () {
    var displayed = this.props.Hidden ? 'none' : ''
    return {
      display: displayed
    }
  }
  componentDidMount () {
    if (this.props.Type === 'SVG') {
      this._svg = new ItemSVG({
        target: this.refs.item_svg,
        color: `${this.props.Color}`,
        diameter: 30,
        text: ''
      })
    }
  }
  render () {
    if (this.props.Type === 'SVG') {
      return (
        <td><svg ref='item_svg'></svg></td>
      )
    } else {
      return (
          <td style={this._getStyle()}>{this.props.Text}</td>
      )
    }
  }
}

Item.propTypes = {
  Text: PropTypes.string,
  Color: PropTypes.string,
  Hidden: PropTypes.any,
  Type: PropTypes.string
}

Item.defaultProps = {
  Type: 'Text'
}

class ItemRow extends Component {
  constructor (props) {
    super(props)
    this._createElements = this._createElements.bind(this)
  }
  _createElements () {
    return this.props.DataDefinition.map((item, index) => {
      // console.log('index', item)
      var text = this.props.ItemData[item.data]
      if (item.type === 'svg') {
        var color = this.props.ItemData['color']
        return <Item key={`Item_${item.Id}_${item.data}`} Text={text} Color={color} Hidden={item.hidden} Type='SVG'/>
      } else {
        return <Item key={`Item_${item.Id}_${item.data}`} Text={text} Hidden={item.hidden}/>
      }
    })
  }
  render () {
    return (
        <tr>
        {this._createElements()}
        </tr>
    )
  }
}

ItemRow.propTypes = {
  ItemData: PropTypes.object.isRequired,
  DataDefinition: PropTypes.array.isRequired
}

export default ItemRow
