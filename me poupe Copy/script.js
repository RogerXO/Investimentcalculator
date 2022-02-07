// configuration
const args = {
    afterFormat(e) { console.log('afterFormat', e); },
    allowNegative: false,
    beforeFormat(e) { console.log('beforeFormat', e); },
    negativeSignAfter: false,
    prefix: '',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'move'
};

// Select the element
const input1 = SimpleMaskMoney.setMask('#info1', args);
// Convert the input value to a number, which you can save e.g. to a database:
input1.formatToNumber();

const input2 = SimpleMaskMoney.setMask('#info2', args);
input2.formatToNumber();

let ninfo1 = document.getElementById('info1')
let ninfo2 = document.getElementById('info2')
let ninfo3 = document.getElementById('info3')
let ninfo4 = document.getElementById('info4')

let investedmoneydiv = document.querySelector('div.invested-money')
let interestearneddiv = document.querySelector('div.interest-earned')
let accumulatedtotalvalue = document.querySelector('div.accumulated-total-value')

var select = document.getElementById('language');
var value = select.options[select.selectedIndex].value;

function done() {
  const ic = input1.formatToNumber()
  const pmc = input2.formatToNumber()
  const n = Number(ninfo3.value)
  const i = Number(ninfo4.value)/100

  let select = document.getElementById('rentability-camp')
  let selectvalue = select.options[select.selectedIndex].value

  const investedmoney = ic + (pmc * n)
  const year_to_month = (Math.pow((1+i), 1.0/12)-1)
  const i_monthly = (ic *(Math.pow((1+i), n))) + ((pmc *((Math.pow((1+i), n)) - 1))/i)
  const i_yearly = (ic *(Math.pow((1+(year_to_month)), n))) + ((pmc *((Math.pow((1+(year_to_month)), n)) - 1))/(year_to_month))
  const interest_earned_month =  i_monthly - investedmoney
  const interest_earned_year = i_yearly - investedmoney

  if (selectvalue == "pmonth") {
    investedmoneydiv.innerHTML = investedmoney.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    interestearneddiv.innerHTML = interest_earned_month.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    accumulatedtotalvalue.innerHTML = i_monthly.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
  if (selectvalue == "pyear") {
    investedmoneydiv.innerHTML = investedmoney.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    interestearneddiv.innerHTML = interest_earned_year.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    accumulatedtotalvalue.innerHTML = i_yearly.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
  
  document.querySelector("div#first-left-display").style.display = "none";
  document.querySelector("div#second-left-display").style.display = "block";
}

function redo() {
  document.querySelector("div#first-left-display").style.display = "block";
  document.querySelector("div#second-left-display").style.display = "none";
}