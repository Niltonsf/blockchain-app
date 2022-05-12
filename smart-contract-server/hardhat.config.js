// https://eth-ropsten.alchemyapi.io/v2/7t3lCHqxZHJywx1FQQRDH-8UI8WdAIw6

require('@nomiclabs/hardhat-waffle');
require('dotenv').config({path: __dirname + '/.env'})

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/7t3lCHqxZHJywx1FQQRDH-8UI8WdAIw6',
			accounts: [process.env.METAMASK_PRIVATE_KEY]
		}
	}
}