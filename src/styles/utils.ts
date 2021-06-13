import { useEffect } from 'react';

/**
 * モバイル端末でvhの高さをカスタムプロパティを計算して取得する
 */
export const transformVh = (value: number) => `calc(var(--vh, 1vh) * ${value})`;

export const useCustomVhProperty = () => {
  useEffect(() => {
    const updateVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    updateVhProperty();
    window.addEventListener('resize', updateVhProperty);
    return () => {
      window.removeEventListener('resize', updateVhProperty);
    };
  }, []);
};

export const easings = {
  sineIn: [0.12, 0, 0.39, 0],
  sineOut: [0.61, 1, 0.88, 1],
  sineInOut: [0.37, 0, 0.63, 1],
} as const;

export const colors = {
  powderBlue: '#E5ECED',
  aquaBlue: '#A1CFD6',
  milkyPink: '#F2ECEA',
  shellPink: '#DDB3A4',
  black: '#677476',
  gray: '#C9C9C9',
  white: '#fff',
} as const;
