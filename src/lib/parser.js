'use strict'

const fs = require('fs')
const {resolve, basename, dirname, extname, relative} = require('path')
const postcss = require('postcss')
const sugarss = require('sugarss')

const cwd = process.cwd()

function _files(file, ext = '') {
	return `${resolve(cwd, dirname(file), basename(file, extname(file)))}${ext}`
}

function _opts(file) {
	const v = extname(file) === '.css' ? 1 : 0
	return {
		pos: v,
		opts: v ? {stringifier: sugarss} : {parser: sugarss}
	}
}

async function parser(_in, _out) {
	const {pos, opts} = _opts(_in)
	const exts = ['.sss', '.css']
	const from = _files(_in, exts[pos])
	const to = _files(_out, exts[pos ^ 1])
	const css = fs.readFileSync(from)
	const ws = fs.createWriteStream(to, {mode: 0o644})
	const result = await postcss().process(css, {
		...opts,
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
