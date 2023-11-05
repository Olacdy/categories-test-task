import { create } from 'zustand';

type SearchStateType = {
  search: string;
  setSearch: (search: string) => void;
};

const useSearchStore = create<SearchStateType>((set) => ({
  search: '',
  setSearch: (search) => set(() => ({ search: search })),
}));

export default useSearchStore;
