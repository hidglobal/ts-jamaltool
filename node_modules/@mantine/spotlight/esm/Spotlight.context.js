import { createContext, useContext } from 'react';

const SpotlightContext = createContext(null);
function useSpotlight() {
  const ctx = useContext(SpotlightContext);
  if (!ctx) {
    throw new Error("[@mantine/spotlight] SpotlightProvider was not found in tree");
  }
  return ctx;
}

export { SpotlightContext, useSpotlight };
//# sourceMappingURL=Spotlight.context.js.map
