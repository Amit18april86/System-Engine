const fs = require('fs-extra');
const concat = require('concat');
(async function build(){
	const distFiles = [
'./dist/SystemEngine/runtime.js',
		'./dist/SystemEngine/polyfills.js',
		'./dist/SystemEngine/main.js',
		'./dist/SystemEngine/scripts.js'
	];

	await fs.ensureDir('elements');
	await concat(distFiles,'elements/SystemEngine.js');
	await fs.copyFile('./dist/SystemEngine/styles.css','elements/styles.css');
	await fs.copy('./dist/SystemEngine/assets/','elements/assets/');
})();
