Bmob.initialize("b74ac2feaf9f7003", "4182b3d23204544c67ed307bcfa7318c");

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
            reader.onload = function (e) {
                var imgResult = e.target.result;
                saveImage(imgResult);
                
                var imgObj = document.getElementById(imgid);
                if (typeof (imgObj) != "undefined") {
                    imgObj.setAttribute("src", imgResult);
                }
                var fileValObj = document.getElementById(fileValId);
                if (typeof (fileValObj) != "undefined") {
                    fileValObj.setAttribute("value", imgResult);
                }
            };
        };

        function saveImage(base64img) {
            const query = Bmob.Query('tableName');
            query.set("base64img", base64img)
            query.save().then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }

        $('#file').on('change', function () {
            chooseImage('file', 'photo', 'fileVal');
        });
    });
    
});