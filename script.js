// Created by Agrifa Aditya Rumahorbo

alert("Marry Christmas and Happy New Year To You 😊")
alert("Semoga Tuhan Memberkati 😊😇🙏")

var el = document.getElementById("audio"); 
function playAudio() {
  el.play(autoplay);
}

function playAudio() {
        var source = "REMIX LAGU NATAL TERBARU DJ JINGLE BELLS.mp3";
        var audio = document.createElement("audio");
        audio.autoplay = true;
        audio.loop = true;
        audio.controls = true;
        audio.load();
        audio.addEventListener("load", function() {   audio.loop();
            audio.play();
            audio.controls();
        }, true);
            
        audio.src = source;

    }

    function audio() {
        $.ajax({url: "http://url/to/audiomusik", 
                success: function(totnotif) {
    
                if (totnotif > 0) {
                    //play sound
                    playAudio();
                }
    
                setTimeout(function(){ cekNotifikasi();}, 60000);//60 detik
            }
        });
    }
    
var nameval;
nameval1 = prompt("Masukkan Nama Anda");
nameval2 = "Marry Christmas 2022 & Happy New Year 2023 to You," +nameval1 +".Semoga Damai Natal dan Semangat Tahun Baru Selalu Menyertai Dirimu dan Keluargamu😊";

function validationfunc(){
    var montemp = setInterval(fun2,300);
    var i = 0;
  
    function fun2(){
        
    if(i < nameval2.length ){
    
    var couleur = Math.floor(Math.random()*0x808080 + 0x808080);
    var colo = couleur.toString();
    var colo2 = "";
        colo2 =  colo[0]+""+colo[1]+""+colo[2]+"" +colo[3]+"" +colo[4]+""+colo[5];
    
    var et1val2 = document.getElementById("madiv");
    
    var et1val = document.getElementById('et1');
    
    var et1val3 = document.getElementById('et2');
    
       et1val.value += nameval2[i];
       et1val3.style.color ="#"+colo2;
       et1val3.innerHTML += nameval2[i];
       i++;
       
    }
    
    else{
        i = 0;
        clearInterval(montemp);
    }
    }
}
