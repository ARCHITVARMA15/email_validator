const subBtn = document.querySelector("#submitBtn");

let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "architvarma10",
    "email": "architvarma10@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

subBtn.addEventListener("click", async(e) => {
    e.preventDefault(); /* some reload logic while submitting*/
    console.log("clicked");
    resultCont.innerHTML =`<img width="50px" src="img/loading.svg" alt="loadingresults">`
    let key = "ema_live_EIBaNII3L8kJtMRVVj6J5mDp6093RKsJzJH8deLq";
    let email = document.getElementById("username").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}.io`
    let res =await fetch(url);
    let result = await res.json();
    let str = '';


    /* This is an important part of the projrct where you need to aplly logic to 
    how to show the results */
    for (key of Object.keys(result)) {
    if(result[key] !=="" && result[key]!== " "){
        str = str + `<div>${key}:${result[key]}</div>`
    }
    
        
    }
    console.log(str)

    resultCont.innerHTML = str;
});


