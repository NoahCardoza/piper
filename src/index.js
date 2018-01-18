
const fs = require('fs');
const path = require('path');

const functions = path.join(__dirname, 'functions')

module.exports = Object.assign(
  ...fs.readdirSync(functions).map(f => ({
        [f.slice(0, f.length - 3)]: require(path.join(functions, f))})))
