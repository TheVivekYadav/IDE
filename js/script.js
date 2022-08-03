function output() {
    var html_code;
    var css_code;
    var start = [];
    var end = [];
    var new_code = []
    // html
    html_code = document.getElementById("html").innerHTML;
    css_code = document.getElementById("css").innerHTML;
    var print = document.getElementById('output')
    html_code = html_code.replace(/&lt;/g, "<")
    html_code = html_code.replace(/&gt;/g, ">")
    html_code = html_code.replace(/<div>/g,"")
    html_code = html_code.replace(/<\/div>/g,"")
    html_code = html_code.replace(/<br>/g,"")
print.innerHTML = html_code;
    console.log(print)
    console.log(html_code);

    // css
    css_code = document.getElementById("css").innerHTML;
    css_code = css_code.replace(/<div>&nbsp; &nbsp;/g,"")
    // css_code = css_code.replace(/<div>/g,"")
    css_code = css_code.replace(/<\/div>/,"")
    console.log(css_code)

    //index of css
    var index = html_code.indexOf("style")

    for (var i = 0; i < index; i++){
        console.log(html_code[i])
        start += html_code[i]
}
console.log(start)
for (var i = index; i < html_code.length; i++){
    end += html_code[i]
}
console.log(end)
new_code = start + end
// new_code = new_code.replace(/<div>/g,"")
// new_code = new_code.replace(/<\/div>/g,"")
// new_code = new_code.replace(/<br>/g,"")

console.log(new_code)



} 
