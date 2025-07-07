const formatDate = (date: Date, monthOpt: 'long' | 'short') => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: monthOpt,
    day: 'numeric',
  });
};

export default formatDate;