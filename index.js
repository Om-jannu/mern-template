#!/bin/sh
const fs = require('fs');
const { exec } = require('child_process');
const { join } = require('path');
const { spawn } = require('child_process');


const directories = ['server', 'client'];
let serverDone = false;

const spawnNS = () =>{
    const ser_NS = spawn("npm", ["start"], { shell: true });
    console.log("Starting Server using 'npm start' in server directory\n");
    ser_NS.stdout.on('data', (data) => {
        console.log(`stdout of server: ${data}`);
    });
    ser_NS.stderr.on('data', (data) => {
        console.error(`stderr of server: ${data}`);
    });
    ser_NS.on('exit', (code) => {
        console.log(`server process exited with code ${code}`);
    });
}
const spawnNC = () =>{
    const cli_NS = spawn("npm", ["start"], { shell: true });
    console.log("Starting Client using 'npm start' in Client directory\n");
    cli_NS.stdout.on('data', (data) => {
        console.log(`stdout of Client: ${data}`);
    });
    cli_NS.stderr.on('data', (data) => {
        console.error(`stderr of Client: ${data}`);
    });
    cli_NS.on('exit', (code) => {
        console.log(`Client process exited with code ${code}`);
    });
}

const runServer = () => {
    const dir = directories[0];
    process.chdir(join(__dirname, dir));
    console.log(`Changed to directory: ${process.cwd()}`);
    spawnNS();
    serverDone = true;
}
const runClient = () => {
    const dir = directories[1];
    process.chdir(join(__dirname, dir));
    console.log(`Changed to directory: ${process.cwd()}`);
    spawnNC();
}
runServer();
if (serverDone) {
    runClient();
}
