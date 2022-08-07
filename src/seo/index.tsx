import { NextSeo } from 'next-seo';

export function Seo() {
  return (
    <NextSeo
      title="Icaro Vieira desenvolvedor Front-End"
      description="Portfólio Icaro Vieira dev Front-End"
      twitter={{
        handle: '@IcaroVieiraFK',
        site: 'https://twitter.com/IcaroVieiraFK',
        cardType: 'summary_large_image',
      }}
      openGraph={{
        url: 'https://icaro.fun/',
        site_name: 'Icaro Vieira Portfólio',
        title: 'Icaro Vieira portfólio',
        description: 'Icaro Vieira DEV Front-End',
        images: [
          {
            url: 'https://github.com/IcaroSilvaFK.png',
            width: 460,
            height: 460,
            alt: 'Icaro Vieira',
            type: 'image/png',
          },
        ],
      }}
    />
  );
}
