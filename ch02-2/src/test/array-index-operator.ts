// 배열 인덱스 연산 방법
const number: number[] = [1,2,3,4,5]

for(let index = 0; index < number.length; index++) {
    const item: number = number[index]
    console.log(item)
}

// 배열 비구조화 할당
let array: number[] = [1,2,3,4,5]
let [first, second, third, ...rest] = array
console.log(first, second, third)
console.log(rest)

// for ..in 문
let names = ['jack', 'jane', 'steve']
for(let name in names) {
    console.log(name)  // 0,1,2dndwls
}

for(let i in names) {
    const name = names[i]
    // console.log(`${index}: ${name}`)
    console.log(name, i)
}

// for...of 문
for(let name of ['jack', 'jane', 'steve'])
    console.log(name)

// 제네릭 방식 타입
