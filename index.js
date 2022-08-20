// Import stylesheets
import './style.css';

var jobs = [3, 10, 10, 20, 1, 2];

var cycle = 30;

function getTaskIndexAtCycle(jobs, cycle) {
  var jobs2 = [...jobs];
  var tasks = [];
  let sum = 0;
  let result;
  var sorting = jobs.sort((a, b) => a - b);
  console.log(sorting);

  for (let i = 0; i < jobs.length; i++) {
    let Index = jobs2.indexOf(sorting[i]);
    if (!tasks.includes(Index)) {
      tasks.push(Index);
    } else {
      tasks.push(Index + 1);
    }
  }
  console.log(tasks);

  for (let i = 0; i < jobs.length; i++) {
    console.log(`task ${tasks[i]} = count ${jobs[i]}`);
    sum += jobs[i];
    result = tasks[i];
    if (sum >= cycle) {
      break;
    }
  }
  return result;
}

getTaskIndexAtCycle(jobs, cycle);
