"use client";

import React, { useRef, useState } from "react";
import useQueryParams from "~/hooks/customs/use-query-params";
import useGetInvitationThemeDetails from "~/hooks/queries/use-get-invitation-theme-detalis";

import "~/styles/book_effects.scss";

const ThemesByCategory = () => {
  const params = useQueryParams();
  const id = params?.id as string;

  const { data: invitationThemeDetails } = useGetInvitationThemeDetails({
    id,
    enabled: !!id,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pagesRef = useRef<(HTMLDivElement | null)[]>(Array(10).fill(null));

  const toggleClass = (e: HTMLElement, toggleClassName: string) => {
    if (e.className.includes(toggleClassName)) {
      e.className = e.className.replace(" " + toggleClassName, "");
    } else {
      e.className += " " + toggleClassName;
    }
  };

  const movePage = (e: HTMLElement, page: number) => {
    if (page === currentPage) {
      setCurrentPage((prev) => prev + 2);
      toggleClass(e, "left-side");
      toggleClass(e?.nextElementSibling! as any, "left-side");
    } else if (page === currentPage - 1) {
      // Corrected here
      setCurrentPage((prev) => prev - 2);
      toggleClass(e, "left-side");
      toggleClass(e?.previousElementSibling! as any, "left-side");
    }
  };

  return (
    <div className="book">
      <div
        className="page cover-front"
        // style={{
        //   backgroundImage: `url('${invitationThemeDetails?.data?.img_cover}')`,
        // }}
        onClick={(e) => movePage(e.currentTarget, 1)}
        ref={(el) => (pagesRef.current[1] = el) as any}
      >
        <h1>{invitationThemeDetails?.data?.label}</h1>
        <div className="hat">
          <i className="fab fa-pied-piper-hat"></i>
        </div>
        <h2>{invitationThemeDetails?.data?.description}</h2>
      </div>
      <div
        className="page cover-front"
        onClick={(e) => movePage(e.currentTarget, 2)}
        ref={(el) => (pagesRef.current[2] = el) as any}
      ></div>
      <div
        className="page text-page"
        onClick={(e) => movePage(e.currentTarget, 3)}
        ref={(el) => (pagesRef.current[3] = el) as any}
      >
        <div className="paragraph">
          Mrs. Dalloway said she would buy the flowers herself.
        </div>
        <div className="paragraph">
          For Lucy had her work cut out for her. The doors would be taken off
          their hinges; Rumpelmayer's men were coming. And then, thought
          Clarissa Dalloway, what a morning--fresh as if issued to children on a
          beach.
        </div>
        <div className="paragraph">
          What a lark! What a plunge! For so it had always seemed to her, when,
          with a little squeak of the hinges, which she could hear now, she had
          burst open the French windows and plunged at Bourton into the open
          air. How fresh, how calm, stiller than this of course, the air was in
          the early morning; like the flap of a wave; the kiss of a wave; chill
          and sharp and yet (for a girl of eighteen as she then was) solemn,
          feeling as she did, standing there at the open window, that something
          awful was about to happen; looking at the flowers, at the trees with
          the smoke winding off them and the rooks rising, falling; standing and
          looking until Peter Walsh said, "Musing among the vegetables?"--was
          that it?--"I prefer men to cauliflowers"--was that it? He must have
          said it at breakfast one morning when she had gone out on to the
          terrace--Peter Walsh. He would be back from India one of these days,
          June or July, she forgot which, for his letters were awfully dull; it
          was his sayings one remembered; his eyes, his pocket-knife, his smile,
          his grumpiness and, when millions of things had utterly
        </div>
      </div>

      <div
        className="page text-page"
        onClick={(e) => movePage(e.currentTarget, 4)}
        ref={(el) => (pagesRef.current[4] = el) as any}
      >
        <div className="paragraph">
          vanished--how strange it was!--a few sayings like this about cabbages.
        </div>
        <div className="paragraph">
          She stiffened a little on the kerb, waiting for Durtnall's van to
          pass. A charming woman, Scrope Purvis thought her (knowing her as one
          does know people who live next door to one in Westminster); a touch of
          the bird about her, of the jay, blue-green, light, vivacious, though
          she was over fifty, and grown very white since her illness. There she
          perched, never seeing him, waiting to cross, very upright.
        </div>
        <div className="paragraph">
          For having lived in Westminster--how many years now? over twenty,--one
          feels even in the midst of the traffic, or waking at night, Clarissa
          was positive, a particular hush, or solemnity; an indescribable pause;
          a suspense (but that might be her heart, affected, they said, by
          influenza) before Big Ben strikes. There! Out it boomed. First a
          warning, musical; then the hour, irrevocable. The leaden circles
          dissolved in the air. Such fools we are, she thought, crossing
          Victoria Street. For Heaven only knows why one loves it so, how one
          sees it so, making it up, building it round one, tumbling it, creating
          it every moment afresh; but the veriest frumps, the most dejected of
          miseries sitting on doorsteps (drink their downfall) do the same;
          can't be dealt with, she felt positive, by Acts of Parliament for that
          very reason: they love life. In people's eyes, in the swing, tramp,
          and trudge; in the bellow and
        </div>
      </div>

      <div
        className="page text-page"
        onClick={(e) => movePage(e.currentTarget, 5)}
        ref={(el) => (pagesRef.current[5] = el) as any}
      >
        <div className="paragraph">
          the uproar; the carriages, motor cars, omnibuses, vans, sandwich men
          shuffling and swinging; brass bands; barrel organs; in the triumph and
          the jingle and the strange high singing of some aeroplane overhead was
          what she loved; life; London; this moment of June.
        </div>
        <div className="paragraph">
          For it was the middle of June. The War was over, except for some one
          like Mrs. Foxcroft at the Embassy last night eating her heart out
          because that nice boy was killed and now the old Manor House must go
          to a cousin; or Lady Bexborough who opened a bazaar, they said, with
          the telegram in her hand, John, her favourite, killed; but it was
          over; thank Heaven--over. It was June. The King and Queen were at the
          Palace. And everywhere, though it was still so early, there was a
          beating, a stirring of galloping ponies, tapping of cricket bats;
          Lords, Ascot, Ranelagh and all the rest of it; wrapped in the soft
          mesh of the grey-blue morning air, which, as the day wore on, would
          unwind them, and set down on their lawns and pitches the bouncing
          ponies, whose forefeet just struck the ground and up they sprung, the
          whirling young men, and laughing girls in their transparent muslins
          who, even now, after dancing all night, were taking their absurd
          woolly dogs for a run; and even now, at this hour, discreet old
          dowagers were shooting out in their motor cars on errands of mystery;
          and the shopkeepers were fidgeting in their windows with their paste
          and diamonds, their lovely old sea-green brooches in
        </div>
      </div>
      <div
        className="page text-page"
        onClick={(e) => movePage(e.currentTarget, 6)}
        ref={(el) => (pagesRef.current[6] = el) as any}
      >
        <div className="paragraph">
          eighteenth-century settings to tempt Americans (but one must
          economise, not buy things rashly for Elizabeth), and she, too, loving
          it as she did with an absurd and faithful passion, being part of it,
          since her people were courtiers once in the time of the Georges, she,
          too, was going that very night to kindle and illuminate; to give her
          party. But how strange, on entering the Park, the silence; the mist;
          the hum; the slow-swimming happy ducks; the pouched birds waddling;
          and who should be coming along with his back against the Government
          buildings, most appropriately, carrying a despatch box stamped with
          the Royal Arms, who but Hugh Whitbread; her old friend Hugh--the
          admirable Hugh!
        </div>
        <div className="paragraph">
          "Good-morning to you, Clarissa!" said Hugh, rather extravagantly, for
          they had known each other as children. "Where are you off to?"
        </div>
        <div className="paragraph">
          "I love walking in London," said Mrs. Dalloway. "Really it's better
          than walking in the country."
        </div>
      </div>
      <div
        className="page"
        onClick={(e) => movePage(e.currentTarget, 7)}
        ref={(el) => (pagesRef.current[7] = el) as any}
      >
        <div className="paragraph h-full w-full flex items-center justify-center">
          Terimakasih!
        </div>
      </div>
      <div
        className="page"
        onClick={(e) => movePage(e.currentTarget, 8)}
        ref={(el) => (pagesRef.current[8] = el) as any}
      ></div>
      <div
        className="page last-page"
        onClick={(e) => movePage(e.currentTarget, 9)}
        ref={(el) => (pagesRef.current[9] = el) as any}
      ></div>
      <div
        className="page last-page"
        onClick={(e) => movePage(e.currentTarget, 10)}
        ref={(el) => (pagesRef.current[10] = el) as any}
      ></div>
    </div>
  );
};

export default ThemesByCategory;
