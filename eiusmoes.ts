
const { EthosConnectProvider, SignInButton, TransactionBlock, ethos } = require("ethos-connect");

const provider = new EthosConnectProvider();

const signInButton = new SignInButton({ provider });

const transactionBlock = new TransactionBlock({ provider });

