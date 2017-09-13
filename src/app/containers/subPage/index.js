/**
 * Created by JESSICA on 2017/6/21.
 */
import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "antd";
import "./index.less";

export class SubPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      img: "https://orig00.deviantart.net/95a9/f/2012/363/6/4/pixel_duck_by_pixeldinosaur-d5pkk28.png"
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { img, visible } = this.state;
    return (
      <div className="sub-page">
        <img src={img} alt="" />
        <Button onClick={this.showModal}>Click to open a modal</Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SubPage);