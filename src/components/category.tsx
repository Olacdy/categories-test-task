'use client';

import { ChangeEvent, FC } from 'react';

import { Reorder, useDragControls } from 'framer-motion';

import { Input } from '@/components/ui/input';

import { Icons } from '@/components/icons';

import CategorySwitch from '@/components/category-switch';
import DeleteCategoryDialog from '@/components/delete-category-dialog';

import { cn } from '@/lib/utils';

import { CategoryType } from '@/types/category';

type CategoryProps = {
  category: CategoryType;
  handleTitleChange: (id: string, title: string) => void;
  switchCategory: (id: string) => void;
  deleteCategory: (id: string) => void;
};

const Category: FC<CategoryProps> = ({
  category,
  handleTitleChange,
  switchCategory,
  deleteCategory,
}) => {
  const dragControls = useDragControls();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;

    handleTitleChange(category.id, title);
  };

  return (
    <Reorder.Item
      className='flex h-[50px] w-full items-center justify-between gap-5 rounded-sm border-2 border-category-border bg-category-bg px-5'
      id={category.id}
      value={category}
      dragListener={false}
      dragControls={category.type !== 'other' ? dragControls : undefined}>
      {category.type !== 'input' ? (
        <p
          className={cn('w-full text-[14px] font-medium', {
            'text-category-title-muted': !category.isOn,
          })}>
          {category.type === 'regular' ? category.title : 'Other'}
        </p>
      ) : (
        <Input
          value={category.title}
          onChange={(e) => handleInputChange(e)}
          placeholder='Enter Category Name'
          className='border-0 bg-transparent px-0 placeholder:text-category-title-muted focus-visible:ring-0 focus-visible:ring-offset-0'
        />
      )}

      <div className='flex w-full max-w-[121px] items-center justify-between'>
        <CategorySwitch
          checked={category.isOn}
          onCheckedChange={() => switchCategory(category.id)}
        />
        {category.type !== 'other' && (
          <>
            <DeleteCategoryDialog
              deleteCategory={() => deleteCategory(category.id)}
            />
            <Icons.dragAndDrop
              className='h-6 w-6 cursor-grab p-1'
              dragControls={dragControls}
            />
          </>
        )}
      </div>
    </Reorder.Item>
  );
};

export default Category;
