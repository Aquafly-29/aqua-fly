const viewCountEl = document.getElementById('view-count');
if (viewCountEl) {
  fetch('https://api.countapi.xyz/hit/aqua-fly-static/visits')
    .then(res => res.json())
    .then(data => {
      viewCountEl.textContent = `${data.value} views`;
    })
    .catch(() => {
      viewCountEl.textContent = '';
    });
}
