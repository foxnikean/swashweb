import { create } from "zustand";

const useBearStore = create((set) =>({
    bears: 0,
    increasePop:() => set((state) => ({bears:state.bears + 1})),
    removeAllBears : () => set({bears:0})
}))

export default useBearStore