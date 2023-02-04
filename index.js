#!/bin/sh

//---------------------- first running command ----------------------

// const fs = require('fs');
// const { exec } = require('child_process');

// const runCommands = async () => {
// //   // Navigate to first directory
//   try {
//     process.chdir('server');
//     console.log(`Changed to directory: ${process.cwd()}`);
//   } catch (err) {
//     console.error(`chdir: ${err}`);
//   }

//   // Run first npm command
//   await exec('npm start', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//   });

//   // Navigate to second directory
//   try {
//     process.chdir('client');
//     console.log(`Changed to directory: ${process.cwd()}`);
//   } catch (err) {
//     console.error(`chdir: ${err}`);
//   }

//   // Run second npm command
//   console.log("Starting Client Application using 'npm start' command");
//   await exec('npm start', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//     console.log("Succesfully Started Client application");
//   });
// };

// runCommands();

//---------------------- second running command ----------------------

const fs = require('fs');
const { exec } = require('child_process');
const { join } = require('path');
const { spawn } = require('child_process');


const directories = ['server', 'client_og'];
let serverDone = false;

const exeNI = () => {
    exec('npm install', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        console.log("Succesfully Installed required packages");
    }
    )
}

const spawnNS = () =>{
    const ser_NS = spawn("npm", ["start"], { shell: true });
    console.log("Starting Server using 'npm start' in server directory\n");
    ser_NS.stdout.on('data', (data) => {
        console.log(`stdout of server: ${data}`);
    });
    ser_NS.stderr.on('data', (data) => {
        console.error(`stderr of server: ${data}`);
    });
    ser_NS.on('close', (code) => {
        console.log(`server process exited with code ${code}`);
    });
}

const runServer = () => {
    const dir = directories[0];
    process.chdir(join(__dirname, dir));
    console.log(`Changed to directory: ${process.cwd()}`);

    // installing required packages for server
    // const ser_NI = spawn("npm", ["install"], { shell: true });
    // console.log("Installing Server packages using 'npm install' in server directory\n");
    // ser_NI.stdout.on('data', (data) => {
    //     console.log(`stdout of server: ${data}`);
    // });
    // ser_NI.stderr.on('data', (data) => {
    //     console.error(`stderr of server: ${data}`);
    // });
    // ser_NI.on('close', (code) => {
    //     console.log(`server process exited with code ${code}`);
    // });
    exeNI();

    // Starting server
    // const ser_NS = spawn("npm", ["start"], { shell: true });
    // console.log("Starting Server using 'npm start' in server directory\n");
    // ser_NS.stdout.on('data', (data) => {
    //     console.log(`stdout of server: ${data}`);
    // });
    // ser_NS.stderr.on('data', (data) => {
    //     console.error(`stderr of server: ${data}`);
    // });
    // ser_NS.on('close', (code) => {
    //     console.log(`server process exited with code ${code}`);
    // });
    spawnNS();
    serverDone = true;
}
const runClient = () => {
    const dir = directories[1];
    process.chdir(join(__dirname, dir));
    console.log(`Changed to directory: ${process.cwd()}`);

    // installing required packages for client
    // const cli_NI = spawn("npm", ["install"], { shell: true });
    // console.log("Installing Client packages using 'npm install' in client directory\n");
    // cli_NI.stdout.on('data', (data) => {
    //     console.log(`stdout of client: ${data}`);
    // });
    // cli_NI.stderr.on('data', (data) => {
    //     console.error(`stderr of client: ${data}`);
    // });
    // cli_NI.on('close', (code) => {
    //     console.log(`client process exited with code ${code}`);
    // });
    exeNI();

    // Starting client
    // const cli_NS = spawn("npm", ["start"], { shell: true });
    // console.log("Starting Client using 'npm start' in client directory\n");
    // cli_NS.stdout.on('data', (data) => {
    //     console.log(`stdout of client: ${data}`);
    // });
    // cli_NS.stderr.on('data', (data) => {
    //     console.error(`stderr of client: ${data}`);
    // });
    // cli_NS.on('close', (code) => {
    //     console.log(`client process exited with code ${code}`);
    // });
    spawnNS();
}
runServer();
if (serverDone) {
    runClient();
}


// ------------------third code -----------------------
// const fs = require('fs');
// const { exec } = require('child_process');
// const { join } = require('path');
// const { spawn } = require('child_process');

// const dir1 = 'server';
// const dir2 = 'client_og';

// // Function to access and run commands in dir1
// const runCommandsInDir1 = () => {
//   // Change to dir1
//   process.chdir(join(__dirname,dir1));

//   // Run npm install in dir1
//   exec('npm install', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`npm install in dir1: ${stdout}`);

//     // Run npm start in dir1 after npm install has completed
//     const npmStart = spawn('npm', ['start'], {shell:true});
//     npmStart.stdout.on('data', (data) => {
//       console.log(`npm start in dir1: ${data}`);
//     });
//     npmStart.stderr.on('data', (data) => {
//       console.error(`npm start in dir1: ${data}`);
//     });
//   });
// };

// // Function to access and run commands in dir2
// const runCommandsInDir2 = () => {
//   // Change to dir2
//   process.chdir(join(__dirname,dir2));

//   // Run npm install in dir2
//   exec('npm install', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`npm install in dir2: ${stdout}`);

//     // Run npm start in dir2 after npm install has completed
//     const npmStart = spawn('npm', ['start'], {shell:true});
//     npmStart.stdout.on('data', (data) => {
//       console.log(`npm start in dir2: ${data}`);
//     });
//     npmStart.stderr.on('data', (data) => {
//       console.error(`npm start in dir2: ${data}`);
//     });
//   });
// };

// // Call both functions to run commands in both directories
// runCommandsInDir1();
// runCommandsInDir2();



