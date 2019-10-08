Bmob.initialize("b74ac2feaf9f7003", "888888");

$(document).ready(function() {
    $(function () {
        function chooseImage(fileid, imgid, fileValId) {
            var fileObj = document.getElementById(fileid); 
            if (typeof (fileObj) == "undefined" || fileObj.files.length == 0) {
                 console.log('file ' + fileid + ' not exists');
                 return;
            }
            var file = fileObj.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            //save base64 code 
            reader.onload = function (e) {
                var imgResult = e.target.result;
                saveImage(imgResult);
            };
        };

        function saveImage(base64img) {
            const query = Bmob.Query('images');
            query.set("base64img", base64img)
            query.save().then(res => {
                alert("success");
                console.log(res);
            }).catch(err => {
                alert("err");
                console.log(err);
            })
        }

        function downlaodImages() {
            const query = Bmob.Query("images");
            query.select("objectId");
            query.find().then(res => {
                for(var i=0;i<res.length;i++) {
                    const inner = Bmob.Query('tableName');
                    inner.get(res[i].objectId).then(res => {
                        console.log(res);
                        showImage(res.base64img);
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

        $('#file').on('change', function () {
            chooseImage('file', 'photo', 'fileVal');
        });

        $('#download').on('click', function() {
            downlaodImages();
        })
    });
    
});