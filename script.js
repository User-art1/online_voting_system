// Start voting
function startVoting(){
window.location.href="aadhaar.html";
}

// Open admin login
function openAdmin(){
window.location.href="admin_login.html";
}

// Logout
function logout(){
localStorage.clear();
window.location.href="index.html";
}


// Load results for admin dashboard
function loadResults(){

let votes=JSON.parse(localStorage.getItem("votes")) || {A:0,B:0,C:0};

let A=document.getElementById("A");
let B=document.getElementById("B");
let C=document.getElementById("C");

if(A) A.innerHTML=votes.A;
if(B) B.innerHTML=votes.B;
if(C) C.innerHTML=votes.C;

}

// Admin login
function adminLogin(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

if(username==="admin" && password==="admin123"){
window.location.href="admin_dashboard.html";
}
else{
alert("Invalid Login");
}

}

function validateAadhaar(){
    let a = document.getElementById("aadhaar").value;

    if(!users[a]){
        alert("Aadhaar not found ❌");
        return false;
    }

    // store user data
    localStorage.setItem("currentUser", JSON.stringify(users[a]));

    return true;
}

function showToast(msg){
    let t = document.createElement("div");
    t.innerText = msg;
    t.style.position = "fixed";
    t.style.bottom = "20px";
    t.style.right = "20px";
    t.style.background = "black";
    t.style.color = "white";
    t.style.padding = "10px";
    document.body.appendChild(t);

    setTimeout(()=>t.remove(),3000);
}

const users = {
"974213658029": { name:"Harsh", age:29, constituency:"Coimbatore", aadhaar:"974213658029", voterid:"TNH1234567" },
"561893274610": { name:"Komal", age:24, constituency:"Madurai", aadhaar:"561893274610", voterid:"TNK2345678" },
"842657193208": { name:"Yash", age:28, constituency:"Vijayawada", aadhaar:"842657193208", voterid:"APY3456789" },
"739162845027": { name:"Tanya", age:23, constituency:"Visakhapatnam", aadhaar:"739162845027", voterid:"APT4567890" },
"915836274109": { name:"Kunal", age:31, constituency:"Trivandrum", aadhaar:"915836274109", voterid:"KLK5678901" },
"684129573206": { name:"Aarti", age:26, constituency:"Kochi", aadhaar:"684129573206", voterid:"KLA6789012" },
"753928416205": { name:"Ramesh", age:34, constituency:"Hubli", aadhaar:"753928416205", voterid:"KAR7890123" },
"829416753082": { name:"Bhavna", age:22, constituency:"Belgaum", aadhaar:"829416753082", voterid:"KAB8901234" },
"962845731609": { name:"Suresh2", age:29, constituency:"Warangal", aadhaar:"962845731609", voterid:"TSU9012345" },
"741936285018": { name:"Neeraj", age:27, constituency:"Nashik", aadhaar:"741936285018", voterid:"MHN1122334" },

"893617254082": { name:"Pankaj", age:32, constituency:"Aurangabad", aadhaar:"893617254082", voterid:"MHP2233445" },
"674829153206": { name:"Swati", age:24, constituency:"Solapur", aadhaar:"674829153206", voterid:"MHS3344556" },
"951284736029": { name:"Ashok", age:35, constituency:"Tirupati", aadhaar:"951284736029", voterid:"APA4455667" },
"728361954207": { name:"Rekha", age:26, constituency:"Salem", aadhaar:"728361954207", voterid:"TNR5566778" },
"864295173608": { name:"Gaurav", age:28, constituency:"Jamshedpur", aadhaar:"864295173608", voterid:"JHG6677889" },
"593728416905": { name:"Monika", age:23, constituency:"Dhanbad", aadhaar:"593728416905", voterid:"JHM7788990" },
"742861953028": { name:"Sunil", age:31, constituency:"Aligarh", aadhaar:"742861953028", voterid:"UPS8899001" },
"915274836209": { name:"Preeti", age:25, constituency:"Bareilly", aadhaar:"915274836209", voterid:"UPP9900112" },
"683921574208": { name:"Rajat", age:29, constituency:"Moradabad", aadhaar:"683921574208", voterid:"UPR1011123" },
"872615394028": { name:"Nikita", age:22, constituency:"Siliguri", aadhaar:"872615394028", voterid:"WBN1213141" }
};
if(!localStorage.getItem("users")){
    localStorage.setItem("users", JSON.stringify(users));
}

function adminLogout(){
    alert("Logged out successfully");
    window.location.href = "index.html";
}

function submitVote(){

let candidate = document.querySelector('input[name="candidate"]:checked');

if(!candidate){
    alert("Please select a candidate");
    return;
}

let user = JSON.parse(localStorage.getItem("currentUser"));
let votes = JSON.parse(localStorage.getItem("votes")) || {A:0,B:0,C:0};
let votedUsers = JSON.parse(localStorage.getItem("votedUsers")) || [];

// prevent multiple voting
if(votedUsers.includes(user.aadhaar)){
    alert("You already voted!");
    return;
}

// count vote
votes[candidate.value]++;

// save
votedUsers.push(user.aadhaar);

localStorage.setItem("votes", JSON.stringify(votes));
localStorage.setItem("votedUsers", JSON.stringify(votedUsers));

alert("Vote Submitted ✅");
window.location.href = "success.html";
}
