import dayjs from "dayjs";
import { Fragment } from "react";
import { FaGifts } from "react-icons/fa";
import Timeline from "~/components/timeline";

export const WELCOME_PAGE = {
  GROOM: "Aqiel",
  BRIDE: "Riris",
  DATE: new Date(),
  COVER:
    "https://images.unsplash.com/photo-1519741465751-286f6453ddf4?q=80&w=2787",
};

export const DUMMY_MUSIC =
  "https://dl.sndup.net/xqwwr/AURORA%20-%20A%20Potion%20For%20Love%20(Live%20Performance).mp3";

export const BODY = {
  TIMELINE: {
    IMG_1:
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=2795",
    IMG_2:
      "https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d?q=80&w=2940",
  },
};

export const TIMELINE_STORY = [
  {
    date: "Awal 2012",
    title: "Pertama kali kita bertemu",
    desc: "Waktu berjalan begitu cepat ya, sampe baru nyadar udah setua ini kita. tapi, ya di tahun ini lah kita bertemu di SMA",
  },
  {
    date: "Akhir 2012",
    title: "Cinta",
    desc: "Awalnya gegara temen temen kelas yang nyomblangin, sampe akhirnya salah satu dari kita ada yang baper dan mulai instens komunikasi",
  },
  {
    date: "Februari 2013",
    title: "Pupus",
    desc: "Ya, Aqile nyatain cinta tapi aku ga bisa nerima karna aku sudah jadi pacar orang. dia mungin kecewa dan komnunikasi kita terhenti",
  },
  {
    date: "Desember 2013",
    title: "Cemburu",
    desc: "Akhirnya Aqiel menemukan seseorang yang dia cari. Pikirku dulu begitu, karna dia keliatan mencitai pacarnya. Jujur, aku cemburu",
  },
  {
    date: "2014 - 2015",
    title: "Asing",
    desc: "Gak ada sama sekali kisah kita di tahun itu. so sad!",
  },
  {
    date: "2016",
    title: "Kembai",
    desc: "Kita kembali deket, karana kamu pas banget datengnya. aku stuggle sama hubunganku, terus kamu jadi obat. terimakashi ya!",
  },
  {
    date: "2017",
    title: "Masalah",
    desc: "Rahasia, jangan? hahahah",
  },
];

