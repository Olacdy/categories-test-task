'use client';

import { FC } from 'react';

import { Button } from '@/components/ui/button';

import { Icons } from '@/components/icons';

type CreateCategoryButtonProps = {
  handleClick: () => void;
};

const CreateCategoryButton: FC<CreateCategoryButtonProps> = ({
  handleClick,
}) => {
  return (
    <Button onClick={handleClick} className='h-[50px] w-full gap-2.5'>
      <Icons.add />
      <span>Create a Category</span>
    </Button>
  );
};

export default CreateCategoryButton;
