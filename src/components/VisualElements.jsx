import { motion } from 'framer-motion'

export const GridPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
)

export const FloatingBlob = ({ color, className }) => (
  <motion.div
    className={`absolute blur-[100px] rounded-full opacity-20 ${className}`}
    style={{ backgroundColor: color }}
    animate={{
      scale: [1, 1.2, 1],
      x: [0, 30, 0],
      y: [0, 50, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

export const VixxelLogo = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20L50 80L80 20" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35 40L50 70L65 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="opacity-50" />
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
  </svg>
)

export const DecorativeShape = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      fill="currentColor"
      d="M44.7,-76.4C58.2,-69.2,69.7,-57.4,77.3,-43.6C84.8,-29.8,88.4,-14.9,87.3,-0.6C86.2,13.6,80.4,27.3,72.4,40.1C64.4,52.9,54.1,64.8,41.4,72.6C28.7,80.4,14.3,84.1,-0.7,85.2C-15.7,86.4,-31.4,85.1,-44.8,78.2C-58.2,71.3,-69.2,58.8,-76.8,44.7C-84.4,30.6,-88.6,15.3,-87.8,0.5C-86.9,-14.4,-81.1,-28.7,-72.4,-41C-63.7,-53.2,-52.1,-63.3,-39.3,-70.8C-26.4,-78.3,-13.2,-83.2,1.1,-85.1C15.4,-87,31.2,-83.7,44.7,-76.4Z"
      transform="translate(100 100)"
    />
  </svg>
)
