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
import 'react-scroll-paginator/styles.css';
import ReactStickyHeader from 'react-scroll-paginator';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <ReactStickyHeader
    // This will be the sticky strip.
    header={
      <div className={cx('Header_root', { sticky })}>
        <h1 className="Header_title">ReactStickyHeader</h1>

        <ul className="Header_links">
          <li className="Header_link">When</li>
          <li className="Header_link">Why</li>
          <li className="Header_link">About</li>
        </ul>
      </div>
    }
  >
    <section>
      // More header stuff here, this won't be sticky.
    </section>
  </ReactStickyHeader>,
  document.getElementById('container')
);
```

| prop | type | required |
|-|-|-|
| children | Children  | no |
| header | Children | yes |
| backgroundImage | string | no |
| backgroundColor | string | no |
| headerOnly | boolean | no |
| onSticky | (boolean) => void | no |
| className | string | no |

### React Story Book

To run the component in various modes, run the following command then go to `http://localhost:6006/`.

```bash
npm start
```

### Testing

```bash
npm test
```
