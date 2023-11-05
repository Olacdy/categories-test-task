'use client';

import { FC } from 'react';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

import { Icons } from '@/components/icons';

import useCategoriesStore from '@/hooks/useCategoriesStore';
import useFormsStore from '@/hooks/useFormsStore';
import { CategoryType } from '@/types/category';

type ApplyChangesProps = {
  categories: CategoryType[];
  resetChanges: () => void;
  handleCancelChanges: () => void;
};

const ApplyChanges: FC<ApplyChangesProps> = ({
  categories,
  resetChanges,
  handleCancelChanges,
}) => {
  const setCategories = useCategoriesStore((state) => state.setCategories);
  const formsStore = useFormsStore();

  const handleApplyChanges = () => {
    const hasUnfilledTitles = categories.some(
      (category) => category.type === 'input' && category.title === ''
    );

    for (const form of formsStore.forms) {
      form.trigger('title');
    }

    if (hasUnfilledTitles) {
      toast.error('All titles should be filled!');
      return;
    }

    setCategories(
      categories.map((category) =>
        category.type === 'input' ? { ...category, type: 'regular' } : category
      )
    );

    resetChanges();
    formsStore.clearForms();
  };

  return (
    <div className='fixed bottom-0 left-0 flex h-[104px] w-full justify-center bg-apply-changes'>
      <div className='flex w-full max-w-[1298px] flex-1 items-center justify-center gap-[26px] px-5'>
        <Button
          className='h-[64px] w-full items-center gap-2 bg-success text-[18px] hover:bg-success/80'
          onClick={handleApplyChanges}>
          <Icons.checkCircle />
          <span> Save Changes</span>
        </Button>
        <Button
          className='h-[64px] w-full border-4 border-cancel-btn-border bg-apply-changes text-[18px] hover:bg-cancel-btn-border'
          onClick={handleCancelChanges}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ApplyChanges;
