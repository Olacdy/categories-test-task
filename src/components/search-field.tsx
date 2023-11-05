'use client';

import { ChangeEvent, FC, HTMLAttributes } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Icons } from '@/components/icons';

import useSearchStore from '@/hooks/useSearchStore';
import { cn } from '@/lib/utils';

type SearchFieldProps = {} & HTMLAttributes<HTMLInputElement>;

const SearchField: FC<SearchFieldProps> = ({ className, ...props }) => {
  const { search, setSearch } = useSearchStore((state) => ({ ...state }));

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    setSearch(text);
  };

  return (
    <div className={cn('relative w-full', className)} {...props}>
      <Label
        htmlFor='search-field'
        className='absolute right-5 top-1/2 -translate-y-1/2'>
        <Icons.search />
      </Label>
      <Input
        id='search-field'
        className='w-full'
        placeholder='Search'
        value={search}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchField;
