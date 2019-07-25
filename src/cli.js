#!/usr/bin/env node

'use strict'

const commander = require('commander')
const pkg = require('../package.json')
const parser = require('./lib/parser')

const program = new commander.Command()

program
	.version(pkg.version)
	.arguments('<input>')
	.option('-o, --output <output>', 'output file')
	.action(async (input, cmd) => {
		await parser(input, (cmd && cmd.output) || input)
	})

program.parse(process.argv)
