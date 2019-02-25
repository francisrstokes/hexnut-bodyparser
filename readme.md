# hexnut-bodyparser

`hexnut-bodyparser` is a <a href="https://github.com/francisrstokes/hexnut">hexnut</a> middleware for automatically parsing messages received. It can also be used with `hexnut-client`.

## Installing

```bash
npm i hexnut-bodyparser
```

## Usage

### JSON

*bodyparser.json(settings)*

```javascript
const bodyparser = require('hexnut-bodyparser');

// Will *not* throw if messages cannot be parsed
app.use(bodyparser.json());

// *Will* throw if messages cannot be parsed
app.use(bodyparser.json({ strictParsing: true }));
```
