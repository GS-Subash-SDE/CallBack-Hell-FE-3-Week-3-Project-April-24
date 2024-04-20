const container = document.querySelector('.container');
let para = document.createElement('p');
// 1.Opengin ceremony function declaration
function OpeningCeremony() {
  console.log('Let the games begin');
  para.innerText = '1. Let the games begin';
  container.appendChild(para);
  
  setTimeout(() => { 
    const score = {
      red:0,yellow:0,green:0
    }
    
    console.log('Initial Score:\n',score);
     para = document.createElement('p');
    para.innerText = 'Initial Score:' + JSON.stringify(score);
    container.appendChild(para);
    Race100M(score, LongJump);
  }, 1000);
}

// 2.Race100M function declaration
function Race100M(score, callback) {
  setTimeout(() => {
    console.log('Previous score ', score);
    para = document.createElement('p');
    para.innerText = '2. Previous score ' + JSON.stringify(score);
    container.appendChild(para);

    const timeObject = JSON.parse(JSON.stringify(score));
    for (let i in timeObject) {
      timeObject[i] = Math.floor(Math.random() * 6 + 10);
    }

    const sortedAscArr = Object.keys(timeObject).sort(
      (a, b) => timeObject[a] - timeObject[b]
    );

    score[sortedAscArr[0]] = 50;
    score[sortedAscArr[1]] = 25;

    console.log('Updated new score ',score);
    para = document.createElement('p');
    para.innerText = 'Updated new score ' + JSON.stringify(score);
    container.appendChild(para);
    
    console.log("Race100M winner is ", sortedAscArr[0]);
    para = document.createElement('p');
    para.innerText = 'Race100M winner is '+sortedAscArr[0];
    container.appendChild(para);
    
    callback(score, HighJump);
  }, 3000);
}

// 3.Long Jump function declaration
function LongJump(score, callback) {
  setTimeout(() => { 
    console.log('Previous score ', score);
    para = document.createElement('p');
    para.innerText = '3. Previous score ' + JSON.stringify(score);
    container.appendChild(para);

    const keysName = Object.keys(score);
    const index = Math.floor(Math.random() * keysName.length);
    score[keysName[index]] += 150;
    
    console.log('Updated new score ', score);
    para = document.createElement('p');
    para.innerText = 'Updated new score ' + JSON.stringify(score);
    container.appendChild(para);

    console.log('LongJump winner is ', keysName[index]);
   para = document.createElement('p');
    para.innerText = 'LongJump winner is ' + keysName[index];
   container.appendChild(para);
   
    callback(score, AwardCeremony);
  }, 2000);
}

// 4.High Jump function declaration
function HighJump(score, callback) {
  console.log('Previous score ', score);
  para = document.createElement('p');
  para.innerText = '4. Previous score ' + JSON.stringify(score);
  container.appendChild(para);

  const team = prompt('What colour secured the highest jump..?');
  if (!score.hasOwnProperty(team) || team == null) {
    console.log('Event was cancelled');
    para = document.createElement('p');
    para.innerText = 'Event was cancelled';
    container.appendChild(para);
   
  } else {
    score[team] += 100;
    
    console.log('Updated new score ', score);
    para = document.createElement('p');
    para.innerText = 'Updated new score ' + JSON.stringify(score);
    container.appendChild(para);
   
    console.log('HighJump winner is ', team);
    para = document.createElement('p');
    para.innerText = 'HighJump winner is ' + team;
    container.appendChild(para);
   
  }
  
  callback(score);
}

// 5.Award Ceremony function declaration
function AwardCeremony(score) {
  console.log('Previous score ', score);
  para = document.createElement('p');
  para.innerText = '5. Previous score ' + JSON.stringify(score);
  container.appendChild(para);
  
  const rank = ['first', 'second', 'third'];
  let j = 0;
  score = Object.entries(score).sort((a, b) => b[1] - a[1]);
  for (let i in score) {
    console.log(`${score[i][0]} came ${rank[j++]} with ${score[i][1]} points.`);
    para = document.createElement('p');
    para.innerText = `${score[i][0]} came ${rank[j++]} with ${
      score[i][1]
    } points.`;
    container.appendChild(para);
    
  }
}

// start the process through calling OpeningCeremony() function
OpeningCeremony();