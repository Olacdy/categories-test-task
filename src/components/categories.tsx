'use client';

import { FC } from 'react';

import { Reorder } from 'framer-motion';

import Category from '@/components/category';

import { CategoryType } from '@/types/category';

type CategoriesProps = {
  categories: CategoryType[];
  handleReorder: (categories: CategoryType[]) => void;
};

const Categories: FC<CategoriesProps> = ({ categories, handleReorder }) => {
  return (
    <>
      <Reorder.Group
        axis='y'
        values={categories}
        onReorder={handleReorder}
        className='flex w-full flex-col gap-[12px]'>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </Reorder.Group>
    </>
  );
};

export default Categories;
