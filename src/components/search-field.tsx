'use client';

import { ChangeEvent, FC, HTMLAttributes } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Icons } from '@/components/icons';

import { Button } from '@/components/ui/button';
import useSearchStore from '@/hooks/useSearchStore';
import { cn } from '@/lib/utils';

type SearchFieldProps = {} & HTMLAttributes<HTMLInputElement>;

const SearchField: FC<SearchFieldProps> = ({ className, ...props }) => {
  const { search, setSearch, clearSearch } = useSearchStore((state) => ({
    ...state,
  }));

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    setSearch(text);
  };

  const handleClearSearch = () => {
    clearSearch();
  };

  return (
    <div className={cn('relative w-full', className)} {...props}>
      {!search && (
        <Label
          htmlFor='search-field'
          className='absolute right-5 top-1/2 -translate-y-1/2'>
          <Icons.search />
        </Label>
      )}

      {search && (
        <Button
          onClick={handleClearSearch}
          size='icon'
          variant='ghost'
          className='absolute right-4 top-1/2 -translate-y-1/2 hover:bg-transparent'>
          <Icons.x className='h-5 w-5 stroke-muted-foreground' />
        </Button>
      )}

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
