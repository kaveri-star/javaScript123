// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkFormEL=document.getElementById('bookmarkForm');
let siteNameInputele=document.getElementById('siteNameInput');
let siteUrlInput=document.getElementById('siteUrlInput');
let submitBtn=document.getElementById('submitBtn');
let siteNameErrMsg=document.getElementById('siteNameErrMsg');
let siteUrlErrMsg=document.getElementById('siteUrlErrMsg');
let bookmarksList=document.getElementById('bookmarksList');

function addbookmrks(){
    let siteName=siteNameInputele.value;
    let siteurl=siteUrlInput.value;
    
    let listitem=document.createElement("li");
    bookmarksList.appendChild(listitem);
    
    let bookmarkname=document.createElement("p");
    let bookmarkurl=document.createElement('a');
    bookmarkname.textContent=siteName;
    bookmarkurl.textContent=siteurl;
    bookmarkurl.href=siteurl;
    bookmarkurl.setAttribute("target","_blank");
    bookmarksList.classList.toggle("d-none");
    listitem.appendChild(bookmarkname);
    listitem.appendChild(bookmarkurl);
}   
    siteUrlInput.addEventListener("change",function(event){
        if(event.target.value===""){
            siteUrlErrMsg.textContent="Required";
        }
        else{
            siteUrlErrMsg.textContent="";
        }
        
    });
    siteNameInputele.addEventListener("change",function(event){
        if(event.target.value===""){
            siteNameErrMsg.textContent="Required";
        }
        else{
            siteNameErrMsg.textContent="";
        }
    });
    
    bookmarkFormEL.addEventListener("submit",function(event){
        event.preventDefault();
        addbookmrks();
    });
