"use client";

import { useState } from "react";

const clients = [
  {
    title: "The Wedding of",
    names: "DIAR | DYRGA",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
    folderLink: "https://drive.google.com/drive/folders/1ePQZOOhfUEj1l7_BqmDmZMTvf0fttfZW?usp=sharing",
    videos: [
      // isi dengan ID dari streamable, contoh: "abcd12"
    ],
  },
  {
    title: "The Wedding of",
    names: "TIARA | RIFKY",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    folderLink: "https://drive.google.com/drive/folders/1VyX1yM7pkeXojwXBmd5ST2KxSoXpe9Qi?usp=sharing",
    videos: [
      // isi dengan ID dari streamable, contoh: "abcd12"
    ],
  },
  {
    title: "The Wedding of",
    names: "EGA | SHANIA",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop",
    folderLink: "https://drive.google.com/drive/folders/1ftF5xFxxZGlTpNyitYFQbr6oEX8O2SDa?usp=sharing",
    videos: [
      // isi dengan ID dari streamable, contoh: "abcd12"
    ],
  },
  {
    title: "The Wedding of",
    names: "VIA | DAFA",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    folderLink: "https://drive.google.com/drive/folders/1JcXaJkZ5qj9oEFWqUwvcgwGPNlJPnMJp?usp=sharing",
    videos: [
      "ol4m5k",
      "26hfni",
      "vqkhcd",
      "g5kkkb",
      "zdin53",
      "0iy1qj",
      "tzwmtg",
      "tsiw16",
      "2stt2f",
    ],
  },
  {
    title: "The Wedding of",
    names: "DANDIKA | ZIRA",
    image: "https://images.unsplash.com/photo-1529634806980-8c3b1f1f6c74?q=80&w=1200&auto=format&fit=crop",
    folderLink: "https://drive.google.com/drive/folders/1OHcheeOuIci-cO97UaAaOvwc2Ai2DAyM?usp=sharing",
    videos: [
      // isi dengan ID dari streamable, contoh: "abcd12"
    ],
  },
];

export default function Home() {
  const [selectedClient, setSelectedClient] = useState(null);

  if (selectedClient) {
    return (
      <main className="min-h-screen bg-[#f8f5ef] text-[#2f2a25]">
        <section className="mx-auto max-w-6xl px-5 py-8 md:px-10 md:py-12">
          <button
            onClick={() => setSelectedClient(null)}
            className="mb-8 rounded-full border border-[#9b7b55]/30 px-5 py-2 text-sm text-[#9b7b55] transition hover:bg-[#9b7b55] hover:text-white"
          >
            ← Back to Gallery
          </button>

          <header className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#9b7b55]">
              The Wedding of
            </p>
            <h1 className="font-serif text-4xl font-light tracking-wide md:text-6xl">
              {selectedClient.names}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#6d6259] md:text-base">
              Play your wedding moments directly from this page.
            </p>
          </header>

          <div className="grid gap-7 md:grid-cols-2">
            {selectedClient.videos.map((videoId, index) => (
              <div
                key={videoId}
                className="overflow-hidden rounded-[26px] bg-white shadow-md"
              >
                <iframe
                  src={`https://streamable.com/e/${videoId}`}
                  className="aspect-video w-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={`${selectedClient.names} Video ${index + 1}`}
                />
                <div className="px-5 py-4">
                  <p className="text-sm font-medium text-[#6d6259]">
                    Video {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#2f2a25]">
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-16">
        <header className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#9b7b55]">
            DihariVisual
          </p>
          <h1 className="font-serif text-4xl font-light tracking-wide md:text-6xl">
            Client Wedding Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#6d6259] md:text-base">
            Select your moment and open your private wedding video gallery.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => (
            <button
              key={index}
              onClick={() => setSelectedClient(client)}
              className="group relative block aspect-[4/5] overflow-hidden rounded-[28px] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={client.image}
                alt={client.names}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
                <p className="mb-1 text-xs uppercase tracking-[0.25em] opacity-90">
                  {client.title}
                </p>
                <h2 className="font-serif text-2xl font-light tracking-wide">
                  {client.names}
                </h2>
              </div>
            </button>
          ))}
        </div>

        <footer className="mt-12 text-center text-sm text-[#7a6f65]">
          <p>For questions or access issues, please contact us on Instagram.</p>
          <a
            href="https://instagram.com/DihariVisual"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-medium text-[#9b7b55] hover:underline"
          >
            @DihariVisual
          </a>
        </footer>
      </section>
    </main>
  );
}
