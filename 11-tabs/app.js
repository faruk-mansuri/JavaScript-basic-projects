const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// using e target (event target) (e object)
about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active class from all btns
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });

    // hide all articles
    articles.forEach((article) => {
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});

// using current target
// btns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     btns.forEach((activeBtn) => {
//       if (btn == activeBtn) {
//         activeBtn.classList.add('active');
//       } else {
//         activeBtn.classList.remove('active');
//       }
//     });

//     let contentID = btn.getAttribute('data-id');
//     articles.forEach((item) => {
//       if (item.id === contentID) {
//         item.classList.add('active');
//       } else {
//         item.classList.remove('active');
//       }
//     });
//   });
// });
