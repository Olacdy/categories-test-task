import { create } from 'zustand';

type SearchStateType = {
  search: string;
  setSearch: (search: string) => void;
  clearSearch: () => void;
};

const useSearchStore = create<SearchStateType>((set) => ({
  search: '',
  setSearch: (search) => set(() => ({ search: search })),
  clearSearch: () => set(() => ({ search: '' })),
}));

export default useSearchStore;
