Template.registerHelper('formatDate', (date) => {
  return moment(date).format('MMM-DD-YYYY');
})
