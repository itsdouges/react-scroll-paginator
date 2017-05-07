# [react-scroll-paginator](https://github.com/madou/react-scroll-paginator)

[![NPM version](http://img.shields.io/npm/v/react-scroll-paginator.svg?style=flat-square)](https://www.npmjs.com/package/react-scroll-paginator)
[![NPM downloads](http://img.shields.io/npm/dm/react-scroll-paginator.svg?style=flat-square)](https://www.npmjs.com/package/react-scroll-paginator)
[![Build Status](http://img.shields.io/travis/madou/react-scroll-paginator/master.svg?style=flat-square)](https://travis-ci.org/madou/react-scroll-paginator)
[![codecov](https://codecov.io/gh/madou/react-scroll-paginator/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/react-scroll-paginator)
[![Dependency Status](http://img.shields.io/david/madou/react-scroll-paginator.svg?style=flat-square)](https://david-dm.org/madou/react-scroll-paginator)

A lightweight scroll based paginator for ReactJS.

<p align="center">
  <img src="https://github.com/madou/react-scroll-paginator/blob/master/example.gif?raw=true" style="margin:0 auto" />
</p>

## Installation

```sh
npm install react-scroll-paginator
```

## Usage

```javascript
import ReactStickyHeader from 'react-scroll-paginator';

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
```

| prop | type | required |
|-|-|-|
| children | (item: T, index: number) => Children | yes |
| limit | number | yes |
| count | number | yes |
| rows | Array<T> | yes |
| action | (limit: number, offset: number) => Promise<*> | yes |
| initialOffset | number | no |
| className | string | no |
| progressComponent | Children | no |
| infiniteScroll | boolean | no |
| renderContainer | (props: ContainerProps) => Children | no |
| renderButton | (props: ButtonProps) => Children | no |

### Props

#### children: (item: T, index: number) => Children

Takes a function that returns some jsx.

#### limit: number

How big each page should be.

#### count: number

Total number of rows to expect for all pages combined.

#### rows: Array<T>

Array of rows that can be of any type.

#### action: (limit: number, offset: number) => Promise<*>

Action that the paginator will call to load more data. Expects the function to return a promise that will eventually resolve.

#### initialOffset: number

If you want to start from a position other than 0, set this.

#### className: string

#### progressComponent: Children

Component to render when the paginator is loading.

#### infiniteScroll: boolean

Set this to true if you want pagination to start immediately when the user scrolls into view. Don't set this if you want the user to interact with a "LOAD MORE" button to begin pagination.

#### renderContainer: (props: ContainerProps) => Children

Set this to override the default `ul` container with something else. It is passed `children` in props.

#### renderButton: (props: ButtonProps) => Children

Set this to override the default load more `button`. It is passed a `onClick` in props.

## React Story Book

To run the component in various modes, run the following command then go to `http://localhost:6006/`.

```bash
npm start
```

## Testing

```bash
npm test
```
