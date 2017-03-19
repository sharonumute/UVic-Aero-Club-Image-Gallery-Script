import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import cx from 'classnames';
import s from './ImageBrowser.css';

function mapStateToProps(state, props) {
  return {
	images: state.network.images,
	currentIndex: state.ImageQueue.currentIndex,
  }
}

class ImageBrowser extends Component {

  render() {  

    return (
      <div style={MainPage}>
        <div id="container">
          {this.props.images.map((img, i) => (
              <img key={i} alt={i} style={ImageGrid} src={this.props.images[i].url} />
            )).reverse()}
        </div>
	  </div>
    );
  }
}

export default connect(mapStateToProps)(ImageBrowser);
