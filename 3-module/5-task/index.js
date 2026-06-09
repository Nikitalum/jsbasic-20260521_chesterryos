function getMinMax(str) {
  let arr = str.split(' ')
  let arr_min = Infinity
  let arr_max = -Infinity
  for (let i in arr){
    if (!isNaN(arr[i])){
        if (Number(arr[i]) < Number(arr_min)){
            arr_min = arr[i]
        };
        if (Number(arr[i]) > Number(arr_max)){
            arr_max = arr[i]
        }
    }
  }
  return `${arr}, {min: ${arr_min}, max: ${arr_max}}`
}
