//Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.
//href, hreflang, rel, target, and type
function getAttributes() {
const hrefAttribute = document.getElementById('w3r').href
const hreflangAtrribute = document.getElementById('w3r').hreflang
const relAtrribute = document.getElementById('w3r').rel
const targetAtrribute = document.getElementById('w3r').target
 const typeAtrribute = document.getElementById('w3r').type
 console.log(hrefAttribute);
 console.log(hreflangAtrribute);
 console.log(relAtrribute);
 console.log(targetAtrribute);
 console.log(typeAtrribute);
}
