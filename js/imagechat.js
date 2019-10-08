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
                alert(reader.result);
                var imgResult = e.target.result;
                alert(imgResult);
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
        $('#file').on('change', function () {
            chooseImage('file', 'photo', 'fileVal');
        });
    });
    
});