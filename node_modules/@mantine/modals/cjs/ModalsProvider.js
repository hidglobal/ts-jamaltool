'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var context = require('./context.js');
var ConfirmModal = require('./ConfirmModal.js');
var reducer = require('./reducer.js');
var events = require('./events.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [state, dispatch] = React.useReducer(reducer.modalsReducer, { modals: [], current: null });
  const stateRef = React.useRef(state);
  stateRef.current = state;
  const closeAll = React.useCallback((canceled) => {
    dispatch({ type: "CLOSE_ALL", canceled });
  }, [stateRef, dispatch]);
  const openModal = React.useCallback((_a) => {
    var _b = _a, { modalId } = _b, props = __objRest(_b, ["modalId"]);
    const id = modalId || hooks.randomId();
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
  const openConfirmModal = React.useCallback((_c) => {
    var _d = _c, { modalId } = _d, props = __objRest(_d, ["modalId"]);
    const id = modalId || hooks.randomId();
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
  const openContextModal = React.useCallback((modal, _e) => {
    var _f = _e, { modalId } = _f, props = __objRest(_f, ["modalId"]);
    const id = modalId || hooks.randomId();
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
  const closeModal = React.useCallback((id, canceled) => {
    dispatch({ type: "CLOSE", modalId: id, canceled });
  }, [stateRef, dispatch]);
  events.useModalsEvents({
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
          content: /* @__PURE__ */ React__default.createElement(ContextModal, {
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
          content: /* @__PURE__ */ React__default.createElement(ConfirmModal.ConfirmModal, __spreadProps(__spreadValues({}, separatedConfirmProps), {
            id: currentModal.id,
            labels: currentModal.props.labels || labels
          }))
        };
      }
      case "content": {
        const _b = currentModal.props, { children: currentModalChildren } = _b, rest = __objRest(_b, ["children"]);
        return {
          modalProps: rest,
          content: /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, currentModalChildren)
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
  return /* @__PURE__ */ React__default.createElement(context.ModalsContext.Provider, {
    value: ctx
  }, /* @__PURE__ */ React__default.createElement(core.Modal, __spreadProps(__spreadValues(__spreadValues({
    zIndex: core.getDefaultZIndex("modal") + 1
  }, modalProps), currentModalProps), {
    opened: state.modals.length > 0,
    onClose: () => closeModal(state.current.id)
  }), content), children);
}

exports.ModalsProvider = ModalsProvider;
//# sourceMappingURL=ModalsProvider.js.map
