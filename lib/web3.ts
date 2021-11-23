import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { provider } from 'web3-core';
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';

let web3Provider: Web3Provider;

export const getWeb3Provider = async function(): Promise<Web3Provider | undefined> {
	if (!web3Provider) {
		const provider = (await detectEthereumProvider()) as provider;
		if (!provider) {
			return;
		}
		const web3 = new Web3();
		web3.setProvider(provider);
		await (window as any).ethereum.enable();

		// @ts-ignore
		web3Provider = new Web3Provider(web3.currentProvider, 'any');
	}
	return web3Provider;
};

export const addPolygronTestNetwork = async (web3Provider: Web3Provider) => {
	return web3Provider.send('wallet_addEthereumChain', [
		{
			chainId: '0x13881',
			chainName: 'Mumbai(PolygronTest)',
			nativeCurrency: {
				name: 'MATIC Token',
				symbol: 'MATIC',
				decimals: 18
			},
			rpcUrls: [ 'https://speedy-nodes-nyc.moralis.io/036db9847a8d6409b3dbcddc/polygon/mumbai' ],
			blockExplorerUrls: [ 'https://mumbai.polygonscan.com' ]
		}
	]);
};

export const switchToPolygronTestNetwork = async (web3Provider: Web3Provider) => {
	try {
		const tx = await web3Provider.send('wallet_switchEthereumChain', [
			{
				chainId: '0x13881'
			}
		]);
		console.debug(tx);
	} catch (error) {
		console.debug(error);
		await addPolygronTestNetwork(web3Provider)
	}
	return web3Provider.send('wallet_switchEthereumChain', [
		{
			chainId: '0x13881'
		}
	]);
};

export const watchAsset = async (MELDAddress: string, web3Provider: Web3Provider) => {
	return web3Provider.send('wallet_watchAsset', {
		// @ts-ignore
		type: 'ERC20',
		options: {
			address: MELDAddress,
			symbol: 'MELD',
			decimals: 18
		}
	});
};
