'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function handleCloseModal(modal, canceled) {
  var _a, _b, _c, _d;
  if (canceled && modal.type === "confirm") {
    (_b = (_a = modal.props).onCancel) == null ? void 0 : _b.call(_a);
  }
  (_d = (_c = modal.props).onClose) == null ? void 0 : _d.call(_c);
}
function modalsReducer(state, action) {
  switch (action.type) {
    case "OPEN": {
      return {
        current: action.modal,
        modals: [...state.modals, action.modal]
      };
    }
    case "CLOSE": {
      const modal = state.modals.find((m) => m.id === action.modalId);
      if (!modal) {
        return state;
      }
      handleCloseModal(modal, action.canceled);
      const remainingModals = state.modals.filter((m) => m.id !== action.modalId);
      return {
        current: remainingModals[remainingModals.length - 1] || state.current,
        modals: remainingModals
      };
    }
    case "CLOSE_ALL": {
      if (!state.modals.length) {
        return state;
      }
      state.modals.concat().reverse().forEach((modal) => {
        handleCloseModal(modal, action.canceled);
      });
      return {
        current: state.current,
        modals: []
      };
    }
    default: {
      return state;
    }
  }
}

exports.modalsReducer = modalsReducer;
//# sourceMappingURL=reducer.js.map
