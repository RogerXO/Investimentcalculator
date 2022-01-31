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

/*
M = Montante
ic = Initial Capital
i = interest/100
n = time
PMC = per month contributions

M = (ic *((1+i)^n)) + ((pmc * (((1+i)^n) - 1))/i)
*/

const ninfo1 = document.getElementById('info1')
const ninfo2 = document.getElementById('info2')
const ninfo3 = document.getElementById('info3')
const ninfo4 = document.getElementById('info4')
const ninfo5 = document.getElementById('info5')

function done() {
    const ic = input1.formatToNumber()
    const pmc = input2.formatToNumber()
    const n = Number(ninfo3.value)
    const i = Number(ninfo4.value)/100

    const year_to_month = (Math.pow((1+i), 1.0/12)-1)
    const i_monthly = (ic *(Math.pow((1+i), n))) + ((pmc *((Math.pow((1+i), n)) - 1))/i)
    const i_yearly = (ic *(Math.pow((1+(year_to_month)), n))) + ((pmc *((Math.pow((1+(year_to_month)), n)) - 1))/(year_to_month))
    
    //alert(i_monthly)
    alert(i_yearly)
}
