"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  // return console.log("Sync sort complete.");
  logSources.sort(function(a,b){
    return new Date(a.last.date) - new Date(b.last.date)
  })
  console.log(logSources);
};
