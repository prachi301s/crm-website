import { create } from "zustand";

import { devtools } from "zustand/middleware";

const modalStore = (set) => ({
   

    openModal: (key) => {
        set(() => {
            return {
                [key]: true,
            };
        });
    },
    closeModal: (key) => {
        set(() => ({
            [key]: false,
        }));
    },
});

const useModalStore = create(devtools(modalStore));

export default useModalStore;