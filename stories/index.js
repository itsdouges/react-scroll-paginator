// @flow

import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import ReactScrollPaginator from '../src/ReactScrollPaginator';
import _ from 'lodash';
import './styles.less';

const fakeResponse = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

const makeArr = (i, pageNum) => _.fill(Array(i), `Page: ${pageNum}`);

const createFakeApi = () => {
  const stub = (() => {
    let i = 0;

    return () => {
      i = i + 1;

      if (i === 1) {
        return fakeResponse({
          rows: makeArr(10, 1),
          limit: 10,
          offset: 0,
          count: 30,
        });
      }

      if (i === 2) {
        return fakeResponse({
          rows: makeArr(10, 2),
          limit: 10,
          offset: 10,
          count: 30,
        });
      }

      if (i === 3) {
        return fakeResponse({
          rows: makeArr(10, 3),
          limit: 10,
          offset: 20,
          count: 30,
        });
      }

      return Promise.resolve({
        rows: [],
        limit: 10,
        offset: 30,
        count: 30,
      });
    };
  })();

  return stub;
};

class View extends Component {
  state: {
    rows: Array<number>,
    count: number,
    limit: number,
    offset: number,
  } = {
    rows: [],
  };

  props: {
    infiniteScroll?: boolean,
  };

  fakeApi = createFakeApi();

  action = () => {
    return this.fakeApi().then((data) => {
      this.setState((state) => ({
        ...data,
        rows: state.rows.concat(data.rows),
      }));
    });
  };

  renderChild (row: number, index: number) {
    return (
      <li key={index} className="View_child">
        {row}
      </li>
    );
  }

  render () {
    return (
      <div>
        <ReactScrollPaginator
          {...this.props}
          action={this.action}
          rows={this.state.rows}
          count={this.state.count}
          limit={10}
          initialOffset={0}
          progressComponent={<div className="View_progress">LOADING...</div>}
        >
          {this.renderChild}
        </ReactScrollPaginator>
      </div>
    );
  }
}

storiesOf('Component')
  .add('infiniteScroll=false', () => <View key="noinfinite" />)
  .add('infiniteScroll=true', () => <View infiniteScroll key="infinite" />);
