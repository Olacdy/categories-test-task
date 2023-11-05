'use client';

import { FC } from 'react';

import CategorySwitch from '@/components/category-switch';

import { cn } from '@/lib/utils';

import { CategoryType } from '@/types/category';

export type OtherCategoryProps = {
  category: CategoryType;
  switchCategory: (id: string) => void;
};

const OtherCategory: FC<OtherCategoryProps> = ({
  category,
  switchCategory,
}) => {
  return (
    <li className='category-item'>
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
};

export default OtherCategory;
