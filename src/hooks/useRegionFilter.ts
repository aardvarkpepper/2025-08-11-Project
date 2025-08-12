import { useState } from 'react';

export const useRegionFilter = () => {
  const [region, setRegion] = useState('');
  return [region, setRegion] as const;
}