import { FC } from 'react';

import { Icons } from '@/components/icons';

import SearchField from '@/components/search-field';

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className='sticky top-0 z-10 flex w-full justify-center border-b border-header-border bg-background/90 sm:h-[72px]'>
      <div className='flex max-w-[1298px] flex-1 flex-col items-center justify-between gap-5 px-5 py-5 sm:flex-row'>
        <div className='flex cursor-pointer items-center gap-[10px]'>
          <Icons.logo />
          <span className='select-none text-[32px] font-bold leading-[28px]'>
            Memes
          </span>
        </div>

        <SearchField className='sm:w-[380px]' />
      </div>
    </header>
  );
};

export default Header;
