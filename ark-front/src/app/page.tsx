'use client';

import { useFetchNfts } from '@/app/components/Home/hooks/useFetchNfts';
import Input from '@/app/components/common/input';
import NftCard from '@/app/components/common/ntfCard';
import { CircularProgress } from '@mui/material';

import { useEffect, useState } from 'react';
import Wrapper from './components/common/wrapper';

export default function Home() {
  const { data: nfts, isLoading } = useFetchNfts();
  const [search, setSearch] = useState('')
  const [filteredNfts, setFilteredNfts] = useState(nfts)

  const handleSearchUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    if (!isLoading && nfts && e.target.value !== '') {
      const newFilteredNfts = nfts.filter(nft => nft.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setFilteredNfts(newFilteredNfts)
    } else {
      setFilteredNfts(nfts)
    }
  }

  useEffect(() => {
    if (!isLoading && nfts) {
      setFilteredNfts(nfts)
    }
  }, [nfts])

  return (
    <main className="min-h-screen bg-darker">
      <Wrapper>
        <div className='flex justify-end'>
          <Input
            value={search}
            onChange={handleSearchUpdate}
            placeholder='Search by name'
            className='w-full sm:w-[300px]  my-4 mt-10'
          />
        </div>
          {isLoading &&
            (
                <div className='flex flex-col justify-center items-center min-h-screen bg-darker'>
                  <p className='text-primaryDark font-semibold mb-6'>
                    LOADING
                  </p>
                  <div className='text-primary'>
                    <CircularProgress color="inherit" />
                  </div>
                </div>
            )
          }
          {
            !isLoading &&
            <div className='flex flex-wrap justify-between max-w-full'>
              {filteredNfts && filteredNfts.map((nft, i) => {
                return (
                  <NftCard
                    key={i}
                    imageUrl={nft.imageUrl}
                    name={nft.name}
                    price={0.5}
                    priceUnit={"ETH"}
                    className='my-4'
                  />
                )
              })}
            </div>
          }
          {
            !isLoading && filteredNfts && filteredNfts.length === 0 &&
            <div className='flex flex-col justify-center items-center min-h-screen bg-darker'>
              <p className='text-primaryDark font-semibold mb-6'>
                NO RESULTS
              </p>
            </div>
          }
      </Wrapper>
    </main>
  )
}
