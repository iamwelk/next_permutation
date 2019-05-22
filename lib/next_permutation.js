var permutation = function (arr) {
  let start = 0
  let end = arr.length - 1
  let isEnd = false
  // 从后往前找到第一个非升序的元素A
  for (let i = end; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      start = i - 1
      break
    } else if (i - 1 === 0) {
      isEnd = true
      break
    }
  }
  if (isEnd) {
    return true
  }
  // 从后往前，找到第一个比元素A大的元素B，交换AB
  for (let i = end; i > start; i--) {
    if (arr[i] > arr[start]) {
      let temp = arr[i]
      arr[i] = arr[start]
      arr[start] = temp
      break
    }
  }
  // 将A往后的元素逆序
  start += 1
  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start += 1
    end -= 1
  }
  // 返回是否已经是最后一个排列
  return false
}

var next_permutation = function (str, steps = 1) {
  if (isNaN(steps) || steps < 1) {
    throw Error('steps must be a valid number')
  }
  str += ''
  if (!str) {
    throw Error('str must be a valid string')
  }
  steps = parseInt(steps)
  let arr = str.split('')
  for (let i = 1; i <= steps; i++) {
    if (permutation(arr)) {
      break
    }
  }
  return arr.join('')
}

module.exports = next_permutation;