// ======================== ВАРИАНТ 1 ======================== //

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  switcher: document.querySelector('#theme-switch-toggle'),
  body: document.body,
};

document.addEventListener('change', changeTheme);

// ============ Save Current Theme  ============ //
function changeTheme({ target: { checked } }) {
  checked ? toggledTheme(Theme.DARK, Theme.LIGHT) : toggledTheme(Theme.LIGHT, Theme.DARK);
}
// ============ Upload Current THEME ============ //
(function themeDefault() {
  refs.body.classList.add(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT,
  );
  refs.switcher.checked = localStorage.getItem('theme') === Theme.DARK;
})();

function toggledTheme(add, rem) {
  refs.body.classList.add(add);
  refs.body.classList.replace(rem, add);
  localStorage.setItem('theme', add);
}

// ======================== ВАРИАНТ 2 ======================== //

// (function () {
//   const Theme = {
//     LIGHT: 'light-theme',
//     DARK: 'dark-theme',
//   };

//   const refs = {
//     menuList: document.querySelector('.js-menu'),
//     switcher: document.querySelector('#theme-switch-toggle'),
//     body: document.body,
//   };
//   const state = JSON.parse(localStorage.getItem('theme'));
//   refs.body.classList.add(state?.theme ? state.theme : Theme.LIGHT);
//   refs.switcher.checked = state?.checked;
//   refs.menuList.innerHTML = createMenuMarkup(menu);
//   refs.switcher.addEventListener('change', changeTheme);

//   function changeTheme({ target: { checked } }) {
//     checked ? toggleTheme(Theme.DARK, Theme.LIGHT) : toggleTheme(Theme.LIGHT, Theme.DARK);
//   }

//   function toggleTheme(add, rem) {
//     refs.body.classList.replace(rem, add);
//     const state = {
//       theme: add,
//       checked: add === Theme.DARK,
//     };
//     localStorage.setItem('theme', JSON.stringify(state));
//   }
// })();
