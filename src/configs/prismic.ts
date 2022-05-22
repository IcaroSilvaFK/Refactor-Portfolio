import * as prismic from "@prismicio/client";

export const prismicClient = prismic.createClient(
  process.env.NEXT_PUBLIC_PRISMIC_APPLCIATION_NAME,
  {
    accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCSSESTOKEN,
  }
);
