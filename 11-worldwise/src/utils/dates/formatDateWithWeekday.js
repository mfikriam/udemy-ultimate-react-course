const formatDateWithWeekday = (date) =>
  new Intl.DateTimeFormat('en', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

export default formatDateWithWeekday;
