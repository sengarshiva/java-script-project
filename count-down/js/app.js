const endDate = "20 feb 2024 12:00 AM"

document.getElementById("end-date").innerText=endDate
const input = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()

    const diff = (end-now)/1000;

    if (diff<0) return;

      console.log(diff);

     input[0].value =Math.floor(diff/3600/24);   // convert into days
     input[1].value =Math.floor(diff/3600)%24;  // convert into hours


    //  console.log(Math.floor(diff/60)%60)

    input[2].value =Math.floor(diff/60)%60;     // convert into minutes
    input[3].value =Math.floor(diff)%60

     // input me data dalne ke liye .value ka use karte hai 
     

    // console.log(end);
    // console.log(now);
}

clock()  // initial call 
setInterval(
    ()=>{
        clock()
    },
    1000
)



// 1 day = 24 Hrs 
// 1hr =60 min 
// 60 min = 3600 sec 