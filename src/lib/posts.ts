import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import {postList} from './type'

const categoryArray = ["javascript", "react"];

export function getSortedPostsData() {
  let allPostsData: any[] = [];
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
        category: categoryArray[i],
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

export function getCategoryPostsData(category: string) {
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
      category: category,
      ...matterResult.data,
    };
  });

  return categoryPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  let allFileNames: any[] = [];
  let postsDirectory = "";

  for (let i = 0; i < categoryArray.length; i++) {
    postsDirectory = path.join(process.cwd(), `posts/${categoryArray[i]}`);
    const fileNames = fs.readdirSync(postsDirectory);

    allFileNames = allFileNames.concat(fileNames);
  }

  return allFileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getCategoryPostIds(category: string) {
  const postsDirectory = path.join(process.cwd(), `posts/${category}`);
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostData(id: any, category: string) {
  const postsDirectory = path.join(process.cwd(), `posts/${category}`);
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
    content: matterResult.content,
  };
}

export function getPostsNumber() {
  let postsDirectory = "";
  let postsNumber: any = {};

  for (let i = 0; i < categoryArray.length; i++) {
    postsDirectory = path.join(process.cwd(), `posts/${categoryArray[i]}`);
    const fileNames = fs.readdirSync(postsDirectory);
    postsNumber[categoryArray[i]] = fileNames.length;
  }

  return postsNumber;
}
