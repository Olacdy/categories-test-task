'use client';

import { FC, useEffect, useState } from 'react';

import { toast } from 'sonner';

import ApplyChanges from '@/components/apply-changes';
import Categories from '@/components/categories';
import CreateCategoryButton from '@/components/create-category-button';

import useCategoriesStore from '@/hooks/useCategoriesStore';
import useSearch from '@/hooks/useSearch';

import { generateId } from '@/lib/utils';

import { CategoryType } from '@/types/category';

const otherCategory: CategoryType = { id: 'other', type: 'other', isOn: true };

const Page: FC = () => {
  const categoriesStore = useCategoriesStore();

  const { search } = useSearch();

  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [changesMade, setChangesMade] = useState(false);

  useEffect(() => {
    setCategories(categoriesStore.categories);
  }, []);

  const searchCategories = () => {
    return categories.filter((category) => {
      if (category.type === 'regular') {
        return category.title.toLowerCase().includes(search);
      }

      return category;
    });
  };

  const updateCategories = (newCategories: CategoryType[]) => {
    setCategories(newCategories);
    setChangesMade(true);
  };

  const handleReorder = (reorderedCategories: CategoryType[]) => {
    const lastElement = reorderedCategories.at(-1)!;

    if (lastElement.type !== 'other') {
      return;
    }

    updateCategories([
      ...reorderedCategories.filter((category) => category.id !== 'other'),
      otherCategory,
    ]);
  };

  const handleCreateCategoryClick = () => {
    updateCategories([
      { id: generateId(), title: '', type: 'input', isOn: false },
      ...categories,
    ]);
  };

  const handleApplyChanges = () => {
    const hasUnfilledTitles = categories.some(
      (category) => category.type === 'input' && category.title === ''
    );

    if (hasUnfilledTitles) {
      toast.error('All titles should be filled!');
      return;
    }

    categoriesStore.setCategories(
      categories.map((category) =>
        category.type === 'input' ? { ...category, type: 'regular' } : category
      )
    );
    setChangesMade(false);
  };

  const handleCancelChanges = () => {
    setCategories(categoriesStore.categories);
    setChangesMade(false);
  };

  return (
    <section className='flex w-full max-w-[638px] flex-1 flex-col items-center gap-[12px] px-5'>
      <CreateCategoryButton handleClick={handleCreateCategoryClick} />
      <Categories
        categories={searchCategories()}
        handleReorder={handleReorder}
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
          updateCategories(categories.filter((category) => category.id !== id))
        }
      />
      {changesMade && (
        <ApplyChanges
          handleApplyChanges={handleApplyChanges}
          handleCancelChanges={handleCancelChanges}
        />
      )}
    </section>
  );
};

export default Page;
