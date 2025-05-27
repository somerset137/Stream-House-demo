function search() {
  document.getElementById('searchBox').style.display = 'block';
}

function findMovie() {
  const title = document.getElementById('query').value.toLowerCase();
  const fakeDatabase = ['inception', 'breaking bad', 'lucifer'];

  const resultDiv = document.getElementById('results');
  resultDiv.innerHTML = '';

  if (fakeDatabase.includes(title)) {
    resultDiv.innerHTML = `We found "${title}" on Netflix!`;
  } else {
    resultDiv.innerHTML = `Sorry my friend, can't find it... But we might know who can: <a href="https://www.reddit.com/r/whattowatch" target="_blank">Try here</a>`;
  }
}
