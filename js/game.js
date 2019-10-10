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
                        content: '没有角色信息!',
                    });
                }
                
                console.log(res);
            });
            
        }
        var mList = []
        //随机加载对应等级的怪物的数据
        function loadMonster(rank) {
            const query = Bmob.Query("Monster");
            query.equalTo("rank","==",rank);
            query.find().then(res => {
                mList = res;
                updateList();
                console.log(res);
            });
        }
        //通过存储的怪物数据刷新怪物列表
        function updateList() {
            mList = mList.sort(function(){
                return 0.5 - Math.random();
            });
            var nums = mList.length;
            document.getElementById('m1').innerText = mList[0%nums].name;
            document.getElementById('m2').innerText = mList[1%nums].name;
            document.getElementById('m3').innerText = mList[2%nums].name;
            document.getElementById('m4').innerText = mList[3%nums].name;
            document.getElementById('m5').innerText = mList[4%nums].name;
        }



        //挂机模块

        $('#fight').on('click', function() {
            loadMonster("1");
            //updateList();
        })
        $('#read').on('click', function() {
            readInfo();
        })
    })
    
});