import { useContext } from 'react';
import { ModalsContext } from '../context.js';

function useModals() {
  const ctx = useContext(ModalsContext);
  if (!ctx) {
    throw new Error("[@mantine/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component");
  }
  return ctx;
}

export { useModals };
//# sourceMappingURL=use-modals.js.map
