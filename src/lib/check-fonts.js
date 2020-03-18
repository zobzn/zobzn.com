import FontFaceObserver from "fontfaceobserver";
import { paramCase } from "change-case";

// https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900
// https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap

// const addStylesheet = href => {
//   const link = document.createElement("link");
//   link.href = href;
//   link.rel = "stylesheet";
//
//   document.head.appendChild(link);
// };

export default function checkFonts(fontFamilies) {
  // addStylesheet(
  //   "https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap"
  // );

  const seconds = 5;

  fontFamilies
    .map(fontFamily => [
      fontFamily,
      new FontFaceObserver(fontFamily).load(null, seconds * 1000)
    ])
    .map(([fontFamily, promise]) =>
      promise.then(
        () => {
          document.documentElement.classList.add(
            "font-" + paramCase(fontFamily)
          );
        },
        () => {
          console.log(
            `Font '${fontFamily}' is not available after waiting ${seconds} seconds`
          );
        }
      )
    );
}
