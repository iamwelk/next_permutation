## 介绍
`next_permutation`是一个全排列功能的函数，可以接收一个字符串s和数字n，可以返回s在全排列中的n步后的字符串（如果已到最后一个排列，则返回最后一个）

## 安装
```
npm install -S next_permutation
```
## 用法
``` javascript
const NextPermutation = require('next_permutation')

let startStr = '123'
let res = NextPermutation(startStr, 1)
console.log(res) // '132' 
```