'use client';

import { FC } from 'react';

import { DragDropContext, type DropResult } from 'react-beautiful-dnd';

import Category from '@/components/category';
import StrictModeDroppable from '@/components/strict-mode-droppable';

import { CategoryType } from '@/types/category';

type CategoriesProps = {
  categories: CategoryType[];
  onDragEnd: (result: DropResult) => void;
  handleTitleChange: (id: string, title: string) => void;
  switchCategory: (id: string) => void;
  deleteCategory: (id: string) => void;
};

const Categories: FC<CategoriesProps> = ({
  categories,
  onDragEnd,
  handleTitleChange,
  switchCategory,
  deleteCategory,
}) => {
  const otherCategory = categories.at(-1)!;
  const categoriesWithoutOther = categories.slice(0, -1);

  return (
    <>
      {categoriesWithoutOther.length > 0 && (
        <DragDropContext onDragEnd={onDragEnd}>
          <StrictModeDroppable droppableId='categories'>
            {(provided) => (
              <ul
                ref={provided.innerRef}
                className='flex w-full flex-col gap-[12px]'
                {...provided.droppableProps}>
                {categoriesWithoutOther.map((category, index) => (
                  <Category
                    key={category.id}
                    index={index}
                    type={category.type}
                    category={category}
                    switchCategory={switchCategory}
                    deleteCategory={deleteCategory}
                    handleTitleChange={handleTitleChange}
                  />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      )}
      <Category
        type='other'
        key={otherCategory.id}
        category={otherCategory}
        switchCategory={switchCategory}
      />
    </>
  );
};

export default Categories;
