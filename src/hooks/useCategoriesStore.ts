import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { CategoryType } from '@/types/category';

type CategoriesStateType = {
  categories: CategoryType[];
  setCategories: (categories: CategoryType[]) => void;
};

const useCategoriesStore = create<CategoriesStateType>()(
  devtools(
    persist(
      (set) => ({
        categories: [{ id: 'other', type: 'other', isOn: true }],
        setCategories: (categories) => set(() => ({ categories: categories })),
      }),
      { name: 'categoriesStore' }
    )
  )
);

export default useCategoriesStore;
