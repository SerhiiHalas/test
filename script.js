let money, time;


function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();


let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses :  function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
         if (typeof(a)==="string" && typeof(a) != null && typeof(b) != null && a != "" && b  != "" && a.length < 50) {
                console.log("done") ;
                appData.expenses[a] = b ;
         } else{
            i = i -1 ;
         }
        }
    },
    detectDayBudget : function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed() ;
        alert("Budget per day:" + appData.moneyPerDay);
    },
    detectLevel : function () {
        if(appData.moneyPerDay < 100) {
            console.log("Мінімальний рівень достатку") ;
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Середній рівень достатку") ;
        } else if (appData.moneyPerDay > 2000) {
         console.log("високий рівень достатку") ;
        } else {
         console.log("виникла помилка") ;
        }
    },
    checkSavings : function () {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptionalExpenses : function () {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Статья необязательніх расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome : function() {
        let items = prompt("Что пренесет дополнительній доход? (Перечислите через запятую)", "");
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
    }
};


