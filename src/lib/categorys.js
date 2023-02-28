const categoryArray = [
  {
    key: "react",
    text: "React",
  },
  {
    key: "react-native",
    text: "React Native",
  },
  {
    key: "javascript",
    text: "Jacscript",
  },
];

export function getCategoryParams() {
  const categoryParamArray = categoryArray.map((item) => {
    return {
      params: {
        category: item.key,
      },
    };
  });

  return categoryParamArray;
}
