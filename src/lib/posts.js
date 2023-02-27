import fs from "fs";
import path from "path";
import matter from "gray-matter";

const categoryArray = ["javascript", "react", "react-native"];

const reactPostsDirectory = path.join(process.cwd(), "posts/react");
const reactNativePostsDirectory = path.join(
  process.cwd(),
  "posts/react-native"
);
const javascriptPostsDirectory = path.join(process.cwd(), "posts/javascript");

export function getSortedPostsData() {
  let allPostsData = [];
  let postsDirectory = "";
  for (let i = 0; i < categoryArray.length; i++) {
    postsDirectory = path.join(process.cwd(), `posts/${categoryArray[i]}`);
    const fileNames = fs.readdirSync(postsDirectory);
    const postsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    });
    allPostsData = allPostsData.concat(postsData);
  }

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getCategoryPostsData(category) {
  console.log("getCategoryPostsData, category", category);
  const postsDirectory = path.join(process.cwd(), "posts/" + category);
  const fileNames = fs.readdirSync(postsDirectory);
  const categoryPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return categoryPostsData.sort((a, b) => {
    if (a.data < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
