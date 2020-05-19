$(document).ready(function() {
    $(function(){
        window.onload = function() {
            clic()
        }
        function clic(){
            for(var i=0;i<5;i++) {
                document.getElementById("content").innerHTML += "</br><input name=\"按钮\" type=\"button\" onClick=\"buttonClick()\" value=\"按钮\"><\/input>";
            }
            
        }

        function buttonClick() {
            alert('HAHAHA')
        }
    })
    
});

