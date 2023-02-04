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
const { spawn } = require('child_process');
const { join } = require('path');

const directories = ['server', 'client_og'];
const commands = [['npm i','npm start'], ['npm i','npm start']];
let serverDone = false;
const runServer = () =>{
    const dir = directories[0];
    const cmd = commands[0];
    process.chdir(join(__dirname, dir));
    console.log(`Changed to directory: ${process.cwd()}`);
    const command = spawn(cmd[0], { shell: true });
    console.log("Starting Server using 'npm start' in server directory\n");
    command.stdout.on('data', (data) => {
        console.log(`stdout of server: ${data}`);
    });
    command.stderr.on('data', (data) => {
        console.error(`stderr of server: ${data}`);
    });

    command.on('close', (code) => {
        console.log(`server process exited with code ${code}`);
    });
    serverDone = true;
}
const runClient = () =>{
    const dir = directories[1];
    const cmd = commands[1];
    process.chdir(join(__dirname, dir));
    console.log(`Changed to directory: ${process.cwd()}`);
    const command = spawn(cmd[0], { shell: true });
    console.log("Starting Client using 'npm start' in client directory\n");

    command.stdout.on('data', (data) => {
        console.log(`stdout of client: ${data}`);
    });

    command.stderr.on('data', (data) => {
        console.error(`stderr of client: ${data}`);
    });

    command.on('close', (code) => {
        console.log(`client process exited with code ${code}`);
    });
}
runServer();
if(serverDone){
    runClient();
}

// for (let i = 0; i < directories.length; i++) {
//     const dir = directories[i];
//     const cmd = commands[i];

//     process.chdir(join(__dirname, dir));
//     console.log(`Changed to directory: ${process.cwd()}`);

//     const command = spawn(cmd[0], { shell: true });

//     command.stdout.on('data', (data) => {
//         console.log(`stdout of command: ${data}`);
//     });

//     command.stderr.on('data', (data) => {
//         console.error(`stderr of command: ${data}`);
//     });

//     command.on('close', (code) => {
//         console.log(`command process exited with code ${code}`);
//     });
// }

