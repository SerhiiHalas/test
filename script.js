let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};


let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");



for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
 if (typeof(a)==="string" && typeof(a) != null && typeof(b) != null && a != "" && b  != "" && a.length < 50) {
        console.log("done") ;
        appData.expenses[a] = b ;
 } else{

 }
}
appData.moneyPerDay = appData.budjet / 30 ;

alert("Budget per day:" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Мінімальний рівень достатку") ;
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Середній рівень достатку") ;
} else if (appData.moneyPerDay > 2000) {
    console.log("високий рівень достатку") ;
} else {
    console.log("виникла помилка") ;
}

