import { AnimatedHeading, MotionFadeUp } from './Animated';
import heroImage from '../assets/products/hero-bg.jpg';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  // Use explicit import if provided, otherwise fall back to the imported heroImage
  const bg = backgroundImage ?? heroImage;
  return (
    <div
      className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center z-10 px-4">
        <MotionFadeUp>
          <AnimatedHeading level={1} className="text-4xl md:text-5xl font-bold">
            {title}
          </AnimatedHeading>
          {subtitle && (
            <p className="text-lg mt-3 text-gray-100 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </MotionFadeUp>
      </div>
    </div>
  );
}
