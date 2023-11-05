type BaseCategoryType = {
  id: string;
  isOn: boolean;
};

type OtherCategoryType = {
  type?: 'other';
};

type RegularCategoryType = {
  type?: 'regular' | 'input';
  title: string;
};

export type CategoryType = BaseCategoryType &
  (OtherCategoryType | RegularCategoryType);
