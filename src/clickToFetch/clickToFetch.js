import myfetch from '../fetch/fetch';

export default function myClickToFetch() {
  const btn = document.querySelector('button');
  btn.addEventListener('click', myfetch);
}
