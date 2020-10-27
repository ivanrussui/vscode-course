// document.addEventListener('click', (event) => {
//   event.preventDefault();
// });

// document.querySelector('h1').style.color = 'indigo';

const getUser = async () => {
  try {
    const res = await fetch('https://vk.com');
    const data = await res.json();
  } catch (e) {
    console.log(e);
  }
};

getUser();

// function sum(a, b) {
//   console.log(4 + 5);
// }

// sum();
