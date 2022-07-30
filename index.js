// code your solution here
function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();

const mondayWork = function(monActivity="go to the office"){
    return(`This Monday, I will ${monActivity}.`)
}
mondayWork("play tennis");

function wrapAdjective(parameter1="&"){
    const part1 = "You are";
    return function(part2){
        return(`${part1} ${parameter1}${part2}${parameter1}!`)

    };
}

wrapAdjective("%")("a dedicated programmer");
wrapAdjective("*")("a hard worker");
wrapAdjective("||")("a dedicated programmer")