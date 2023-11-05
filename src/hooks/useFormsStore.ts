import { create } from 'zustand';

import { type UseFormReturn } from 'react-hook-form';

type FormsStateType = {
  forms: UseFormReturn<{ title: string }, any, undefined>[];
  addForm: (form: UseFormReturn<{ title: string }, any, undefined>) => void;
  setForms: (forms: UseFormReturn<{ title: string }, any, undefined>[]) => void;
  clearForms: () => void;
};

const useFormsStore = create<FormsStateType>((set) => ({
  forms: [],
  addForm: (form) => set((state) => ({ forms: [form, ...state.forms] })),
  setForms: (forms) => set(() => ({ forms: forms })),
  clearForms: () => set(() => ({ forms: [] })),
}));

export default useFormsStore;
