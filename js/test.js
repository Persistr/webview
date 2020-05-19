$(document).ready(function() {
    $(function(){
        window.onload = function() {
            clic()
        }
        function clic(){

            for(var i=0;i<5;i++) {
                var MyDiv = document.getElementById("content");
                var bt = document.createElement("button");
                bt.innerHTML = 'tiye';
                bt.onclick = function() {
                    alert('tianyehhh')
                }
                MyDiv.appendChild(bt);
            }
            
        }

        
    })
    
});

