"use client";

import { useState } from "react";

const clients = [
  {
    names: "VIA | DAFA",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    videos: [
      "/videos/1.%20Kirab%20bridesmaid%20keluarga.mp4",
      "/videos/2.%20Kirab%20Pengantin.mp4",
      "/videos/3.%20Speech%20Pengantin.mp4",
      "/videos/4.%20Ramah%20Tamah.mp4",
      "/videos/5.%20Flashmob.mp4",
      "/videos/6.%20Bridesmaid%20Time.mp4",
      "/videos/7.%20Pemenang%20Lomba%20Joget.mp4",
      "/videos/8.%20Lempar%20Bunga.mp4",
      "/videos/9.%20Akad%20Moment.mp4",
    ],
  },

  {
    names: "TIARA | RIFKY",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    videos: [
      "/videos/1.%20Beautyshoot%20Groom.mp4",
      "/videos/2.%20Beautyshoot%20Bride.mp4",
      "/videos/3.%20Beautyshoot%20Groom%20&%20Bride.mp4",
      "/videos/4.%20Proses%20Pasrah%20Tinampi.mp4",
      "/videos/5.%20Ijab%20Qabul.mp4",
      "/videos/6.%20Moment%20After%20Sah.mp4",
      "/videos/7.%20Proses%20Panggih.mp4",
      "/videos/8.%20Proses%20Sungkeman.mp4",
      "/videos/9.%20Beautyshoot%20After%20Sah.mp4",
      "/videos/10.%20Wedding%20Entrance.mp4",
      "/videos/11.%20Flashmoob%20&%20Lempar%20Handbucket.mp4",
      "/videos/12.%20Wedding%20Tiara%20Rifky%20(highlight%20wedding).mp4",
    ],
  },

  {
    names: "EGA | SHANIA",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop",
    videos: [
      "/videos/1.%20Dekorasi.mp4",
      "/videos/2.%20Look%20Resepsi.mp4",
      "/videos/3.%20Beautyshoot%20couple.mp4",
      "/videos/4.%20Wedding%20entrance.mp4",
      "/videos/5.%20Ramah%20tamah.mp4",
      "/videos/6.%20Ucapan%20selamat.mp4",
      "/videos/7.%20Flashmob.mp4",
      "/videos/8.%20Lempar%20bunga.mp4",
      "/videos/9.%20Beautyshoot%20after%20resepsi.mp4",
      "/videos/10.%20Beautyshoot%20after%20resepsi.mp4",
      "/videos/11.%20Wedding%20Ega%20Refy%20(highlight%20wedding).mp4",
    ],
  },

  {
    names: "DIAR | DYRGA",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
    videos: [
      "/videos/1.%20Beauty%20shoot%20groom.mp4",
      "/videos/2.%20Beauty%20shoot%20bride.mp4",
      "/videos/3.%20Prosesi%20Pasrah%20Tinampi.mp4",
      "/videos/4.%20Ijab%20qabul.mp4",
      "/videos/5.%20Moment%20After%20Sah.mp4",
      "/videos/6.%20Proses%20panggih.mp4",
      "/videos/7.%20Prosesi%20sungkeman.mp4",
      "/videos/8.%20Wedding%20Entrances.mp4",
      "/videos/9.%20Ramah%20tamah.mp4",
      "/videos/10.%20Flashmoob%20&%20lempar%20handbucket.mp4",
      "/videos/11.%20Reels%20Akad%20Nikah.mp4",
    ],
  },

  {
    names: "DANDIKA | ZIRA",
    image:
      "https://images.unsplash.com/photo-1529634806980-8c3b1f1f6c74?q=80&w=1200&auto=format&fit=crop",
    videos: [
      "/videos/1.%20Beautyshoot%20CPW.mp4",
      "/videos/2.%20Beautyshoot%20Couple.mp4",
      "/videos/3.%20Pedang%20pora.mp4",
      "/videos/4.%20Ramah%20Tamah.mp4",
      "/videos/5.%20Dance%20Time.mp4",
      "/videos/6.%20Lempar%20Bunga.mp4",
      "/videos/7.%20Karaoke%20Time.mp4",
      "/videos/8.%20Reels%20Pedang%20Pora.mp4",
    ],
  },
];

export default function Home() {
  const [selectedClient, setSelectedClient] = useState(null);

  if (selectedClient) {
    return (
      <main className="min-h-screen bg-[#f8f5ef] text-[#2f2a25]">
        <section className="mx-auto max-w-6xl px-5 py-10">
          <button
            onClick={() => setSelectedClient(null)}
            className="mb-8 text-sm text-[#9b7b55]"
          >
            ← Back to Gallery
          </button>

          <h1 className="text-center text-4xl font-serif mb-10">
            {selectedClient.names}
          </h1>

          <div className="grid gap-6 md:grid-cols-2">
            {selectedClient.videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow">
                <video
                  controls
                  controlsList="nodownload"
                  disablePictureInPicture
                  className="w-full rounded-t-xl"
                >
                  <source src={video} type="video/mp4" />
                </video>

                <p className="p-4 text-sm text-gray-600">
                  Video {index + 1}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef] p-10">
      <h1 className="text-center text-4xl font-serif mb-10">
        Client Wedding Gallery
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <button
            key={index}
            onClick={() => setSelectedClient(client)}
            className="relative rounded-xl overflow-hidden"
          >
            <img src={client.image} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-black/50 text-white p-3 text-center">
              {client.names}
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}