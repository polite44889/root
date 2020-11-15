const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const photo = document.querySelector('#photo');

document.addEventListener("DOMContentLoaded",
     () =>{
        let i = 0;
        let k = 0;
        name.addEventListener("click",  ()=> {
                k++;
                if (i > 12) {
                    i = 1;
                } else {
                    i++;
                }
                if (k % 5) {
                    setAnother(i);
                } else {
                    setMe();
                }

            });
    }
);

function setAnother(i) {
    $ajaxUtils.sendGetRequest("https://reqres.in/api/users/" + i,
             (request)=> {
                const {email,first_name,avatar} = JSON.parse(request.responseText).data;
                 name.innerHTML = first_name;
                 mail.innerHTML = email;
                 photo.src = avatar;
            });
}

function setMe() {
    name.innerHTML = "Nazar Yaroshchuk";
    mail.innerHTML = "mrmushroom413@gmail.com";
    photo.src = "photo.jpg";
}


