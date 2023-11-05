'use client';

import { ChangeEvent, FC } from 'react';

import { Draggable } from 'react-beautiful-dnd';

import { Input } from '@/components/ui/input';

import { Icons } from '@/components/icons';

import CategorySwitch from '@/components/category-switch';
import DeleteCategoryDialog from '@/components/delete-category-dialog';

import { cn } from '@/lib/utils';

import { CategoryType } from '@/types/category';

type CategoryProps = {
  index: number;
  category: CategoryType;
  handleTitleChange: (id: string, title: string) => void;
  switchCategory: (id: string) => void;
  deleteCategory: (id: string) => void;
};

const Category: FC<CategoryProps> = ({
  index,
  category,
  handleTitleChange,
  switchCategory,
  deleteCategory,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;

    handleTitleChange(category.id, title);
  };

  if (category.type === 'other')
    return (
      <li className='flex h-[50px] w-full items-center justify-between gap-5 rounded-sm border-2 border-category-border bg-category-bg px-5'>
        <p
          className={cn('w-full text-[14px] font-medium', {
            'text-category-title-muted': !category.isOn,
          })}>
          Other
        </p>

        <div className='flex w-full max-w-[121px] items-center justify-between'>
          <CategorySwitch
            checked={category.isOn}
            onCheckedChange={() => switchCategory(category.id)}
          />
        </div>
      </li>
    );

  return (
    <Draggable draggableId={'category-' + category.id} index={index}>
      {(provided, snapshot) => (
        <li
          className='flex h-[50px] w-full items-center justify-between gap-5 rounded-sm border-2 border-category-border bg-category-bg px-5'
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            boxShadow: snapshot.isDragging ? '0 0 .4rem #666' : 'none',
          }}>
          {category.type !== 'input' ? (
            <p
              className={cn('w-full text-[14px] font-medium', {
                'text-category-title-muted': !category.isOn,
              })}>
              {category.type === 'regular' && category.title}
            </p>
          ) : (
            <Input
              value={category.title}
              onChange={handleInputChange}
              placeholder='Enter Category Name'
              className='border-0 bg-transparent px-0 placeholder:select-none placeholder:text-category-title-muted focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          )}

          <div className='flex w-full max-w-[121px] items-center justify-between'>
            <CategorySwitch
              checked={category.isOn}
              onCheckedChange={() => switchCategory(category.id)}
            />
            <DeleteCategoryDialog
              deleteCategory={() => deleteCategory(category.id)}
            />
            <span {...provided.dragHandleProps}>
              <Icons.dragAndDrop className='h-6 w-6 cursor-grab p-1' />
            </span>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default Category;
