import React from 'react'
import { getTopSharedLinks } from '@/app/lib/actions'
import CardHot from '@/app/ui/components/cards/CardHot';

export default function HotSharedLinks() {
  // get top shared links
  const topSharedLinks = getTopSharedLinks();
  const wrapperClass = `flex flex-row items-center w-full justify-evenly gap-1`;
  return (
    <div className={wrapperClass}>
      {topSharedLinks.map((sharedLink, index) => (
        <CardHot
          key={index}
          link={sharedLink}
          variant={index === 1 ? "xlarge" : "large"}
        />
      ))}
    </div>
  );
}
