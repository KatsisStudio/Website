// https://stackoverflow.com/a/24103596
function setCookie(name, value)
{
    document.cookie = `${name}=${value}; expires=${new Date(new Date().setFullYear(new Date().getFullYear() + 1))}`;
}
function getCookie(name)
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        if (getCookie("consent") === "true") {
            document.getElementById("disclaimer").hidden = true;
            document.getElementById("content").hidden = false;
        }
        document.getElementById("entry-confirm").addEventListener("click", () => {
            setCookie("consent", "true");
            document.getElementById("disclaimer").hidden = true;
            document.getElementById("content").hidden = false;
        });
    
        document.getElementById("entry-deny").addEventListener("click", () => {
            window.location.href = "https://google.com";
        });
    }
};