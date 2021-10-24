export default function myAsyncExample() {
  const container = document.querySelector('#container');
  const k = process.env.key;

  function makeImgEl(gif) {
    const img = document.createElement('img');
    img.src = gif;
    container.appendChild(img);
  }
  async function getCat() {
    try {
      const getCatpromise = fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${k}&s=cat`,
        {
          mode: 'cors',
        },
      );
      const promiseResponse = await getCatpromise;
      // console.log(promiseResponse);

      const promiseData = await promiseResponse.json();
      // console.log(promiseData);

      const catgif = await promiseData.data.images.original.url;
      // console.log(catgif);

      makeImgEl(catgif);
    } catch (err) {
      console.log(err);
    }
  }

  return { getCat };
}
