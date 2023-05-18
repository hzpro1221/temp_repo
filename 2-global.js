// GLOBAL - NO WINDOW !!!

// __dirname    - path to curren directory
// __filename   - file name
// require      - function to use module (CommonJs)
// module       - info to use current module (file)
//process       - info about env where the program is executed

console.log(__dirname);
setInterval(() => {
    console.log('hello world');
}, 1000);