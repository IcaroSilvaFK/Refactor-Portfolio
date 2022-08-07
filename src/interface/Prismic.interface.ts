export interface IPrismcPosts {
  data: {
    content: [{ text: string }];
    image: {
      alt: string;
      url: string;
    };
    title: [
      {
        text: string;
      },
    ];
    deployed: boolean;
    url: {
      url: string;
    };
    tecnologies: [{ tecs: { url: string; alt: string } }];
  };
  id: string;
}
