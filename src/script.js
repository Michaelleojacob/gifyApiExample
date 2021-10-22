import css from './style.css';
import myfetch from './fetch/fetch';
import myClickToFetch from './clickToFetch/clickToFetch';

const app = () => {
  const obj = {
    init() {
      this.runMyFetch();
      this.runClickToFetch();
    },
    runMyFetch() {
      myfetch();
    },
    runClickToFetch() {
      myClickToFetch();
    },
  };
  return obj.init();
};
app();
