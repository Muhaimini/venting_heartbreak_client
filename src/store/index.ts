import { create } from "zustand";
import invitationPageStore, { InvitationPage } from "~/store/invitation_page";

interface StoreState {
  invitationPage: InvitationPage;
}

const useStore = create<StoreState>((set: any) => {
  const invitationPage = invitationPageStore({ set });
  return { invitationPage };
});

export default useStore;
