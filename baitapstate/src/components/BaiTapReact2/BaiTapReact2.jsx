import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import style from "./stylecss/style.module.css"

export default class BaiTapReact2 extends Component {
  render() {
    return (
      <div className={`${style.backgroundimg} `}>
      <div className={style.overlay}></div>
          < Header />
          <Body />


  </div>
    )
  }
}
