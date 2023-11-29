import dayjs from 'dayjs';

function getDefaultClampedDate({ minDate, maxDate }) {
  const today = new Date();
  if (!minDate && !maxDate) {
    return today;
  }
  if (dayjs(today).isBefore(minDate)) {
    return minDate;
  }
  if (dayjs(today).isAfter(maxDate)) {
    return maxDate;
  }
  return today;
}

export { getDefaultClampedDate };
//# sourceMappingURL=get-default-clamped-date.js.map
