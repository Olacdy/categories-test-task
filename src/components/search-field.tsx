'use client';

import { FC, HTMLAttributes } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Icons } from '@/components/icons';

import { cn } from '@/lib/utils';

type SearchFieldProps = {} & HTMLAttributes<HTMLInputElement>;

const SearchField: FC<SearchFieldProps> = ({ className, ...props }) => {
  return (
    <div className={cn('relative w-full', className)} {...props}>
      <Label
        htmlFor='search-field'
        className='absolute right-5 top-1/2 -translate-y-1/2'>
        <Icons.search className='' />
      </Label>
      <Input id='search-field' className='w-full' placeholder='Search' />
    </div>
  );
};

export default SearchField;
