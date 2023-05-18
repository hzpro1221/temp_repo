const os = require('os');
// infor about current user

const user = os.userInfo();
console.log(user);

// method return the sysytem uptime in second
console.log(`The system uptime is ${os.uptime()} second`);

const currentOS = {
name: os.type(),
release: os.release(),
totalMem: os.totalmem(),
freeMem: os.freemem()
};

console.log(currentOS);