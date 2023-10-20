// Import core
import React from 'react';
// Import third parts
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
// Import customs
import AboutDesktop from '../../components/Desktop/About';
import ReadingListDesktop from '../../components/Desktop/ReadingList';
import ToReadListDesktop from '../../components/Desktop/ToReadList';
import MusicListDesktop from '../../components/Desktop/Music';
import PhotosDesktop from '../../components/Desktop/Photos';
import ContactDesktop from '../../components/Desktop/Contact';
import CookiesDesktop from '../../components/Desktop/Cookies';
import FooterDesktop from '../../components/Desktop/Footer';
import MemoDesktop from '../../components/Desktop/Memo';
import NewsletterDesktop from '../../components/Desktop/Newsletter';
import ProjectsDesktop from '../../components/Desktop/Projects';
import IntroDesktop from '../../components/Desktop/Intro';
import AboutMobile from '../../components/Mobile/About';
import ProjectsMobile from '../../components/Mobile/Projects';
import FooterMobile from '../../components/Mobile/Footer';
import CookiesMobile from '../../components/Mobile/Cookies';
import ContactMobile from '../../components/Mobile/Contact';
import NewsletterMobile from '../../components/Mobile/Newsletter';
import ReadingListMobile from '../../components/Mobile/ReadingList';
import ToReadListMobile from '../../components/Mobile/ToReadList';
import MusicMobile from '../../components/Mobile/Music';
import PhotosMobile from '../../components/Mobile/Photos';
import MemoMobile from '../../components/Mobile/Memo';

export const revalidate = 6000;

const query_readingList = groq`
  *[_type=='readingList' && visible == true ] {
    ...,
  } | order(_createdAt asc)
`;

const query_toReadList = groq`
  *[_type=='toReadList' && visible == true ] {
    ...,
  } | order(_createdAt asc)
`;

const query_musicList = groq`
  *[_type=='musicList' && visible == true ] {
    ...,
  } | order(_createdAt asc)
`;

const query_photos = groq`
  *[_type=='photos' && visible == true ] {
    ...,
  } | order(_createdAt asc)
`;

const query_projects = groq`
  *[_type=='projects' && visible == true ] {
    ...,
  } | order(order asc)
`;

export default async function HomePage() {
  const readingList = await client.fetch(query_readingList);
  const toReadList = await client.fetch(query_toReadList);
  const musicList = await client.fetch(query_musicList);
  const photos = await client.fetch(query_photos);
  const projects = await client.fetch(query_projects);

  return (
    <>
      <div className="overscroll-none hidden md:flex">
        <IntroDesktop />
        <AboutDesktop />
        <ContactDesktop />
        <CookiesDesktop />
        <FooterDesktop />
        <MemoDesktop />
        <NewsletterDesktop />
        <ReadingListDesktop readingList={readingList} />
        <ToReadListDesktop toReadList={toReadList} />
        <MusicListDesktop musicList={musicList} />
        <PhotosDesktop photos={photos} />
        <ProjectsDesktop projects={projects} />
      </div>
      <div className="overflow-y-scroll py-20 grid gap-y-10 grid-cols-2 sm:grid-cols-4 justify-items-center md:hidden">
        <AboutMobile />
        <ContactMobile />
        <CookiesMobile />
        <FooterMobile />
        <MemoMobile />
        <NewsletterMobile />
        <ReadingListMobile />
        <ToReadListMobile />
        <MusicMobile />
        <PhotosMobile />
        <ProjectsMobile />
      </div>
    </>
  );
}
