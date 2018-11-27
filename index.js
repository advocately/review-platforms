import ReviewSourceList from "./review-platform-list";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./files', false, /\.(png|jpe?g|svg|gif)$/));

export default function(value) {
  return ReviewSourceList.find((element) => {
    return element.value === value;
  });
}

export function ReviewSourceLogo(string) {
  const fileName = string.replace("./files/", "");
  return images[fileName];
}
