'use client';

import { ChangeEvent, FC, useEffect } from 'react';

import { Draggable } from 'react-beautiful-dnd';

import { Icons } from '@/components/icons';

import CategorySwitch from '@/components/category-switch';
import DeleteCategoryDialog from '@/components/delete-category-dialog';

import { cn } from '@/lib/utils';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useFormsStore from '@/hooks/useFormsStore';
import { CategoryType } from '@/types/category';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export type InputCategoryProps = {
  category: CategoryType;
  index: number;
  handleTitleChange: (id: string, title: string) => void;
  deleteCategory: (id: string) => void;
  switchCategory: (id: string) => void;
};

const categoryTitleSchema = z.object({
  title: z.string().min(1),
});

const InputCategory: FC<InputCategoryProps> = ({
  category,
  index,
  handleTitleChange,
  deleteCategory,
  switchCategory,
}) => {
  const addForm = useFormsStore((state) => state.addForm);

  const form = useForm<z.infer<typeof categoryTitleSchema>>({
    resolver: zodResolver(categoryTitleSchema),
    defaultValues: {
      title: '',
    },
  });

  useEffect(() => {
    addForm(form);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;

    handleTitleChange(category.id, title);
    form.setValue('title', title);
  };

  return (
    <Draggable draggableId={'category-' + category.id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            boxShadow: snapshot.isDragging ? '0 0 .4rem #666' : 'none',
          }}>
          <Form {...form}>
            <form
              className={cn('category-item', {
                'border border-red-600': form.formState.errors.title,
              })}>
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <Input
                        placeholder='Enter Category Name'
                        className='border-0 bg-transparent px-0 placeholder:select-none placeholder:text-category-title-muted focus-visible:ring-0 focus-visible:ring-offset-0'
                        {...field}
                        value={category.title}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className='flex w-full max-w-[121px] items-center justify-between'>
                <CategorySwitch
                  checked={category.isOn}
                  onCheckedChange={() => switchCategory(category.id)}
                />
                <DeleteCategoryDialog
                  deleteCategory={() => deleteCategory(category.id)}
                />
                <span {...provided.dragHandleProps}>
                  <Icons.dragAndDrop className='h-6 w-6 cursor-grab p-1' />
                </span>
              </div>
            </form>
          </Form>
        </li>
      )}
    </Draggable>
  );
};

export default InputCategory;
