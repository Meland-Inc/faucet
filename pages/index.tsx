import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getWeb3Provider, switchToPolygronTestNetwork, watchAsset } from './web3';
import { useCallback } from 'react';
import { Faucet__factory, MELD, MELD__factory } from '../contracts';

const MELDAddress = '0xe323E3A071909972c062C55624e3b61314a38C93';
const FaucetAddress = '0x160c13a0975D3C216D38BB54a76DfbB758Bfb33C';

const Home: NextPage = () => {
  const addToken = useCallback(async () => {
    const provider = await getWeb3Provider();

    if (!provider) {
			window.alert('please install metamask wallet');
      return;
    }

    const network = await provider.getNetwork();
    if (network.chainId !== 80001) {
      await switchToPolygronTestNetwork(provider);
    }

    await watchAsset(MELDAddress, provider);
  }, []);
  const pickUpMELD = useCallback(async () => {
    const provider = await getWeb3Provider();

    if (!provider) {
			window.alert('please install metamask wallet');
      return;
    }

    const network = await provider.getNetwork();
    if (network.chainId !== 80001) {
      await switchToPolygronTestNetwork(provider);
    }
    try {
      const instanceOfMELD = MELD__factory.connect(MELDAddress, provider.getSigner());
      const faucet = Faucet__factory.connect(FaucetAddress, provider.getSigner());
      await faucet.recive();
    } catch(error) {
      window.alert(JSON.stringify(error));
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>(Meland.ai)MELD faucet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={pickUpMELD}>Pick up MELD</button>

        <br />

        <button onClick={addToken}>Import Token To Metamask</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://meland.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Meland.ai
        </a>
      </footer>
    </div>
  )
}

export default Home
