
let dataBlog = [];

function addBlog(event) {
   event.preventDefault();

   let title = document.getElementById("blog-title").value;
   let content = document.getElementById("blog-content").value;
   let image = document.getElementById("image").files;
   let startDate = document.getElementById("start-date").value;
   let endDate = document.getElementById("end-date").value;
   

   if (title == "") {
    return alert("nama projectnya belum diisi");
  } else if (startDate == "") {
    return alert("start date belom diisi");
  } else if (endDate == "") {
    return alert("end date belom diisi");
  } else if (content == "") {
    return alert("isi description");
  } else if (image == "") {
    return alert("masukin file gambar");
  } 
   

   image = URL.createObjectURL(image[0]);
   console.log(image);

   let blog = {
    title,
    content,
    image,
    startDate,
    endDate,
    postAt: new Date()
    
   };

   dataBlog.push(blog);
   console.log(dataBlog);

   renderBlog();
}

function renderBlog(){
    document.getElementById("contents").innerHTML= "";

    for (let index = 0; index < dataBlog.length; index++){
        document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
                        <div class="blog-image">
                            <img src="${dataBlog[index].image}" alt=""/>
                        </div>
        
                        <div class="blog-isi">
                            
                            <h4>
                                <a href="blogdetail.html" target="_blank">${dataBlog[index].title}</a>
                            </h4>
                            <p style="font-size: 15px; color: grey">${getFullTime(dataBlog[index].postAt)}</p>
                            <p class="durasi">${getDistanceTime(dataBlog[index].postAt)}</p>
                            
                            <p class="isicontent">
                                ${dataBlog[index].content} 
                            </p>
                            
                            <div class="icons">
                            <i class="fa-brands fa-node-js" id="nodejs-icon"></i>
                            <i class="fa-brands fa-react" id="reactjs-icon"></i>
                            <i class="fa-brands fa-golang fa-xl fa-fw" id="go-icon"></i>
                            </div>
                                
                            <div class="button-group">
                                <button class="edit">Edit</button>
                                <button class="delete">Delete</button>
                            </div>
                        </div>
                    </div>
        `;
    }
}

function getFullTime(time) {
  
    let monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    let date = time.getDate();
    // console.log(date);
  
    let monthIndex = time.getMonth();
    // console.log(monthIndex);
  
    let year = time.getFullYear();
    // console.log(year);
  
    let hours = time.getHours();
    let minutes = time.getMinutes();
    // console.log(minutes);
  
    if (hours <= 9) {
      hours = "0" + hours;
    } else if (minutes <= 9) {
      minutes = "0" + minutes;
    }
  
    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
  }
  
  function getDistanceTime(time) {
    let timeNow = new Date(document.getElementById("end-date").value);
    let timePost = new Date(document.getElementById("start-date").value);
  
    // waktu sekarang - waktu post
    let distance = timeNow - timePost; // hasilnya milidetik
    console.log(distance);
  
    let milisecond = 1000; // milisecond
    let secondInHours = 3600; // 1 jam 3600 detik
    let hoursInDays = 24; // 1 hari 24 jam
    let daysInWeeks= 7 // 1 weeks is 7 days
    let weeksInMonths = 4 // 1 month is 4 weeks
    let monthsInYears = 12 // 1 year is 12 months
  

    let distanceYear = Math.floor(distance/(milisecond * secondInHours * hoursInDays * daysInWeeks * weeksInMonths * monthsInYears));
    let distanceMonth = Math.floor(distance/(milisecond * secondInHours * hoursInDays * daysInWeeks * weeksInMonths));
    let distanceWeek = Math.floor(distance/(milisecond * secondInHours * hoursInDays * daysInWeeks));
    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDays)); // 1/86400000
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1/3600000
    let distanceMinutes = Math.floor(distance / (milisecond * 60)); // 1/60000
    let distanceSeconds = Math.floor(distance / milisecond); // 1/1000
  
    if (distanceYear > 0) {
        return `${distanceYear} Year Ago`;}
        else if (distanceMonth > 0) {
            return `${distanceMonth} Month Ago`;
        } else if(distanceWeek > 0) {
            return `${distanceWeek} Week Ago`;
        } else if (distanceDay > 0) {
            return `${distanceDay} Day Ago`;
        } else if (distanceHours > 0) {
            return `${distanceHours} Hours Ago`;
        } else if (distanceMinutes > 0) {
            return `${distanceMinutes} Minutes Ago`;
        } else {
            return `${distanceSeconds} Seconds Ago`;
    }
  }

  setInterval(function () {
    renderBlog();
  }, 30000);