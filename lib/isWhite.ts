import { gql, request} from 'graphql-request';

const endpoint = "https://meland-service-release.melandworld.com/graphql"

const doc = gql`
mutation check($address: String!) {
	loginByMetamask(loginByMetamaskInput: {
	  blockchainAddress: $address
	}) {
	  blockchainAddress
	}
}
`

export const check = async (address: string) => {
	try {
		await request(endpoint, doc, {
			address
		});
	} catch(error) {
		console.error(error);
		return false
	}
	return true;
}