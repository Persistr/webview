Bmob.initialize("b74ac2feaf9f7003", "888888");

$(document).ready(function() {
    $(function () {
        function chooseImage(fileid, imgid, fileValId) {
            var fileObj = document.getElementById(fileid); 
            if (typeof (fileObj) == "undefined" || fileObj.files.length == 0) {
                 console.log('file ' + fileid + ' not exists');
                 return;
            }
            for(var i=0;i<fileObj.files.length;i++) {
                var file = fileObj.files[i];
                var reader = new FileReader();
                reader.readAsDataURL(file);
                //save base64 code 
                var smaller = document.getElementById("small").value;
                
                reader.onload = function (e) {
                    let image = new Image() //新建一个img标签（还没嵌入DOM节点)
                    image.src = e.target.result
                    image.onload = function() {
                        let canvas = document.createElement('canvas'), 
                        context = canvas.getContext('2d'),
                        imageWidth = image.width / smaller,    //压缩后图片的大小
                        imageHeight = image.height / smaller,
                        data = ''

                        canvas.width = imageWidth
                        canvas.height = imageHeight

                        context.drawImage(image, 0, 0, imageWidth, imageHeight)
                        data = canvas.toDataURL('image/jpeg')

                        //压缩完成 

                        var tag = document.getElementById("tag").value;
                        saveImage(data, tag);
                    }           
                }; 
            }
            
        };

        function saveImage(base64img, tag) {
            //var innerId = id;
            const query = Bmob.Query('images');
            query.set("base64img", base64img)
            query.set("tag", tag); 
            query.save().then(res => {
                $.alert({
                    title: 'Msg!',
                    content: 'Up img success!',
                });
                console.log(res);
                updateNums();
            }).catch(err => {
                $.alert({
                    title: 'Msg!',
                    content: 'Up img failed!',
                });
                console.log(err);
            })
            
        }

        function downlaodImages() {
            const query = Bmob.Query("images");
            var tag = document.getElementById("tag").value;
            query.select("objectId");
            query.equalTo("tag","==",tag);
            query.find().then(res => {
                document.getElementById('list').innerHTML = "";
                document.getElementById('msg').innerText = "加载图片"+res.length+"张";
                for(var i=0;i<res.length;i++) {
                    const inner = Bmob.Query('images');
                    inner.get(res[i].objectId).then(res => {
                        console.log(res);
                        var myParent = document.getElementById("list"); 
                        var myImage = document.createElement("img");
                        //var infoText = document.createTextNode(res.createdAt);
                        var brDiv = document.createElement('br');
                        myImage.setAttribute("src", res.base64img);
                        myParent.appendChild(myImage);
                        myParent.appendChild(brDiv);
                        //myParent.appendChild(infoText);
                        myParent.appendChild(brDiv);
                    }).catch(err => {
                        console.log(err);
                    })
                }
                console.log(res);
                
                
            });
        }

        function showImage(base64img, imgid, fileValId) {
            var imgObj = document.getElementById(imgid);
            if (typeof (imgObj) != "undefined") {
                imgObj.setAttribute("src", imgResult);
            }
            var fileValObj = document.getElementById(fileValId);
            if (typeof (fileValObj) != "undefined") {
                fileValObj.setAttribute("value", imgResult);
            }
        }

        function deleteImages() {
            const query = Bmob.Query("images");
            query.select("objectId");
            query.find().then(res => {
                for(var i=0;i<res.length;i++) {
                    const query = Bmob.Query('images');
                    query.destroy(res[i].objectId).then(res => {
                        console.log(res)
                        updateNums();
                    }).catch(err => {
                        console.log(err)
                    })
                }
            });
            $.alert({
                title: 'Msg!',
                content: 'Delete all imgs in table!',
            });
            
        }

        function updateNums() {
            const query = Bmob.Query("images");
            query.select("objectId");
            query.find().then(res => {
                document.getElementById('nums').innerText = "库中共有图片"+res.length+"张";
            });
        }

        updateNums();

        $('#file').on('change', function () {
            chooseImage('file', 'photo', 'fileVal');
        });

        $('#download').on('click', function() {
            downlaodImages();
        })

        $('#delete').on('click', function() {
            deleteImages();
        })
    });
    
});