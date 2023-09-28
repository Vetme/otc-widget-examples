import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [
    1, 3, 4, 5, 42, 97, 56, 137, 43113, 43114, 80001, 42161, 8453, 5000,
  ],
});
