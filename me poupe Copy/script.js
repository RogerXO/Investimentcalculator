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
    const ic = Number(ninfo1.value)
    const pmc = Number(ninfo2.value)
    const n = Number(ninfo3.value)
    const i = Number(ninfo4.value)/100

    const year_to_month = (Math.pow((1+i), 1.0/12)-1)
    const i_yearly = (ic *(Math.pow((1+(year_to_month)), n))) + ((pmc *((Math.pow((1+(year_to_month)), n)) - 1))/(year_to_month))
    const i_monthly = (ic *(Math.pow((1+i), n))) + ((pmc *((Math.pow((1+i), n)) - 1))/i)


}
