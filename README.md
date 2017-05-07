# [react-library-boilerplate](https://github.com/madou/react-library-boilerplate)

[![NPM version](http://img.shields.io/npm/v/react-library-boilerplate.svg?style=flat-square)](https://www.npmjs.com/package/react-library-boilerplate)
[![NPM downloads](http://img.shields.io/npm/dm/react-library-boilerplate.svg?style=flat-square)](https://www.npmjs.com/package/react-library-boilerplate)
[![Build Status](http://img.shields.io/travis/madou/react-library-boilerplate/master.svg?style=flat-square)](https://travis-ci.org/madou/react-library-boilerplate)
[![codecov](https://codecov.io/gh/madou/react-library-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/react-library-boilerplate)
[![Dependency Status](http://img.shields.io/david/madou/react-library-boilerplate.svg?style=flat-square)](https://david-dm.org/madou/react-library-boilerplate)

Quick description of what it does!

<p align="center">
  <img src="https://github.com/madou/react-library-boilerplate/blob/master/example.gif?raw=true" style="margin:0 auto" />
</p>

## Installation

```sh
npm install react-library-boilerplate
```

## Usage

```javascript
import 'react-library-boilerplate/styles.css';
import ReactStickyHeader from 'react-library-boilerplate';
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
