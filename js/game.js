Bmob.initialize("e59aaec7293dfd82", "as582d");

$(document).ready(function() {
    $(function(){
        //读取玩家信息 传入id
        function readInfo() {
            var id = document.getElementById('userId').value;
            const query = Bmob.Query("UserTable");
            query.equalTo("ID","==",id);
            query.find().then(res => {
                //更新数据
                
                console.log(res);
            });
            
        }



        $('#read').on('click', function() {
            readInfo();
        })
    })
    
});