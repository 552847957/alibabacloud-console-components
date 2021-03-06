import React from 'react'
import { Search, Menu, Button } from '@alicloud/console-components'

const menuData = [
  {
    label: 'Option 1',
    value: 'Option 1 Value',
    index: '1'
  }, {
    label: 'Option 2',
    value: 'Option 2 Value',
    index: '2'
  }, {
    label: 'Option 3',
    value: 'Option 3 Value',
    index: '3'
  }, {
    label: 'Option 4',
    value: 'Option 4 Value',
    index: '4'
  }
]

export default class Demo4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      value: '111222',
      menuData: menuData
    }
  }

  renderMenu() {
    const menuData = this.state.menuData;

    return (<Menu onSelect={this.onSelect.bind(this)} className="diy-menu" selectMode="single">
      <Menu.Group label="Recent" key="xxx">
        {menuData.map((item) => {
          return (<Menu.Item key={item.value}>
            {item.label}
            <Button onClick={this.onDelete.bind(this, item.index)} text style={{float: 'right'}}>Delete</Button>
          </Menu.Item>)
        })}
      </Menu.Group>
    </Menu>)
  }

  onSearch(value) {
    console.log(value)
  }

  onChange(value) {
    this.setState({
      visible: value.length > 0,
      value: value
    })
  }

  onSelect(selectedKeys) {
    this.setState({
      visible: false,
      value: selectedKeys[0]
    })
  }

  onDelete(index, e) {
    e.stopPropagation()

    const menuData = this.state.menuData

    const menuDataNew = []

    menuData.forEach(function (item) {
      if (item.index !== index) {
        menuDataNew.push(item)
      }
    })

    this.setState({
      menuData: menuDataNew
    })
  }

  onFocus() {
    this.setState({
      visible: true
    });
  }

  render() {
    const {visible, value} = this.state;

    return (<div style={{width: 700}}>
      <Search
        popupContent={this.renderMenu()}
        value={value}
        onSearch={this.onSearch.bind(this)}
        onChange={this.onChange.bind(this)}
        onFocus={this.onFocus.bind(this)}
      />
    </div>)
  }
}