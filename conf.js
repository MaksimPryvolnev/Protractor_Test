exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['todo-spec.js'],
	multiCapabilities: [
		{
			'browserName': 'chrome',
			'chromeOptions': {
				'args': [
					'show-fps-counter=true',
					'--start-maximized'
				]
			}
		},
		{
			'browserName': 'firefox',
			'moz:firefoxOptions': {
			'args': [
				'--safe-mode'
			]
			}
		}
	]
}