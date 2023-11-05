'use client';

import { FC } from 'react';

import { Reorder } from 'framer-motion';

import Category from '@/components/category';

import { CategoryType } from '@/types/category';

type CategoriesProps = {
  categories: CategoryType[];
  handleReorder: (categories: CategoryType[]) => void;
  handleTitleChange: (id: string, title: string) => void;
  switchCategory: (id: string) => void;
  deleteCategory: (id: string) => void;
};

const Categories: FC<CategoriesProps> = ({
  categories,
  handleReorder,
  handleTitleChange,
  switchCategory,
  deleteCategory,
}) => {
  return (
    <Reorder.Group
      axis='y'
      values={categories}
      onReorder={handleReorder}
      className='flex w-full flex-col gap-[12px]'>
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          handleTitleChange={handleTitleChange}
          switchCategory={switchCategory}
          deleteCategory={deleteCategory}
        />
      ))}
    </Reorder.Group>
  );
};

export default Categories;
