$(function () {  
    //console.log("jquery çalışıyor")

    var counter=$("#counter").text();
    $(".btn-success").click(function () {  
        //console.log("btn-success tıklandı")
        counter++;
        //console.log(counter)
        $("#counter").text(counter)
        setTextColor()
    })

    $(".btn-danger").click(function () {  
        //console.log("btn-danger tıklandı")
        counter--;
        //console.log(counter)
        $("#counter").text(counter)
        setTextColor()
    })

    function setTextColor() {  
        if (counter>=0) {
            $("#counter").attr("class", "text-success")
        } else {
            $("#counter").attr("class", "text-danger")
            
        }

    }
})