import { create } from "zustand";

import { devtools } from "zustand/middleware";

const modalStore = (set) => ({
  contact: false,
  deleteContact: false,
  nonExistent: false,
  scheduleCall: false,
  passNote: false,
  sendTemplate: false,
  sendMessage: false,
  sentLastOrderAmount: false,
  customerSearch: false,
  modifyCustomerData: false,
  editPendingCall: false,
  completeCall: false,
  deleteCall: false,
  paymentMethod: false,
  modifyOrderLine: false,
  stockProduct: false,
  packData: false,
  deletePackData: false,
  selectProduct: false,

  mobileCallDelete: false,
  mobileCallEdit: false,
  sendEmail: false,
  editStockProduct: false,
  deleteStockProduct: false,
  editStockPacks: false,
  deleteStockPacks: false,
  viewRow: false,
  payToOrder: false,
  manageClaims: false,
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
