$(document).ready(function(){
    const names = ["Blazer", "Franklin", "Blacksmith", "Tennesee", "Buckeye", "Bronco"]

    $("#btncount").click(function() {
        const count = $("#count").val();

        if(isNaN(count)){
            alert("Please only enter numerical values");
            $("#count").val("");
            return;
        }

        if(count > 6 ){
            alert("Max number can be 6");
            return;
        }

        let templates = []
        for(let i = 1; i <= count; i++){
            templates.push(`<div class="row"> <div class="col"><img src="./img/h${i}" alt=""> </div></div>`)
        }

     });

    $("#btnStart").click(function() { })

})