export const DUMMY_SECTIONS = [
  {
    id: "1",
    className: "bg-gradient-to-b from-base to-gray-900 font-delafield text-7xl",
    constent: (
      <div>
        <p>Untuk Muhaimin,</p>
        <p>dari kami yang ingin membagikan kebahagiaan padamu.</p>
      </div>
    ),
  },
  {
    id: "2",
    className: "bg-gradient-to-b from-gray-900 to-gray-800 font-delafield",
    constent: (
      <div className="text-5xl flex flex-col gap-5">
        <p>Bismillahirrahmanirrahim</p>
        <p>
          Degan ini kami mengandang penerima undangan ini untuk hadir pada
          pernikahan:
        </p>
        <div>
          {WELCOME_PAGE.GROOM} <span className="text-5xl">&</span>{" "}
          {WELCOME_PAGE.BRIDE}
        </div>
        <p>yang akan dilaksanakan pada</p>
        <div className="text-4xl">
          {dayjs(WELCOME_PAGE.DATE).format("DD MM YYYY")}
        </div>
        <p>
          Menjadi sebuah kehormatan dan kebahagiaan melihat hadirmu di acara
          kami
        </p>
      </div>
    ),
  },
  {
    id: "3",
    className: "bg-gradient-to-b from-gray-800 to-gray-600",
    constent: (
      <Fragment>
        <div className="absolute h-full w-full">
          <div className="grid grid-cols-3 gap-1 relative h-full w-full z-10">
            <div
              className="col-span-2 w-full h-full bg-cover bg-center grayscale opacity-5"
              style={{
                backgroundImage: `url(${BODY.TIMELINE.IMG_1})`,
              }}
            />
            <div />

            <div />
            <div
              className="col-span-2 w-full h-full bg-cover bg-center grayscale opacity-5"
              style={{
                backgroundImage: `url(${WELCOME_PAGE.COVER})`,
              }}
            />

            <div
              className="col-span-2 w-full h-full bg-cover bg-center grayscale opacity-5"
              style={{
                backgroundImage: `url(${BODY.TIMELINE.IMG_2})`,
              }}
            />
            <div />
          </div>
        </div>
        <div className="absolute h-full w-full z-10">
          <div className="flex items-center flex-col gap-10 justify-center h-full">
            <div className="font-delafield text-7xl">So, how we meet?</div>
            <Timeline className="w-3/4">
              {TIMELINE_STORY.map((timeline, idx) => (
                <Timeline.Section
                  last={TIMELINE_STORY.length - 1 === idx}
                  key={idx}
                >
                  <div className="flex flex-col items-start pt-1.5 pb-4">
                    <time className="mb-1 text-sm font-normal leading-none text-gray-200 dark:text-gray-500">
                      <strong>{timeline.date}</strong>
                    </time>
                    <h3 className="text-lg font-semibold text-gray-200 dark:text-white">
                      {timeline.title}
                    </h3>
                    <p className="text-base font-normal text-gray-400 dark:text-gray-300">
                      {timeline.desc}
                    </p>
                  </div>
                </Timeline.Section>
              ))}
            </Timeline>
          </div>
        </div>
      </Fragment>
    ),
  },
  {
    id: "4",
    className: "bg-gradient-to-b from-gray-600 to-gray-400",
    constent: (
      <div className="font-delafield text-7xl px-10 text-gray-900 flex items-center justify-center flex-col">
        <p>Riri, aku mencintaimu!</p>
        <p>- Aqiel</p>
      </div>
    ),
  },
  {
    id: "5",
    className: "bg-gradient-to-b from-gray-400 to-gray-200 text-gray-500",
    constent: (
      <div className="grid grid-cols-3 gap-1 relative h-full w-full overflow-hidden">
        <div className="font-delafield text-5xl px-10 absolute text-black h-full flex items-center justify-center flex-col">
          <p>
            Aku ingin mencintaimu dengan sederhana Dengan kata yang tak sempat
            diucapkan kayu Kepada api yang menjadikannya abu Aku ingin
            mencintaimu dengan sederhana Dengan isyarat yang tak sempat
            disampaikan awan Kepada hujan yang menjadikannya tiada
          </p>
          <p>- Sapardi Djoko Damnono</p>
        </div>
        <div className="overflow-hidden">
          <div
            className="w-full h-full bg-cover transition-transform duration-500 hover:scale-110 bg-center grayscale opacity-10 bg-red-400"
            style={{
              backgroundImage: `url(${BODY.TIMELINE.IMG_1})`,
            }}
          ></div>
        </div>

        <div className="overflow-hidden">
          <div
            className="w-full h-full bg-cover transition-transform duration-500 hover:scale-110 bg-center grayscale opacity-10 bg-red-400"
            style={{
              backgroundImage: `url(${WELCOME_PAGE.COVER})`,
            }}
          ></div>
        </div>

        <div className="overflow-hidden">
          <div
            className="w-full h-full bg-cover transition-transform duration-500 hover:scale-110 bg-center grayscale opacity-10 bg-red-400"
            style={{
              backgroundImage: `url(${BODY.TIMELINE.IMG_2})`,
            }}
          ></div>
        </div>

        <div className="overflow-hidden col-span-2">
          <div
            className="w-full h-full bg-cover transition-transform duration-500 hover:scale-110 bg-center grayscale opacity-10 bg-red-400"
            style={{
              backgroundImage: `url(${WELCOME_PAGE.COVER})`,
            }}
          ></div>
        </div>

        <div className="overflow-hidden">
          <div
            className="w-full h-full bg-cover transition-transform duration-500 hover:scale-110 bg-center grayscale opacity-10 bg-red-400"
            style={{
              backgroundImage: `url(${WELCOME_PAGE.COVER})`,
            }}
          ></div>
        </div>

        <div className="overflow-hidden">
          <div
            className="w-full h-full bg-cover transition-transform duration-500 hover:scale-110 bg-center grayscale opacity-10 bg-red-400"
            style={{
              backgroundImage: `url(${BODY.TIMELINE.IMG_1})`,
            }}
          ></div>
        </div>

        <div className="overflow-hidden col-span-2">
          <div
            className="w-full h-full bg-cover transition-transform duration-500 hover:scale-110 bg-center grayscale opacity-10 bg-red-400"
            style={{
              backgroundImage: `url(${WELCOME_PAGE.COVER})`,
            }}
          ></div>
        </div>
      </div>
    ),
  },
  {
    id: "6",
    className: "bg-gradient-to-b from-gray-200 to-gray-50 text-gray-600",
    constent: (
      <div className="flex items-center justify-center flex-col">
        <FaGifts className="w-20 h-20 text-black" />
        <div className="text-black font-delafield text-4xl">Thank you!</div>
      </div>
    ),
  },
  {
    id: "7",
    className: "bg-gradient-to-b from-gray-50 to-white text-gray-700 hidden",
    constent: (
      <div className="grid grid-cols-3 gap-1 relative h-full w-full">
        <div className="bg-red-400"></div>
        <div className="bg-blue-500"></div>
        <div className="bg-blue-300"></div>
        <div className="col-span-2 bg-green-500"></div>
        <div className="bg-yellow-500"></div>
        <div className="bg-orange-500"></div>
        <div className="col-span-2 bg-purple-500"></div>
      </div>
    ),
  },
];
