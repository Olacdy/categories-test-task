'use client';

import { FC } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Icons } from '@/components/icons';

type DeleteCategoryDialogProps = {
  deleteCategory: () => void;
};

const DeleteCategoryDialog: FC<DeleteCategoryDialogProps> = ({
  deleteCategory,
}) => {
  const handleDelete = () => {
    setTimeout(() => deleteCategory(), 100);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='icon' variant='ghost' className='hover:bg-destructive'>
          <Icons.delete />
        </Button>
      </DialogTrigger>
      <DialogContent className='pb-4'>
        <DialogHeader className='gap-6'>
          <DialogTitle>Delete the Category?</DialogTitle>
          <DialogDescription>
            {`All templates in the category will be moved to the category "Other"`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='w-full gap-4'>
          <DialogClose asChild>
            <Button
              onClick={handleDelete}
              className='h-[58px] bg-gradient-to-r from-primary to-[#50BDFC] text-[16px] text-foreground'>
              <Icons.delete className='h-8 w-8 fill-foreground' />
              <span>Delete</span>
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant='ghost'
              className='text-[16px] text-destructive hover:bg-transparent hover:text-destructive hover:underline'>
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCategoryDialog;
