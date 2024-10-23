"use client";

import React from "react";
import Polaroid from "~/components/polaroid";
import useAudioPlayer from "~/hooks/customs/use-audio-player";
import useFlipBook from "~/hooks/customs/use-flip-book";
// import useQueryParams from "~/hooks/customs/use-query-params";
// import useGetInvitationThemeDetails from "~/hooks/queries/use-get-invitation-theme-detalis";

const FlipBook = () => {
  //   const params = useQueryParams();
  //   const id = params?.id as string;

  //   const { data: invitationThemeDetails } = useGetInvitationThemeDetails({
  //     id,
  //     enabled: !!id,
  //   });

  const { onPlay, onPause } = useAudioPlayer({
    src: "https://dl.sndup.net/sjsrb/Fourtwnty%20-%20Sebelah%20Mata.mp3",
  });

  const { onMovePage, refPage } = useFlipBook();

  return (
    <div className="relative h-screen w-screen overflow-y-hidden">
      <div className="book">
        <div
          className="page cover-front"
          onClick={(e) => {
            onMovePage(e.currentTarget, 1);
            onPlay();
          }}
          ref={refPage}
        >
          <div className="h-5/6 flex items-center justify-center">
            <div>
              <h1>Aku dan kamu</h1>
              <p>Sebuah mimpi yang menjadi nyata</p>
            </div>
          </div>
        </div>
        <div
          className="page cover-front"
          onClick={(e) => {
            onMovePage(e.currentTarget, 2);
            onPause();
          }}
          ref={refPage}
        ></div>
        <div
          className="page text-page"
          onClick={(e) => onMovePage(e.currentTarget, 3)}
          ref={refPage}
        >
          <div className="paragraph flex flex-col">
            <span>
              Untuk <strong className="text-xl">Muhaimin</strong>,
            </span>
            <span>yang gantengnya ngalahin Jokowi</span>
          </div>
          <div className="paragraph">
            Kami mengundangmu untuk acara pernikahan kami. yang akan segera
            dilaksanakan pada:
          </div>
          <div className="paragraph">Besok, pukul 10:00 WIB.</div>
          <div className="paragraph">Can't wait, senang melihatmu nanti!</div>
        </div>

        <div
          className="page text-page"
          onClick={(e) => onMovePage(e.currentTarget, 4)}
          ref={refPage}
        >
          <div className="paragraph">
            vanished--how strange it was!--a few sayings like this about
            cabbages.
          </div>
          <div className="paragraph">
            She stiffened a little on the kerb, waiting for Durtnall's van to
            pass. A charming woman, Scrope Purvis thought her (knowing her as
            one does know people who live next door to one in Westminster); a
            touch of the bird about her, of the jay, blue-green, light,
            vivacious, though she was over fifty, and grown very white since her
            illness. There she perched, never seeing him, waiting to cross, very
            upright.
          </div>
          <div className="paragraph">
            For having lived in Westminster--how many years now? over
            twenty,--one feels even in the midst of the traffic, or waking at
            night, Clarissa was positive, a particular hush, or solemnity; an
            indescribable pause; a suspense (but that might be her heart,
            affected, they said, by influenza) before Big Ben strikes. There!
            Out it boomed. First a warning, musical; then the hour, irrevocable.
            The leaden circles dissolved in the air. Such fools we are, she
            thought, crossing Victoria Street. For Heaven only knows why one
            loves it so, how one sees it so, making it up, building it round
            one, tumbling it, creating it every moment afresh; but the veriest
            frumps, the most dejected of miseries sitting on doorsteps (drink
            their downfall) do the same; can't be dealt with, she felt positive,
            by Acts of Parliament for that very reason: they love life. In
            people's eyes, in the swing, tramp, and trudge; in the bellow and
          </div>
        </div>

        <div
          className="page text-page"
          onClick={(e) => onMovePage(e.currentTarget, 5)}
          ref={refPage}
        >
          <div className="paragraph">
            the uproar; the carriages, motor cars, omnibuses, vans, sandwich men
            shuffling and swinging; brass bands; barrel organs; in the triumph
            and the jingle and the strange high singing of some aeroplane
            overhead was what she loved; life; London; this moment of June.
          </div>
          <div className="my-4">
            <Polaroid src="https://images.unsplash.com/photo-1729429950870-6e8790477f4a?q=80&w=2940" />
          </div>
          <div className="paragraph">
            For it was the middle of June. The War was over, except for some one
            like Mrs. Foxcroft at the Embassy last night eating her heart out
            because that nice boy was killed and now the old Manor House must go
            to a cousin; or Lady Bexborough who opened a bazaar, they said, with
            the telegram in her hand, John, her favourite, killed; but it was
            over; thank Heaven--over. It was June. The King and Queen were at
            the Palace.
          </div>
        </div>
        <div
          className="page text-page"
          onClick={(e) => onMovePage(e.currentTarget, 6)}
          ref={refPage}
        >
          <div className="paragraph">
            eighteenth-century settings to tempt Americans (but one must
            economise, not buy things rashly for Elizabeth), and she, too,
            loving it as she did with an absurd and faithful passion, being part
            of it, since her people were courtiers once in the time of the
            Georges, she, too, was going that very night to kindle and
            illuminate; to give her party. But how strange, on entering the
            Park, the silence; the mist; the hum; the slow-swimming happy ducks;
            the pouched birds waddling; and who should be coming along with his
            back against the Government buildings, most appropriately, carrying
            a despatch box stamped with the Royal Arms, who but Hugh Whitbread;
            her old friend Hugh--the admirable Hugh!
          </div>
          <div className="paragraph">
            "Good-morning to you, Clarissa!" said Hugh, rather extravagantly,
            for they had known each other as children. "Where are you off to?"
          </div>
          <div className="paragraph">
            "I love walking in London," said Mrs. Dalloway. "Really it's better
            than walking in the country."
          </div>
        </div>
        <div
          className="page"
          onClick={(e) => onMovePage(e.currentTarget, 7)}
          ref={refPage}
        >
          <div className="paragraph h-full w-full flex items-center justify-center">
            Kami yang kelak membagikan kebahagian padamu!
          </div>
        </div>
        <div
          className="page"
          onClick={(e) => onMovePage(e.currentTarget, 8)}
          ref={refPage}
        ></div>
        <div
          className="page last-page"
          onClick={(e) => {
            onMovePage(e.currentTarget, 9);
            onPause();
          }}
          ref={refPage}
        ></div>
        <div
          className="page last-page"
          onClick={(e) => {
            onMovePage(e.currentTarget, 10);
            onPlay();
          }}
          ref={refPage}
        ></div>
      </div>
    </div>
  );
};

export default FlipBook;
