import { randomId } from '@mantine/hooks';

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
function prepareAction(action) {
  return __spreadProps(__spreadValues({}, action), { id: action.id || randomId() });
}
function filterDuplicateActions(actions) {
  const ids = [];
  return actions.reduceRight((acc, action) => {
    if (!ids.includes(action.id)) {
      ids.push(action.id);
      acc.push(action);
    }
    return acc;
  }, []).reverse();
}
function prepareActions(initialActions) {
  return filterDuplicateActions(initialActions.map((action) => prepareAction(action)));
}
function useActionsState({ actions, onActionsChange }) {
  const registerActions = (payload) => onActionsChange == null ? void 0 : onActionsChange(prepareActions([...actions, ...payload]));
  const removeActions = (ids) => onActionsChange == null ? void 0 : onActionsChange(actions.filter((action) => !ids.includes(action.id)));
  const triggerAction = (id) => {
    var _a;
    const action = actions.find((item) => item.id === id);
    (_a = action == null ? void 0 : action.onTrigger) == null ? void 0 : _a.call(action, action);
  };
  return [
    prepareActions(actions),
    {
      registerActions,
      removeActions,
      triggerAction
    }
  ];
}

export { useActionsState };
//# sourceMappingURL=use-actions-state.js.map
