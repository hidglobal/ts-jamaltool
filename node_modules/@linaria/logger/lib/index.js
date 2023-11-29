"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCustomDebug = createCustomDebug;
exports.warn = exports.notify = exports.info = exports.error = exports.debug = void 0;

var _debug = _interopRequireDefault(require("debug"));

var _picocolors = _interopRequireDefault(require("picocolors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const levels = ['error', 'warn', 'info', 'debug'];
const currentLevel = levels.indexOf(process.env.LINARIA_LOG || 'warn');
const linariaLogger = (0, _debug.default)('linaria');
const loggers = new Map();

function gerOrCreate(namespace) {
  if (!namespace) return linariaLogger;
  const lastIndexOf = namespace.lastIndexOf(':');

  if (!loggers.has(namespace)) {
    loggers.set(namespace, gerOrCreate(namespace.substr(0, lastIndexOf)).extend(namespace.substr(lastIndexOf + 1)));
  }

  return loggers.get(namespace);
}

_debug.default.formatters.r = ref => {
  var _ref$text;

  const color = parseInt(gerOrCreate(ref.namespace).color, 10);
  const colorCode = `\u001B[3${color < 8 ? color : `8;5;${color}`}`;
  const text = (_ref$text = ref.text) !== null && _ref$text !== void 0 ? _ref$text : ref.namespace;
  return `${colorCode};1m${text}\u001B[0m`;
};

_debug.default.formatters.f = function f(fn) {
  return JSON.stringify(fn());
};

const format = text => {
  if (typeof text === 'string') {
    return text.replace(/\n/g, '\n\t');
  }

  return text;
};

function log(level, namespaces, template, ...restArgs) {
  if (currentLevel < levels.indexOf(level)) {
    return;
  }

  const logger = gerOrCreate(namespaces);
  if (!logger.enabled) return;

  if (typeof template === 'function') {
    const text = template();

    if (text) {
      logger(format(text), ...restArgs);
    }

    return;
  }

  logger(format(template), ...restArgs);
}

const debug = log.bind(null, 'debug');
exports.debug = debug;
const info = log.bind(null, 'info');
exports.info = info;
const warn = log.bind(null, 'warn');
exports.warn = warn;
const error = log.bind(null, 'error');
exports.error = error;

const notify = message => {
  // eslint-disable-next-line no-console
  console.log(_picocolors.default.red(message.replace(/(`.*?`)/g, s => _picocolors.default.italic(s.substring(1, s.length - 1)))));
};

exports.notify = notify;

const padStart = (num, len) => num.toString(10).padStart(len, '0');

function createCustomDebug(name, id) {
  return (..._args) => {
    const [namespace, arg1, ...args] = _args;
    debug(`${name}:${padStart(id, 5)}`, `[${namespace}] ${arg1}`, ...args);
  };
}
//# sourceMappingURL=index.js.map