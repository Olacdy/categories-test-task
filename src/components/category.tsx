'use client';

import { FC } from 'react';

import InputCategory, {
  InputCategoryProps,
} from '@/components/categories/input-category';
import OtherCategory, {
  OtherCategoryProps,
} from '@/components/categories/other-category';
import RegularCategory, {
  RegularCategoryProps,
} from '@/components/categories/regular-category';

type CategoryProps =
  | (OtherCategoryProps & { type: 'other' })
  | (RegularCategoryProps & { type: 'regular' })
  | (InputCategoryProps & { type: 'input' });

const Category: FC<CategoryProps> = (props) => {
  if (props.type === 'other') return <OtherCategory {...props} />;

  if (props.type === 'regular') return <RegularCategory {...props} />;

  if (props.type === 'input') return <InputCategory {...props} />;

  return <p>Invalid type</p>;
};

export default Category;
