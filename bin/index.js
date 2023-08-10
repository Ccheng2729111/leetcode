#!/usr/bin/env node

import { $ } from 'execa';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dayjs from 'dayjs';

async function getGitUserName() {
  const result = await $`git config user.name`;
  if (!result.stdout) {
    console.error('> 请设置你的git user.name');
    process.exit(1);
  }

  return result.stdout;
}

function mkdirGitName(name) {
  let rootPath = path.resolve(fileURLToPath(import.meta.url), '../../', 'src');

  const targetDay = dayjs().format('YYYY-MM-DD');
  const targetDir = path.resolve(rootPath, `${name}&${targetDay}`);

  if (fs.existsSync(targetDir)) {
    console.log(
      '> 当前用户存在目录信息' + path.resolve(rootPath, `${name}&${targetDay}`)
    );
    console.log('> 直接开始leetcode ~~');
  } else {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`> 今天是${targetDay}`);
    console.log('> 目录创建成功，leetcode ~~');
  }
}

async function main() {
  try {
    const dirName = await getGitUserName();
    mkdirGitName(dirName);
  } catch (error) {
    console.error(error);
  }
}

main();
