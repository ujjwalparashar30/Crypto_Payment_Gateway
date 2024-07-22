require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ethereum: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/WZxW_TBrlckHLVTWy2ZTA21UEoXRD3tb',
      accounts: ['728630bce75dac6d882cd6a63edca732a3ee12e8119960b2c010002856204d17'],
    },
  },
};