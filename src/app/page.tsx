import { FC } from 'react';

type PageProps = {};

const Page: FC<PageProps> = ({}) => {
  return (
    <section className='flex flex-1'>
      <p className='text-xl'>Hello world</p>
    </section>
  );
};

export default Page;
