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

export function removeItem(goodsid){
    var arr = getItem();

    for(var i = arr.length - 1; i >= 0; i--){
        if ( arr[i].goodsid == goodsid ) {
            arr.splice(i, 1);
        }
    }

    localStorage.setItem(KEY, JSON.stringify(arr));
}

export function getgoodsObject(){

    var arr = getItem();

    var resObj ={};

    for (var i = 0; i < arr.length; i++) {

        var item = arr[i];

        if (!resObj[item.goodsid]) {

            resObj[item.goodsid] = item.count;

        }else {
            var count = resObj[item.goodsid];

            resObj[item.goodsid] = count + item.count;
        }

    }
    console.log(resObj[87]);
    return resObj;
}

export function updateData(obj){
    var arr = getItem();
    var count = 1;
    if (obj.type == "add") {
        arr.push({goodsid : obj.goodsid, count: count});
    }else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].goodsid == obj.goodsid) {
                if (arr[i].count > 1) {
                    arr[i].count = arr[i].count - 1;
                    break;
                }else {
                    arr.splice(i, 1);
                    break;
                }
            }
        }
    }

    localStorage.setItem(KEY,JSON.stringify(arr));
}
