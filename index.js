var arr = [{
    num:9,
    color: '#72C3DC'
},{
    num:1,
    color: '#2B8EAD'
},{
    num:2,
    color: '#6F98A8'
},{
    num:8,
    color: '#2F454E'
},{
    num:3,
    color: '#72C3DC'
},{
    num:6,
    color: '#6F98A8'
},{
    num:4,
    color: '#2F454E'
},{
    num:5,
    color: '#72C3DC'
},{
    num:7,
    color: '#2B8EAD'
}]

function compare(a,b){
    const num1 = a.num;
    const num2 = b.num;
    if(num1 > num2){
        return 1
    }else{
        return -1;
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


document.addEventListener('DOMContentLoaded', function (event) {
    prepareResultSet(shuffle(arr));
    document.getElementById('#btnSort').addEventListener('click', (e)=>{
        prepareResultSet(arr.sort(compare));
        
    });
    document.getElementById('#btnShuffle').addEventListener('click', (e)=>{
        prepareResultSet(shuffle(arr));
        
    });
});

function prepareResultSet(arr){
    var resultSetDiv = document.getElementById("leftPanelContent");
    var resultList = '';
    resultSetDiv.innerHTML = resultList;
    for(let i =0; i< arr.length; i++){
        resultList += prepareBlock(arr[i]); 
    }
    resultSetDiv.innerHTML += resultList;

}
function prepareBlock(obj){
    var resultSetData = '<div style="background-color: '+obj.color+'" class="blocks"><span style="background-color: '+ obj.color+'" class="miniclip">&nbsp;</span><span class="numSpan">'+obj.num+'</span></div>'
    return resultSetData;
}
