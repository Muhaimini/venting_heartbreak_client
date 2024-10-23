import { useRouter } from "next/navigation";
import NAVIGATION_ADDRESS from "~/constants/navigation_addess";
import { InvitationTheme } from "~/types/responses/invitation-theme";
import cx from "classnames";
const InvitationTemeCard = (invitation: InvitationTheme) => {
  const router = useRouter();

  const onClickInvitationCard = () => {
    if (!invitation.id) return;
    router.push(`${NAVIGATION_ADDRESS.THEMES}/${invitation.id}`);
  };

  return (
    <div
      onClick={onClickInvitationCard}
      className="bg-white border rounded-xl shadow-md sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 group cursor-pointer hover:border-white"
    >
      <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
        <img
          className="size-full absolute top-0 start-0 object-cover transition-transform duration-500 group-hover:scale-110"
          src={invitation?.img_cover}
          alt="Card Image"
        />
        <div className="absolute rounded-md px-2 text-xl mt-1 text-gray-500 dark:text-neutral-400 z-10 right-2 bottom-3 group-hover:bg-white group-hover:text-black">
          {invitation?.theme_layout?.name}
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 flex flex-col h-full sm:p-7">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {invitation?.label}
          </h3>
          <p className="mt-1 text-gray-500 dark:text-neutral-400">
            {invitation?.description}
          </p>
          <div className="mt-5 sm:mt-auto">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              {invitation?.created_at}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationTemeCard;
