import './style.css';
import myfetch from './fetch/fetch';
import myClickToFetch from './clickToFetch/clickToFetch';
import myAsyncExample from './asyncExample/asyncEx';

const app = () => {
  const obj = {
    init() {
      // this.runMyFetch();
      // this.runClickToFetch();
      this.runAsyncExample();
    },
    //! < promise syntax > !\\
    runMyFetch() {
      myfetch();
    },
    runClickToFetch() {
      myClickToFetch();
    },
    //! </ promise syntax > !\\
    runAsyncExample() {
      const mycat = myAsyncExample();
      mycat.getCat();
    },
  };
  return obj.init();
};
app();
