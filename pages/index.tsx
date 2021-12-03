import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getWeb3Provider, switchToPolygronTestNetwork, watchAsset } from '../lib/web3';
import { useCallback } from 'react';
import { Faucet__factory, MELD, MELD__factory } from '../contracts';
import { check } from '../lib/isWhite';

const MELDAddress = '0x62C7500B45d39ec64030FE44acB9a1037f1F127D';
const FaucetAddress = '0xa7f24dFDc1993057b7F92AAEBA3bc3fC1fc4f91E';

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

    const coinbase = await provider.getSigner().getAddress();

    const bool = await check(coinbase);
    if (!bool) {
      window.alert("You are not on the Alpha Test List Please join TG:                             t.me/melandaiWorld");
      return;
    }

    try {
      const instanceOfMELD = MELD__factory.connect(MELDAddress, provider.getSigner());
      const faucet = Faucet__factory.connect(FaucetAddress, provider.getSigner());
      await faucet.recive();
    } catch(error) {
      console.warn(error);
      if (JSON.stringify(error).indexOf("24 hours") > -1) {
        window.alert("You can only pick it up once in 24 hours");
      } else {
        window.alert(JSON.stringify(error));
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>(Meland.ai)MELD faucet</title>
        <meta name="description" content="Meland.ai(MELD) mumbai testnet faucet" />
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
