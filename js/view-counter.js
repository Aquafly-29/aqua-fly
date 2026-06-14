const updateViewCount = () => {
  fetch('https://countapi.mileshilliard.com/api/v1/hit/aqua-fly-visits')
    .then(res => res.json())
    .then(data => {
      const text = `${data.value} views`;
      const el = document.getElementById('view-count');
      const mobileEl = document.getElementById('mobile-view-count');
      if (el) el.textContent = text;
      if (mobileEl) mobileEl.textContent = text;
    })
    .catch(() => {});
};

updateViewCount();
