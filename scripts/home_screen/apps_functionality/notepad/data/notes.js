export let notes = null;
notes = JSON.parse(localStorage.getItem('notes'));
if (!notes) {
  notes = [{
    id: 0,
    title: 'Welcome to Notepad',
    date: '06:09',
    text: 'Second application'
  }]
  localStorage.setItem('mainId', 1);
}
