interface HeroProps {
  children: React.ReactNode;
}

interface HeroTitleProps {
  children: React.ReactNode;
}
interface HeroSubTitleProps {
  children: React.ReactNode;
}
export const HeroTitle = ({ children }: HeroTitleProps) => {
  return <h1 className="text-gradient text-6xl md:text-8xl my-6">{children}</h1>;
};
export const HeroSubTitle = ({ children }: HeroSubTitleProps) => {
  return <h1 className="text-lg md:text-xl mb-12 text-primary-text">{children}</h1>;
};

const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};

export default Hero;
