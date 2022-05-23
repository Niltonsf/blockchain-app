// https://eth-ropsten.alchemyapi.io/v2/7t3lCHqxZHJywx1FQQRDH-8UI8WdAIw6

require('@nomiclabs/hardhat-waffle');
require('dotenv').config({path: __dirname + '/.env'})

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/7t3lCHqxZHJywx1FQQRDH-8UI8WdAIw6',
			accounts: ['251531f77f7fc2f0678b0551c7a09c26bcf0ac444e1e6964555e6a389e0dfe61']
		}
	}
}