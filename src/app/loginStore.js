import { create } from "zustand";

import { devtools } from "zustand/middleware";
import storage from "../utils/storage";

const login = (set) => ({
    isAuthenticated: false,
    // email: "",
    // password: "",

    handleAuth: (email, pwd) => {
        set(() => {
            if (email && pwd) {
                storage.setToken(email);
                return {
                    isAuthenticated: true,
                };
            }
        });
    },
    handleLogout: () => {
        set(() => {
            storage.clearToken();
            return {
                isAuthenticated: false,
            };
        });
    },
});

const useLoginStore = create(devtools(login));

export default useLoginStore;
