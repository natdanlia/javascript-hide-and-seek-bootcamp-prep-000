function getFirstSelector(selector){
  let firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget(){
  let app = document.getElementById('app');
  let findTarget = app.querySelector('div#nested div.target');
  return findTarget;
}

function deepestChild(){
  let app = document.getElementById('app');
  let findDeepest = app.querySelector('div#grand-node div div div div');
  return findDeepest;
}

function increaseRankBy(n){
  let  app = document.getElementById('app');
  let findAllRanked = app.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < findAllRanked.length; i++){
    findAllRanked[i].innerHTML = parseInt(findAllRanked[i].innerHTML) + n; 
  }
}
