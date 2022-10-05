function makeclone(){
    if((window.top.location.href!="about:blank")){
        var url = window.location.href;
        win = window.open();
        win.document.body.style.margin = "0";
        win.document.body.style.height = "100vh";
        var iframe = win.document.createElement("iframe");
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.margin = "0";
        iframe.referrerpolicy = "no-referrer";
        iframe.allow = "fullscreen";
        iframe.src = url.toString();
        win.document.body.appendChild(iframe);
        window.location.replace(localStorage.getItem("cloneURL"));
        alert('test');
        window.close();
    }
}

function askclone(){
  if (confirm("Would you like to clone now?")){
        if((window.top.location.href!="about:blank")){
            makeclone();
        }else{
            alert("You are already in an about:blank page");
        }
  	}
}

if (localStorage.getItem("cloneURL") == null) {
    localStorage.setItem("cloneURL", "https://mail.google.com");
}

if (localStorage.getItem("clone") == null) {
    localStorage.setItem("clone", confirm("Do want auto cloak?\n\nif you don't remember you can still press ctrl q\n\nnote: you can always change this and more in settings"));
    askclone();
} else if (localStorage.getItem("clone") == 'true') {
    makeclone();
}


document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'q' && e.ctrlKey) {
        e.preventDefault();
        makeclone();
    }
    else if (e.key.toLowerCase() === 'm' && e.ctrlKey) {
        e.preventDefault();
        window.location.href="/";
    }
});