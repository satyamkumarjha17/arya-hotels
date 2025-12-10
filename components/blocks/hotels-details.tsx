import { Layout, Pointer, Zap } from "lucide-react";

import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108"

const HotelData = {
  badge: "shadcnblocks.com",
  heading: "A Collection of Components Built With Shadcn & Tailwind",
  description: "Join us to build flawless web solutions.",
  tabs: [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Boost Revenue",
      content: {
        badge: "Modern Tactics",
        title: "Make your site a true standout.",
        description:
          "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
        buttonText: "See Plans",
        imageSrc:
          "https://content3.jdmagicbox.com/comp/nainital/j9/9999p5942.5942.221013185632.y2j9/catalogue/a3-queen-corbett-corbett-national-park-corbett-hotels-mxbhgp28sh.jpg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Higher Engagement",
      content: {
        badge: "Expert Features",
        title: "Boost your site with top-tier design.",
        description:
          "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
        buttonText: "See Tools",
        imageSrc:
          "/IMG_4648.HEIC",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Stunning Layouts",
      content: {
        badge: "Elite Solutions",
        title: "Build an advanced web experience.",
        description:
          "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
        buttonText: "See Options",
        imageSrc:
          "https://www.shadcnblocks.com/images/block/placeholder-dark-3.svg",
        imageAlt: "placeholder",
      },
    },
  ],
};

function FeatureHotelDemo() {
  return <Feature108 {...HotelData} />;
}

export { FeatureHotelDemo };
