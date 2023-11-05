'use client';

import { FC } from 'react';

import { Draggable } from 'react-beautiful-dnd';

import CategorySwitch from '@/components/category-switch';
import DeleteCategoryDialog from '@/components/delete-category-dialog';

import { Icons } from '@/components/icons';

import { cn } from '@/lib/utils';

import { CategoryType } from '@/types/category';

export type RegularCategoryProps = {
  category: CategoryType;
  index: number;
  deleteCategory: (id: string) => void;
  switchCategory: (id: string) => void;
};

const RegularCategory: FC<RegularCategoryProps> = ({
  category,
  index,
  deleteCategory,
  switchCategory,
}) => {
  return (
    <Draggable draggableId={'category-' + category.id} index={index}>
      {(provided, snapshot) => (
        <li
          className='category-item'
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            boxShadow: snapshot.isDragging ? '0 0 .4rem #666' : 'none',
          }}>
          <p
            className={cn('w-full text-[14px] font-medium', {
              'text-category-title-muted': !category.isOn,
            })}>
            {category.title}
          </p>

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

export default RegularCategory;
