import { create } from 'zustand'

interface ExampleArrInter {
  arr: number[],
  add: (num: number) => void,
  remove: (index: number) => void,
}

const UseExampleZustandArrStore = create<ExampleArrInter>()((set) => ({
  arr: [853, 455],
  add: (num) => set((state) => ({ arr: [...state.arr, num] })),
  remove(index) {
      set((state) => ({
        arr: [...state.arr.slice(0, index), ...state.arr.slice(index, length)]
      }))
  },
}));

export default UseExampleZustandArrStore;