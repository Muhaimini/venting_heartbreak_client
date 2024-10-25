import { StoreController } from "@store";
import { v4 as uuid } from "uuid";

interface Page {
  id: string;
  content: string;
}

const defaultPage: Page = { id: uuid(), content: "" };

export interface InvitationPage {
  activePage: Page;
  pages: Page[];
  setInitialPages(props: Page[]): void;
  onModifyActiveContent(props: Page): void;
  setActivePage(id: string): void;
  onRemovePage(id: string): void;
  onAddPage(): void;
}

const invitationPageStore: StoreController<{
  invitationPage: InvitationPage;
}> = ({ set }) => {
  return {
    activePage: defaultPage,
    pages: [defaultPage],

    setInitialPages: (pages) => {
      set(({ invitationPage }) => ({
        invitationPage: {
          ...invitationPage,
          pages,
        },
      }));
    },

    onModifyActiveContent: ({ id, content }) =>
      set((state) => {
        const { activePage, pages } = state.invitationPage;

        if (activePage.id === id) {
          return {
            invitationPage: {
              ...state.invitationPage,
              activePage: { id, content },
              pages: pages.map((page) =>
                page.id === id ? { ...page, content } : page
              ),
            },
          };
        }

        return state;
      }),

    onAddPage: () =>
      set(({ invitationPage }) => ({
        invitationPage: {
          ...invitationPage,
          pages: [...invitationPage.pages, { id: uuid(), content: "" }],
        },
      })),

    onRemovePage: (id: string) =>
      set(({ invitationPage }) => {
        const activePage =
          invitationPage.activePage.id === id
            ? defaultPage
            : invitationPage.activePage;

        return {
          invitationPage: {
            ...invitationPage,
            activePage,
            pages: invitationPage.pages.filter((page) => page.id !== id),
          },
        };
      }),

    setActivePage: (id: string) =>
      set(({ invitationPage }) => ({
        invitationPage: {
          ...invitationPage,
          activePage: invitationPage.pages.find((page) => page.id === id),
        },
      })),
  };
};

export default invitationPageStore;
