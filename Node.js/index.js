const path = require('node:path');
console.log(path.basename('E:\\WT\\crud.html'));
// Returns: 'C:\\temp\\myfile.html'
console.log(path.isAbsolute('E:\\WT\\Node js')); // true
console.log(path.isAbsolute('/baz/..'));  // true
console.log(path.isAbsolute('qux/'));     // false
console.log(path.isAbsolute('.'));        // false
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// Returns: '/foo/bar/baz/asdf'

console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));
// Returns: 'C:\\temp\\foo\\'