'use client';

import { FC } from 'react';

import { Reorder, useDragControls } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

import { Icons } from '@/components/icons';

import { cn } from '@/lib/utils';

import { Input } from '@/components/ui/input';

import { CategoryType } from '@/types/category';

type CategoryProps = {
  category: CategoryType;
};

const Category: FC<CategoryProps> = ({ category }) => {
  const dragControls = useDragControls();

  const content = (
    <>
      {category.type !== 'input' ? (
        <p
          className={cn('w-full text-[14px] font-medium', {
            'text-category-title-muted': !category.isOn,
          })}>
          {category.type === 'regular' ? category.title : 'Other'}
        </p>
      ) : (
        <Input
          placeholder='Enter Category Name'
          className='border-0 bg-transparent px-0 placeholder:text-category-title-muted focus-visible:ring-0 focus-visible:ring-offset-0'
        />
      )}

      <div className='flex w-full max-w-[121px] items-center justify-between'>
        <Switch checked={category.isOn} onCheckedChange={() => {}} />
        {category.type !== 'other' && (
          <>
            <Button size='icon' variant='ghost'>
              <Icons.delete />
            </Button>
            <Icons.dragAndDrop
              className='h-6 w-6 cursor-grab p-1'
              dragControls={dragControls}
            />
          </>
        )}
      </div>
    </>
  );

  if (category.type === 'other')
    return (
      <li className='flex h-[50px] w-full items-center justify-between gap-5 rounded-sm border-2 border-category-border bg-category-bg px-5'>
        {content}
      </li>
    );

  return (
    <Reorder.Item
      className='flex h-[50px] w-full items-center justify-between gap-5 rounded-sm border-2 border-category-border bg-category-bg px-5'
      id={category.id}
      value={category}
      dragListener={false}
      dragControls={dragControls}>
      {content}
    </Reorder.Item>
  );
};

export default Category;
