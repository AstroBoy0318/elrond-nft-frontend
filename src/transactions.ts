import {
  piggybankScAddress,
  nftmintScAddress,
  minTime,
  mintPrice,
} from './config';
import {
  Address,
  AddressValue,
  ContractFunction,
  GasLimit,
  Balance,
  SmartContract,
  BytesValue,
  U32Value,
} from '@elrondnetwork/erdjs';
import Parse from 'parse';

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'mjxYc8KCjZrNYQxONiNjsBQeBUIvRYWLNfl2aEMh', // This is your Application ID
  '29UJOzBC59BZ2Gk8qJxHjI5auRBkvVHf2OTjSUET' // This is your Javascript key
);

const getRandom = async () => {
  const query = new Parse.Query('assets');
  // You can also query by using a parameter of an object
  const results = await query.notEqualTo('status', 2).find();
  try {
    let found = false;
    let object;
    for (object of results) {
      if (
        object.get('status') === 0 ||
        new Date().getTime() - object.updatedAt.getTime() >= minTime
      ) {
        found = true;
        break;
      }
    }
    if (found) {
      object?.set('status', 1);
      await object?.save();
      return object;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateItem = async (no: number, nounce: string) => {
  const query = new Parse.Query('assets');
  // You can also query by using a parameter of an object
  const results = await query.equalTo('number', no).find();
  try {
    for (const object of results) {
      object?.set('status', 2);
      object?.set('tokenid', nounce);
      await object?.save();
    }
  } catch (error) {
    console.error(error);
  }
};

// Create first piggy bank, you can have only one for now
// Pass unix timestamp in the future, this is the lock time
export const issueToken = () => {
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
export const setLocalRoles = () => {
  const contract = new SmartContract({
    address: new Address(nftmintScAddress),
  });
  return contract.call({
    func: new ContractFunction('setLocalRoles'),
    gasLimit: new GasLimit(500000000),
  });
};
export const setManager = () => {
  const contract = new SmartContract({
    address: new Address(nftmintScAddress),
  });
  return contract.call({
    func: new ContractFunction('setManager'),
    args: [
      new AddressValue(
        new Address(
          'erd1r4lyrrepg2e90va0na9pxsjm3k78zy6pm0tp4cmamt55dltr67ns8e90kv'
        )
      ),
    ],
    gasLimit: new GasLimit(5000000),
  });
};
export const createNft = async () => {
  const contract = new SmartContract({
    address: new Address(nftmintScAddress),
  });
  const obj = await getRandom();
  if (obj !== null) {
    return contract.call({
      func: new ContractFunction('createNft'),
      args: [
        new U32Value(obj?.get('number')),
        BytesValue.fromUTF8(obj?.get('name')),
        new U32Value(10),
        BytesValue.fromUTF8(obj?.get('url')),
        new U32Value(mintPrice),
      ],
      value: Balance.egld(0.02),
      gasLimit: new GasLimit(10000000),
    });
  } else {
    return null;
  }
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
