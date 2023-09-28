import { useEffect } from "react";
import { Widget } from "@vetme/widgets";
import { Web3ReactProvider, Web3ReactHooks } from "@web3-react/core";
import "./App.css";
import { hooks as metaMaskHooks, metaMask } from "./connectors/metamask";
import type { MetaMask } from "@web3-react/metamask";

function App() {
  const provider = metaMaskHooks.useProvider();

  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to metamask");
    });
  }, []);

  const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];
  return (
    <div>
      <Web3ReactProvider connectors={connectors}>
        <Widget
          client="yourCompanyNameHere"
          provider={provider}
          defaultTokenName="VetMe"
        />
      </Web3ReactProvider>
    </div>
  );
}

export default App;
