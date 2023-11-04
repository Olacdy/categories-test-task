type BaseCategoryType = {
  id: string;
  isOn: boolean;
};

type OtherCategoryType = {
  type?: 'other';
};

type InputCategoryType = {
  type?: 'input';
};

type RegularCategoryType = {
  type?: 'regular';
  title: string;
};

export type CategoryType = BaseCategoryType &
  (OtherCategoryType | InputCategoryType | RegularCategoryType);
