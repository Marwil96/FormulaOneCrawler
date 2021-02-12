const getDrivers = ($) => {
  const tableSelector = $(".wikitable");
  const drivers = [];
  driverSelector.each(function () {
    let title = $(this);
    drivers.push(title);
  });

  
  return {
    drivers: drivers,
  };
}

module.exports = getDrivers;
