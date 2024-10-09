const path = require('node:path');
console.log(path.isAbsolute('/foo/bar')); 
console.log(path.isAbsolute('/baz/..'));  
console.log(path.isAbsolute('qux/'));     
console.log(path.isAbsolute('.'));        
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));
