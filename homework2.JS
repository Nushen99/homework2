alert('Welcome!');

const country = 'Armenia'; 
const gdp2016 = 10.55;
const gdp2017 = 11.5;
const population16 = 2.92;
const population17  = 2.93; 
const gdpPerCapita16 = gdp2016/population16;
const gdpPerCapita17 = gdp2017/population17;

if (gdp2017 > gdp2016) {
console.log('Economy of' + ' ' + country + ' ' + 'is growing.');
} else if (gdp2017 < gdp2016) {
  console.log('Economy of' + ' ' + country + ' ' + 'is slowing down.');
} else {
  console.log('Economy of' + ' ' + country + ' ' + 'is stable.');
}
  

if (gdpPerCapita17 === gdpPerCapita16) {
console.log('The standard of living in ' + country + ' remains stable.');
} else if (gdpPerCapita17 < gdpPerCapita16) {
  console.log('The standard of living in ' + country + ' is decreasing.');
} else {
  console.log('The standard of living in ' + country + ' is geating higher.');
}
  

  console.log('The combined GDP of ' + country + ' equals to '+ (gdp2016 + gdp2017));
  
