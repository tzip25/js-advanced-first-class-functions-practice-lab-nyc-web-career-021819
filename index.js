// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(driver => console.log(driver.name))
};

function logDriversByHometown(drivers, hometown) {
  logDriverNames(drivers.filter(driver => driver.hometown === hometown))
};

function driversByRevenue(drivers) {
  let newDrivers = drivers.slice()
  newDrivers.sort((a,b) => a.revenue - b.revenue)
  return newDrivers
};

function driversByName(drivers) {
  let newDrivers = drivers.slice()
  newDrivers.sort((a,b) => a.name.localeCompare(b.name))
  return newDrivers
};

const total = function (accumulate, currentVal) {
  return accumulate += currentVal.revenue
}

function totalRevenue(drivers) {
  return drivers.reduce(total, 0)
};

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
};
