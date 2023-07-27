import { create } from "zustand";

interface NotificationModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  totalAlert: number;
  setTotalAlert: (value: number) => void;
  incrementTotalAlert: () => void;
  decrementTotalAlert: () => void;
}

const useNotificationModal = create<NotificationModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  totalAlert: 0,
  setTotalAlert: (value) => set({ totalAlert: value }),
  incrementTotalAlert: () =>
    set((state) => ({ totalAlert: state.totalAlert + 1 })),
  decrementTotalAlert: () =>
    set((state) => ({ totalAlert: state.totalAlert - 1 })),
}));

export default useNotificationModal;
