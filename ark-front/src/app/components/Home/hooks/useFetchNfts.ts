import { Nft } from '@/types/ntf.type';
import { useQuery } from '@tanstack/react-query';
import { Alchemy, Network } from "alchemy-sdk";

async function fetchNfts(): Promise<Nft[]> {
  const contractAddress = "0x9a38dec0590abc8c883d72e52391090e948ddf12"
  const alchemyKey = process.env.ALCHEMY_API_KEY

  const settings = {
    apiKey: alchemyKey,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(settings);

  const nfts = await alchemy.nft.getNftsForContract(contractAddress, {
    pageSize: 25,
  })
  const nftList: Nft[] = nfts.nfts.map((nft) => {
    return {
      imageUrl: nft.rawMetadata?.image || "",
      name: nft.rawMetadata?.name || "",
    }
  })

  return nftList;
}

export const useFetchNfts = () => {
  return useQuery({
    queryKey: ['nfts'],
    queryFn: fetchNfts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}