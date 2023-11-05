'use client';

import { FC, useEffect, useState } from 'react';

import { type DropResult } from 'react-beautiful-dnd';

import ApplyChanges from '@/components/apply-changes';
import Categories from '@/components/categories';
import CreateCategoryButton from '@/components/create-category-button';

import useCategoriesStore from '@/hooks/useCategoriesStore';
import useSearchStore from '@/hooks/useSearchStore';

import { generateId, reorder } from '@/lib/utils';

import { CategoryType } from '@/types/category';

const Page: FC = () => {
  const categoriesStore = useCategoriesStore();

  const { search } = useSearchStore();

  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [changesMade, setChangesMade] = useState(false);

  useEffect(() => {
    setCategories(categoriesStore.categories);
  }, [categoriesStore.categories]);

  const resetChanges = () => {
    setChangesMade(false);
  };

  const searchCategories = () => {
    return categories.filter((category) => {
      if (category.type === 'regular') {
        return category.title.toLowerCase().includes(search.toLowerCase());
      }

      return category;
    });
  };

  const updateCategories = (newCategories: CategoryType[]) => {
    setCategories(newCategories);
    setChangesMade(true);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reorderedCategories = reorder(
      categories,
      result.source.index,
      result.destination.index
    );

    updateCategories(reorderedCategories);
  };

  const handleCreateCategoryClick = () => {
    updateCategories([
      { id: generateId(), title: '', type: 'input', isOn: false },
      ...categories,
    ]);
  };

  const handleCancelChanges = () => {
    setCategories(categoriesStore.categories);
    resetChanges();
  };

  return (
    <section className='flex w-full max-w-[638px] flex-1 flex-col items-center gap-[12px] px-5 pb-44'>
      <CreateCategoryButton handleClick={handleCreateCategoryClick} />
      {categories.length > 0 && (
        <Categories
          categories={searchCategories()}
          onDragEnd={onDragEnd}
          handleTitleChange={(id, title) =>
            updateCategories(
              categories.map((category) =>
                category.id === id ? { ...category, title } : category
              )
            )
          }
          switchCategory={(id) =>
            updateCategories(
              categories.map((category) =>
                category.id === id
                  ? { ...category, isOn: !category.isOn }
                  : category
              )
            )
          }
          deleteCategory={(id) =>
            updateCategories(
              categories.filter((category) => category.id !== id)
            )
          }
        />
      )}
      {changesMade && (
        <ApplyChanges
          categories={categories}
          resetChanges={resetChanges}
          handleCancelChanges={handleCancelChanges}
        />
      )}
    </section>
  );
};

export default Page;
