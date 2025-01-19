// 今日の日付を取得
const today = new Date();

// 年月日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day =today.getDate(); 

// 「年月日」形式で出力
console.log(year + '年' + month + '月' + day + '日');

