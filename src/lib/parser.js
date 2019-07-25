'use strict'

const fs = require('fs')
const {resolve, basename, dirname, extname, relative} = require('path')
const postcss = require('postcss')
const sugarss = require('sugarss')

const cwd = process.cwd()

function _files(file, ext = '') {
	return `${resolve(cwd, dirname(file), basename(file, extname(file)))}${ext}`
}

async function parser(_in, _out) {
	const from = _files(_in, '.css')
	const to = _files(_out, '.sss')
	const css = fs.readFileSync(from)
	const ws = fs.createWriteStream(to, {mode: 0o644})
	const result = await postcss().process(css, {
		stringifier: sugarss,
		// map: {
		// 	inline: true
		// },
		from,
		to
	})
	ws.end(result.content)
	process.stdout.write(`==> Created ${relative(cwd, to)} \n\n`)
	return result.content
}

module.exports = parser
