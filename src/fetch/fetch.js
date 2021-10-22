export default function myfetch() {
  const k = process.env.key;
  const img = document.querySelector('img');

  function makeFetchRequest() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${k}&s=cats`, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        // console.log(response.data.images.original.url);
        img.src = response.data.images.original.url;
      })
      .catch((err) => console.log(err));
  }
  makeFetchRequest();
}
