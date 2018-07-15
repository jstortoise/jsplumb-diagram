/**
 * This runs as a preinstall. It recurses through the directories in the project and runs `npm install` anywhere it finds
 * a `package.json` (it skips `node_modules` directories)
 */

"use strict";

const path = require('path')
const fs = require('fs')
const child_process = require('child_process')

const root = process.cwd()
const dist = "dist"

npm_install_recursive(root)
grunt_do_recursive(root)
tsc_do_recursive(root)

// Since this script is intended to be run as a "preinstall" command,
// it will be `npm install` inside root in the end.
console.log('===================================================================')
console.log(`Performing "npm install" inside root folder`)
console.log('===================================================================')

function npm_install_recursive(folder)
{
    const has_package_json = fs.existsSync(path.join(folder, 'package.json'))

    // Since this script is intended to be run as a "preinstall" command,
    // skip the root folder, because it will be `npm install`ed in the end.
    if (folder !== root && folder !== dist && has_package_json)
    {
        console.log('===================================================================')
        console.log(`Performing "npm install" inside ${folder === root ? 'root folder' : './' + path.relative(root, folder)}`)
        console.log('===================================================================')

        npm_install(folder)
    }

    for (let subfolder of subfolders(folder))
    {
        npm_install_recursive(subfolder)
    }
}

function npm_install(where)
{
    child_process.execSync('npm install', { cwd: where, env: process.env, stdio: 'inherit' })
}

function subfolders(folder)
{
    return fs.readdirSync(folder)
        .filter(subfolder => fs.statSync(path.join(folder, subfolder)).isDirectory())
        .filter(subfolder => subfolder !== 'node_modules' && subfolder[0] !== '.')
        .map(subfolder => path.join(folder, subfolder))
}

function grunt_do_recursive(folder)
{
    const has_gruntfile = fs.existsSync(path.join(folder, 'Gruntfile.js'))
    const has_webpack = fs.existsSync(path.join(folder, 'webpack.config.js'))

    // Since this script is intended to be run as a "preinstall" command,
    // skip the root folder, because it will be `npm install`ed in the end.
    if (folder !== root && folder !== dist && has_gruntfile)
    {
        grunt_do(folder, has_webpack ? "webpack" : "build")
    }

    for (let subfolder of subfolders(folder))
    {
        grunt_do_recursive(subfolder)
    }
}

function grunt_do(where, what)
{
    console.log('===================================================================')
    console.log(`Performing "grunt ${what}" inside ${where === root ? 'root folder' : './' + path.relative(root, where)}`)
    console.log('===================================================================')

    child_process.execSync('grunt ' + what, { cwd: where, env: process.env, stdio: 'inherit' })
}

function tsc_do_recursive(folder)
{
    const has_tsc= fs.existsSync(path.join(folder, 'tsconfig.json'))
    const has_angular_cli =  fs.existsSync(path.join(folder, '.angular-cli.json'))

    // Since this script is intended to be run as a "preinstall" command,
    // skip the root folder, because it will be `npm install`ed in the end.
    if (folder !== root && folder !== dist)
    {
        if (has_angular_cli) {
            angular_cli_do(folder)
        } else if (has_tsc) {
            tsc_do(folder)
        }
    }

    for (let subfolder of subfolders(folder))
    {
        tsc_do_recursive(subfolder)
    }
}

function tsc_do(where)
{
    console.log('===================================================================')
    console.log(`Performing "npm run tsc" inside ${where === root ? 'root folder' : './' + path.relative(root, where)}`)
    console.log('===================================================================')

    child_process.execSync('npm run tsc', { cwd: where, env: process.env, stdio: 'inherit' })
}

function angular_cli_do(where)
{
    console.log('===================================================================')
    console.log(`Performing "ng build" inside ${where === root ? 'root folder' : './' + path.relative(root, where)}`)
    console.log('===================================================================')

    child_process.execSync('ng build --prod --base-href .', { cwd: where, env: process.env, stdio: 'inherit' })
}


