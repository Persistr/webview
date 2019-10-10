Bmob.initialize("e59aaec7293dfd82", "as582d");

$(document).ready(function() {
    $(function(){
        //读取玩家信息 传入id
        function readInfo() {
            var id = document.getElementById('userId').value;
            const query = Bmob.Query("UserTable");
            query.equalTo("ID","==",id);
            query.find().then(res => {
                if(res.length > 0) {
                    //更新数据
                    document.getElementById('name').innerText = '姓名:' + res[0].name;
                    document.getElementById('rank').innerText = '等级:' + res[0].rank;
                    document.getElementById('hp').innerText = '生命值:' + res[0].HP;
                    document.getElementById('attack').innerText = '攻击力:' + res[0].attack;
                    document.getElementById('defense').innerText = '防御力:' + res[0].defense;
                }else {
                    $.alert({
                        title: 'Msg!',
                        content: '没有该账户信息!',
                    });
                }
                
                console.log(res);
            });
            
        }



        $('#read').on('click', function() {
            readInfo();
        })
    })
    
});