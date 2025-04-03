import { create } from 'zustand';

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: function () {
    set((state) => ({ bears: state.bears + 1 }));
  },
  removeAllBears: function () {
    set({ bears: 0 });
  },
}));

export default useStore;
