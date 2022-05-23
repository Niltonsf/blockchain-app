export const shortenAddress = (address: string) => {
	const newAddress = String(address);
	return `${newAddress.slice(0, 5)}...${newAddress.slice(newAddress.length - 4)}`;
};