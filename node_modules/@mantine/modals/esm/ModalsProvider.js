import React, { useReducer, useRef, useCallback } from 'react';
import { Modal, getDefaultZIndex } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { ModalsContext } from './context.js';
import { ConfirmModal } from './ConfirmModal.js';
import { modalsReducer } from './reducer.js';
import { useModalsEvents } from './events.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function separateConfirmModalProps(props) {
  if (!props) {
    return { confirmProps: {}, modalProps: {} };
  }
  const _a = props, {
    id,
    children,
    onCancel,
    onConfirm,
    closeOnConfirm,
    closeOnCancel,
    cancelProps,
    confirmProps,
    groupProps,
    labels
  } = _a, others = __objRest(_a, [
    "id",
    "children",
    "onCancel",
    "onConfirm",
    "closeOnConfirm",
    "closeOnCancel",
    "cancelProps",
    "confirmProps",
    "groupProps",
    "labels"
  ]);
  return {
    confirmProps: {
      id,
      children,
      onCancel,
      onConfirm,
      closeOnConfirm,
      closeOnCancel,
      cancelProps,
      confirmProps,
      groupProps,
      labels
    },
    modalProps: __spreadValues({
      id
    }, others)
  };
}
function ModalsProvider({ children, modalProps, labels, modals }) {
  const [state, dispatch] = useReducer(modalsReducer, { modals: [], current: null });
  const stateRef = useRef(state);
  stateRef.current = state;
  const closeAll = useCallback((canceled) => {
    dispatch({ type: "CLOSE_ALL", canceled });
  }, [stateRef, dispatch]);
  const openModal = useCallback((_a) => {
    var _b = _a, { modalId } = _b, props = __objRest(_b, ["modalId"]);
    const id = modalId || randomId();
    dispatch({
      type: "OPEN",
      modal: {
        id,
        type: "content",
        props
      }
    });
    return id;
  }, [dispatch]);
  const openConfirmModal = useCallback((_c) => {
    var _d = _c, { modalId } = _d, props = __objRest(_d, ["modalId"]);
    const id = modalId || randomId();
    dispatch({
      type: "OPEN",
      modal: {
        id,
        type: "confirm",
        props
      }
    });
    return id;
  }, [dispatch]);
  const openContextModal = useCallback((modal, _e) => {
    var _f = _e, { modalId } = _f, props = __objRest(_f, ["modalId"]);
    const id = modalId || randomId();
    dispatch({
      type: "OPEN",
      modal: {
        id,
        type: "context",
        props,
        ctx: modal
      }
    });
    return id;
  }, [dispatch]);
  const closeModal = useCallback((id, canceled) => {
    dispatch({ type: "CLOSE", modalId: id, canceled });
  }, [stateRef, dispatch]);
  useModalsEvents({
    openModal,
    openConfirmModal,
    openContextModal: (_g) => {
      var _h = _g, { modal } = _h, payload = __objRest(_h, ["modal"]);
      return openContextModal(modal, payload);
    },
    closeModal,
    closeContextModal: closeModal,
    closeAllModals: closeAll
  });
  const ctx = {
    modals: state.modals,
    openModal,
    openConfirmModal,
    openContextModal,
    closeModal,
    closeContextModal: closeModal,
    closeAll
  };
  const getCurrentModal = () => {
    const currentModal = stateRef.current.current;
    switch (currentModal == null ? void 0 : currentModal.type) {
      case "context": {
        const _a = currentModal.props, { innerProps } = _a, rest = __objRest(_a, ["innerProps"]);
        const ContextModal = modals[currentModal.ctx];
        return {
          modalProps: rest,
          content: /* @__PURE__ */ React.createElement(ContextModal, {
            innerProps,
            context: ctx,
            id: currentModal.id
          })
        };
      }
      case "confirm": {
        const { modalProps: separatedModalProps, confirmProps: separatedConfirmProps } = separateConfirmModalProps(currentModal.props);
        return {
          modalProps: separatedModalProps,
          content: /* @__PURE__ */ React.createElement(ConfirmModal, __spreadProps(__spreadValues({}, separatedConfirmProps), {
            id: currentModal.id,
            labels: currentModal.props.labels || labels
          }))
        };
      }
      case "content": {
        const _b = currentModal.props, { children: currentModalChildren } = _b, rest = __objRest(_b, ["children"]);
        return {
          modalProps: rest,
          content: /* @__PURE__ */ React.createElement(React.Fragment, null, currentModalChildren)
        };
      }
      default: {
        return {
          modalProps: {},
          content: null
        };
      }
    }
  };
  const { modalProps: currentModalProps, content } = getCurrentModal();
  return /* @__PURE__ */ React.createElement(ModalsContext.Provider, {
    value: ctx
  }, /* @__PURE__ */ React.createElement(Modal, __spreadProps(__spreadValues(__spreadValues({
    zIndex: getDefaultZIndex("modal") + 1
  }, modalProps), currentModalProps), {
    opened: state.modals.length > 0,
    onClose: () => closeModal(state.current.id)
  }), content), children);
}

export { ModalsProvider };
//# sourceMappingURL=ModalsProvider.js.map
