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
  textWhite: '#fff',
  textBlack: '#232825',
  backGroundWhite: '#faf9f0',
  backGroundBlack: '#262624',
} as const;
