import {
  Activity,
  Anchor,
  CircleDot,
  CircleMinus,
  Crown,
  Diamond,
  Gem,
  Grip,
  Layers,
  LayoutGrid,
  RectangleHorizontal,
  Sheet,
  Shield,
  Smile,
  Sparkles,
  SquareMinus,
  Stethoscope,
  Sun,
  Target,
  Zap,
} from "lucide-react";

/**
 * Maps the string `icon` keys stored in src/data/services.js
 * to Lucide icon components.
 */
export const serviceIcons = {
  sparkles: Sparkles,
  activity: Activity,
  dot: CircleDot,
  zap: Zap,
  target: Target,
  minusCircle: CircleMinus,
  minusSquare: SquareMinus,
  sun: Sun,
  gem: Gem,
  shield: Shield,
  layers: Layers,
  crown: Crown,
  diamond: Diamond,
  smile: Smile,
  grid: LayoutGrid,
  sheet: Sheet,
  grip: Grip,
  tray: RectangleHorizontal,
  anchor: Anchor,
};

export const getServiceIcon = (key) => serviceIcons[key] ?? Stethoscope;

export default serviceIcons;