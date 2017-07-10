export const KEY = "goodsdata";
export var valueObj = {goodsid : 0, count: 0};

export function setItem(value){
    var jsonString = localStorage.getItem(KEY);
    jsonString = jsonString || '[]';
    var arr = JSON.parse(jsonString);
    arr.push(value);
    localStorage.setItem(KEY, JSON.stringify(arr));
}

export function getItem(){
    var jsonString = localStorage.getItem(KEY);
    jsonString = jsonString || '[]';

    return JSON.parse(jsonString);
}

export function remoteItem(){

}
