import { piggybankScAddress, nftmintScAddress } from './config';
import {
  Address,
  ContractFunction,
  GasLimit,
  Balance,
  SmartContract,
  BytesValue,
  U32Value,
} from '@elrondnetwork/erdjs';

// Create first piggy bank, you can have only one for now
// Pass unix timestamp in the future, this is the lock time
export const createPiggy2 = () => {
  /* const contract = new SmartContract({
    address: new Address(piggybankScAddress),
  });

  return contract.call({
    func: new ContractFunction('create_piggy'),
    args: [new U32Value(timestamp)],
    gasLimit: new GasLimit(5000000),
  }); */
  const contract = new SmartContract({
    address: new Address(nftmintScAddress),
  });
  return contract.call({
    func: new ContractFunction('issueToken'),
    args: [BytesValue.fromUTF8('TestMyColl'), BytesValue.fromUTF8('TSTKN')],
    value: Balance.egld(0.05),
    gasLimit: new GasLimit(500000000),
  });
};
export const createPiggy1 = () => {
  const contract = new SmartContract({
    address: new Address(nftmintScAddress),
  });
  return contract.call({
    func: new ContractFunction('setLocalRoles'),
    gasLimit: new GasLimit(500000000),
  });
};
export const createPiggy = () => {
  const contract = new SmartContract({
    address: new Address(nftmintScAddress),
  });
  return contract.call({
    func: new ContractFunction('createNft'),
    args: [
      BytesValue.fromUTF8('First'),
      new U32Value(10),
      BytesValue.fromUTF8(`
        https://lh3.googleusercontent.com/vlwoluc-i8Om3TbrL15fJq_PZHk761xwo30BZTIOhk2wM6K1IySad_7FLczZ
        -UNPrgWdFpw0zOdJsk9cSBYzWXdJ4I5U5ugGI_Ha=w282
        `),
      new U32Value(0.02),
    ],
    value: Balance.egld(0.02),
    gasLimit: new GasLimit(10000000),
  });
};

// Add amount to your PiggyBank
export const addAmount = (amount: string) => {
  const contract = new SmartContract({
    address: new Address(piggybankScAddress),
  });

  return contract.call({
    func: new ContractFunction('add_amount'),
    value: Balance.fromString(amount),
    gasLimit: new GasLimit(5000000),
  });
};

// Check how many egld/xegld you have in your PiggyBank
export const amount = () => {
  const contract = new SmartContract({
    address: new Address(piggybankScAddress),
  });

  return contract.call({
    func: new ContractFunction('amount'),
    gasLimit: new GasLimit(5000000),
  });
};

// Payout after lock date passed
export const payout = () => {
  const contract = new SmartContract({
    address: new Address(piggybankScAddress),
  });

  return contract.call({
    func: new ContractFunction('pay_out'),
    gasLimit: new GasLimit(5000000),
  });
};
