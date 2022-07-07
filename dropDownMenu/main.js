var maxProfit = function(prices) {
  let profit = 0;
 
  for(let p1 = 1; p1 < prices.length; p1++) {
    pr1 = prices[p1];
    pr2 = prices[p1 - 1];
    console.log(pr1, pr2)
     if (pr1 > pr2) {
         profit += (pr1-pr2)
     }
  }
  return profit
  
};

prices = [1,2,3,4,5];

console.log(maxProfit(prices));