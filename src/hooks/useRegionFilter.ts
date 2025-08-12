// No longer used.  Each time this is called, state is separate; context and providers are instead used to pass state.  Though actually, local state changes would be more practical for this application, and passing state down through props, and up through callbacks (setState that was passed down as props, changing state on the upper level).
// import { useState } from 'react';

// export const useRegionFilter = () => {
//   const [region, setRegion] = useState('');
//   return [region, setRegion] as const;
// }