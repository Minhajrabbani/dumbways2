function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("nohp").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("text").value;

    if (name==""){
        return alert("Nama Harus diisi!!!");
    } else if(email=="") {
        return alert ("Email Harus diisi !!!");
    } else if (phone == "") {
        return alert("Nomor telfon harus diisi !!!");
    } else if (subject == "") {
        return alert ("Subject harus dipilih !!!");
    } else if (message == "") {
        return alert ("Pesan harus diisi !!!");
    }

let receiver = "minhajrobbani@gmail.com";

let a = document.createElement("a");

a.href = `mailto:${receiver}?subject=${subject}&body= Halo, nama saya ${name}, ${message}. Silahkan hubungi saya di nomor ${phone}, terima kasih.`;
a.click();

console.log(name);
console.log(email);
console.log(phone);
console.log(subject);
console.log(message);

let emailer = {
    name, 
    email,
    phone,
    subject,
    message,
};

console.log(emailer)
}
