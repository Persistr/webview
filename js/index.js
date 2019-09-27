// coded by @lasjorg
// eslint-disable-next-line no-unused-vars
const projectName = 'portfolio';


$(document).ready(function() {
    $(function(){
        var cont=0;
        var font=$("#text").html();
        function run(){
            $("#text").html(font.substring(0,cont++));
        }
        setInterval(run, 150);
    })
    
});
