function dateStringParser(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime()) || !dateString) {
    return null;
  }
  return date;
}

export { dateStringParser };
//# sourceMappingURL=date-string-parser.js.map
