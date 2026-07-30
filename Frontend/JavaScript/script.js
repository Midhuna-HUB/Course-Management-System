// ================= INITIAL SETUP =================


if (localStorage.getItem("students") === null) {

    localStorage.setItem("students", "0");

}


if (localStorage.getItem("enrollments") === null) {

    localStorage.setItem("enrollments", "0");

}


if (localStorage.getItem("courses") === null) {

    localStorage.setItem("courses", JSON.stringify([]));

}




// ================= LOGIN =================


function login() {


    let user = document.getElementById("username").value;

    let pass = document.getElementById("password").value;



    if(user=="" || pass==""){

        alert("Please fill all fields");

        return;

    }



    // Admin Login

    if(user=="admin" && pass=="1234"){


        localStorage.setItem("login","admin");


        alert("Admin Login Successful");


        window.location.href="admin-dashboard.html";


        return;

    }





    // Student Login


    let savedUser = localStorage.getItem("username");

    let savedPass = localStorage.getItem("password");



    if(user==savedUser && pass==savedPass){


        localStorage.setItem("login","student");


        alert("Login Successful");


        window.location.href="dashboard.html";


    }

    else{


        alert("Invalid Username or Password");


    }


}






// Enter key login


document.addEventListener("keydown",function(event){


    if(event.key=="Enter"){


        if(document.getElementById("username") &&
           document.getElementById("password")){


            login();

        }

    }


});







// ================= REGISTER =================


function register(){



let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let username=document.getElementById("username").value;

let password=document.getElementById("password").value;

let confirmPassword=document.getElementById("confirmPassword").value;





if(name=="" ||
email=="" ||
username=="" ||
password=="" ||
confirmPassword==""){


alert("Please fill all fields");

return;


}





if(password!=confirmPassword){


alert("Passwords do not match");

return;


}





localStorage.setItem("name",name);

localStorage.setItem("email",email);

localStorage.setItem("username",username);

localStorage.setItem("password",password);




// Increase student count


let students =
Number(localStorage.getItem("students")) || 0;


students++;


localStorage.setItem("students",students);




alert("Registration Successful");


window.location.href="login.html";



}








// ================= FORGOT PASSWORD =================


function forgotPassword(){


let email=document.getElementById("email").value;


let savedEmail=localStorage.getItem("email");



if(email==""){


alert("Please enter email");


return;


}




if(email==savedEmail){


alert("Reset link sent successfully");


window.location.href="reset-password.html";


}

else{


alert("Email not found");


}



}








// ================= RESET PASSWORD =================



function resetPassword(){


let newPassword=
document.getElementById("newPassword").value;


let confirmPassword=
document.getElementById("confirmPassword").value;




if(newPassword=="" || confirmPassword==""){


alert("Please fill all fields");

return;


}




if(newPassword!=confirmPassword){


alert("Passwords do not match");

return;


}




localStorage.setItem("password",newPassword);



alert("Password Reset Successful");


window.location.href="login.html";



}








// ================= LOGOUT =================


function logout(){


localStorage.removeItem("login");


alert("Logged Out");


window.location.href="login.html";


}








// ================= ENROLL COURSE =================



function enrollCourse(){



let enrollments =
Number(localStorage.getItem("enrollments")) || 0;



enrollments++;



localStorage.setItem("enrollments",enrollments);




alert("Course Enrolled Successfully!");



window.location.href="enrollment-success.html";



}








// ================= DASHBOARD =================



if(document.title=="Dashboard | CourseHub"){



let name=localStorage.getItem("name");



let heading=document.getElementById("welcomeHeading");



if(name && heading){


heading.innerHTML="👋 Welcome "+name;


}




let enroll=document.getElementById("enrolledCourses");


if(enroll){


let count=
Number(localStorage.getItem("enrollments")) || 0;


enroll.innerHTML=count;


}





}









// ================= ADMIN DASHBOARD =================



if(document.title=="Admin Dashboard | CourseHub"){



let students=
document.getElementById("students");


let enrollments=
document.getElementById("enrollments");



let totalCourses=
document.getElementById("totalCourses");





if(students){


students.innerHTML=
localStorage.getItem("students");


}





if(enrollments){


enrollments.innerHTML=
localStorage.getItem("enrollments");


}





if(totalCourses){


let courses=
JSON.parse(localStorage.getItem("courses")) || [];


totalCourses.innerHTML=courses.length;


}





}









// ================= ADD COURSE =================



function addCourse(){



let courseName=
document.getElementById("courseName").value;



let category=
document.getElementById("category").value;



let description=
document.getElementById("description").value;



let duration=
document.getElementById("duration").value;



let instructor=
document.getElementById("instructor").value;






if(courseName=="" ||
category=="Select Category" ||
description=="" ||
duration=="" ||
instructor==""){


alert("Please fill all fields");


return;


}





let courses=
JSON.parse(localStorage.getItem("courses")) || [];





courses.push({


name:courseName,

category:category,

description:description,

duration:duration,

instructor:instructor



});





localStorage.setItem(
"courses",
JSON.stringify(courses)
);





alert("Course Added Successfully");



window.location.href="courses.html";



}








// ================= UPDATE COURSE =================



function updateCourse(){



let courseName=
document.getElementById("editCourseName");



if(courseName){


localStorage.setItem(
"courseName",
courseName.value
);


}





alert("Course Updated Successfully");



window.location.href="admin-dashboard.html";



}