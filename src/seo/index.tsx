import { NextSeo } from "next-seo";

export function Seo() {
  return (
    <NextSeo
      title="Icaro Vieira desenvolvedor Front-End"
      description="Portfólio Icaro Vieira dev Front-End"
      twitter={{
        handle: "@IcaroVieiraFK",
        site: "https://twitter.com/IcaroVieiraFK",
        cardType: "summary_large_image",
      }}
      openGraph={{
        url: "https://icaro-vieira.vercel.app/",
        site_name: "Icaro Vieira Portfólio",
        title: "Icaro Vieira portfólio",
        description: "Icaro Vieira DEV Front-End",
        images: [
          {
            url: "https://github.com/IcaroSilvaFK.png",
            width: 800,
            height: 600,
            alt: "Icaro Vieira",
            type: "image/png",
          },
        ],
      }}
    />
  );
}
