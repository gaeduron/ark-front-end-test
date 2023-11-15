import { PropsWithChildren } from 'react';

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className='max-w-full md:max-w-[800px] lg:max-w-[1200px] m-auto px-4 md:px-8'>
        {children}  
    </div>
  )
}

export default Wrapper;