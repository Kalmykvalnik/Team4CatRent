
export default function asign(arr1: any[], arr2: any[]) {
  let arr : any[] = []
    for (let i = 0; i < arr1.length; i++) {
      arr.push(Object.assign(arr1[i], arr2[i]))
    }
    return arr
}