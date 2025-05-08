// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex05-12.ts 복사

import { type Cat } from "./types.js";
import { appendImages } from "./utils.js";

const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('button');

btn?.addEventListener('click', getImages);

async function getImages(): void{

  const response = await fetch(url);
  const data: Cat[] = await response.json();
  appendImages(data);
  
};
