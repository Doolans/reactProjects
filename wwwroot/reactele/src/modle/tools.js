var tools={
    getSign(json){

        var arr=[];

        for(var attr in json){

            arr.push(attr);
        }

    //对属性进行排序 ASCII 字符顺序
            arr=arr.sort();

            //拼接签名的字符串

            var str='';

            for(var i=0;i<arr.length;i++){

            str+=arr[i]+json[arr[i]];
        }

        return str;

    }


}

export default tools;