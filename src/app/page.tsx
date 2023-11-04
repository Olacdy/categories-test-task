'use client';

import { FC, useState } from 'react';

import Categories from '@/components/categories';
import CreateCategoryButton from '@/components/create-category-button';

import { generateId } from '@/lib/utils';

import { CategoryType } from '@/types/category';

type PageProps = {};

const otherCategory: CategoryType = { id: 'other', type: 'other', isOn: true };

const Page: FC<PageProps> = ({}) => {
  const [categories, setCategories] = useState<CategoryType[]>([
    { id: generateId(), type: 'regular', title: 'Test', isOn: false },
    otherCategory,
  ]);

  const deleteCategory = (id: string) => {
    const newCategories = categories.filter((category) => category.id !== id);

    setCategories(newCategories);
  };

  const handleReorder = (reorderedCategories: CategoryType[]) => {
    setCategories([
      ...reorderedCategories.filter((category) => category.id !== 'other'),
      otherCategory,
    ]);
  };

  const handleCreateCategoryClick = () => {
    setCategories((prev) => [
      { id: generateId(), type: 'input', isOn: false },
      ...prev,
    ]);
  };

  return (
    <section className='flex w-full max-w-[638px] flex-1 flex-col items-center gap-[12px]'>
      <CreateCategoryButton handleClick={handleCreateCategoryClick} />
      <Categories
        categories={categories}
        handleReorder={handleReorder}
        deleteCategory={deleteCategory}
      />
    </section>
  );
};

export default Page;
