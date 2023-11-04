'use client';

import { FC } from 'react';

import * as SwitchPrimitives from '@radix-ui/react-switch';

import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

type CategorySwitchProps = {} & React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
>;

const CategorySwitch: FC<CategorySwitchProps> = ({ className, ...props }) => {
  return <Switch className={cn('', className)} {...props} />;
};

export default CategorySwitch;
