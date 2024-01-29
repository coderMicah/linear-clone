import Image from "next/image";
import Container from "./components/container";
import Hero, { HeroSubTitle, HeroTitle } from "./components/hero";
import Button, { IconWrapper } from "./components/button";

export default function Home() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <Button variant="secondary" size="sm" href="#">
          <p>Introducing Linear Asks</p>
          <IconWrapper>
            <svg
              className="ml-[4px] mr-[-6px] mb-0.5"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="currentColor"
              role="img"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
            </svg>
          </IconWrapper>
        </Button>
        <HeroTitle>
          Linear is a better way <br className="hidden lg:block" />
          to build products
        </HeroTitle>
        <HeroSubTitle>
          Meet the new standard for modern software development.
          <br className="hidden lg:block" />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubTitle>
        <Button size="lg" href="#">
          Get Started
          <IconWrapper>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#fff"
              role="img"
              focusable="false"
              aria-hidden="true"
              
            >
              <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
            </svg>
          </IconWrapper>
        </Button>
        <Image className="mt-[12.8rem]" src="/hero-img.webp" alt="hero-img" width={1370} height={776} />
      </Hero>
    </Container>
  );
}
