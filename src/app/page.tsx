import { FC } from 'react';

type PageProps = {};

const Page: FC<PageProps> = ({}) => {
  return (
    <section className='flex flex-1'>
      <p className='text-xl font-bold'>Hello world</p>
    </section>
  );
};

export default Page;
