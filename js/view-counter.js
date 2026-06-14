const viewCountEl = document.getElementById('view-count');
if (viewCountEl) {
  fetch('https://countapi.mileshilliard.com/api/v1/hit/aqua-fly-visits')
    .then(res => res.json())
    .then(data => {
      viewCountEl.textContent = `${data.value} views`;
    })
    .catch(() => {
      viewCountEl.textContent = '';
    });
}
