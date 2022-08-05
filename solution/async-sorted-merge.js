"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise((resolve, reject) => {
    logSources.sort(function(a,b){
      return new Date(a.last.date) - new Date(b.last.date)
    })
    const date = [];
    for (let i=0; i<logSources.length; i++) {
      date.push(logSources[i].last.date);
    }
    const msg = [];
    for (let j=0; j<logSources.length; j++) {
      msg.push(logSources[j].last.msg);
    }
    console.log(date);
    console.log(msg);
  });
};
