function func(callback):any {
    console.log( typeof (callback) );
    // 넘어온 함수 실행하기
    callback();
}
 
function myCall():any {
    console.log("myCall 호출됨");
}
//func(myCall());
func(myCall);
