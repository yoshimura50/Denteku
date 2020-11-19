import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Toolbar, Row, Col } from "react-onsenui";
import {notification} from 'onsenui';

import './style.css';

export default class App extends React.Component {
  constructor(props) {
  super(props);

  this.state = {count: 0, value: 0, op: ""};

  this.onClickNum = this.onClickNum.bind(this);
  this.cleraAll = this.cleraAll.bind(this);
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>電卓</div>
      </Toolbar>
    );
  }

  //数字ボタンがおされたとき
  onClickNum(value){
    var s = this.state;
    s.count = this.state.count * 10 + value;
    this.setState(s);
  }

  //ACが押されたとき
  cleraAll(){
    this.setState({count:0});
  }

  //割り算が押されたとき
  onClickDivide(){
    //÷ボタンが押されたら、this.state.opに"÷"をセットする
    var s = this.state;
    s.op = "÷";

    //countの値をvalueに退避、次の値が入力できるよう0にしておく
    s.value = this.state.count;
    s.count = 0;
    //state更新
    this.setState(s);
  }

  //掛け算が押されたとき
  onClickHang(){
    var s = this.state;
    s.op = "×";

    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }

  //引き算が押されたとき
  onClickPull(){
    var s = this.state;
    s.op = "-";

    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }

  //足し算が押されたとき
  onClickPlus(){
    var s = this.state;
    s.op = "+";

    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }

  //イコールが押されたとき
  onClickequal(){
    var s = this.state;

    if(s.op=="÷"){
      s.count=s.value/s.count;
    }
    if(s.op=="×"){
      s.count=s.value*s.count;
    }
    if(s.op=="-"){
      s.count=s.value-s.count;
    }
    if(s.op=="+"){
      s.count=s.value+s.count;
    }

    //s.opの値をクリア
    s.op = "";
    //変更した値を有効にする
    this.setState(s);
  }

  render() {
    return (
        <Page renderToolbar={this.renderToolbar}>
          <Row>
            <Col className="box">{this.state.count}</Col>
          </Row>
          <Row>
            <Col className="boxN" ></Col>
            <Col className="boxN"></Col>
            <Col className="boxN"></Col>
            <Col className="box"  onClick={() => this.cleraAll()}>AC</Col>
          </Row>
          <Row>
            <Col className="box" onClick={() => this.onClickNum(7)}>７</Col>
            <Col className="box" onClick={() => this.onClickNum(8)}>８</Col>
            <Col className="box" onClick={() => this.onClickNum(9)}>９</Col>
            <Col className="box" onClick={() => this.onClickDivide()}>÷</Col>
          </Row>
          <Row>
            <Col className="box" onClick={() => this.onClickNum(4)}>４</Col>
            <Col className="box" onClick={() => this.onClickNum(5)}>５</Col>
            <Col className="box" onClick={() => this.onClickNum(6)}>６</Col>
            <Col className="box" onClick={() => this.onClickHang()}>×</Col>
          </Row>
          <Row>
            <Col className="box"onClick={() => this.onClickNum(1)}>１</Col>
            <Col className="box" onClick={() => this.onClickNum(2)}>２</Col>
            <Col className="box" onClick={() => this.onClickNum(3)}>３</Col>
            <Col className="box" onClick={() => this.onClickPull()}>ー</Col>
          </Row>
          <Row>
            <Col className="boxN"></Col>
            <Col className="box" onClick={() => this.onClickNum(0)}>０</Col>
            <Col className="box" onClick={() => this.onClickequal()}>＝</Col>
            <Col className="box" onClick={() => this.onClickPlus()}>＋</Col>
          </Row>
      </Page>
    );        
  }
}