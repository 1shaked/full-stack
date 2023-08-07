import { create } from 'zustand'

interface BearState {
  bears: number, // state
  increase: (by: number) => void // action 
}
// create the store to use
const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

export default useBearStore;