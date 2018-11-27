import ReviewSourceList from "./review-platform-list";

export default function(value) {
  return ReviewSourceList.find((element) => {
    return element.value === value;
  });
};
