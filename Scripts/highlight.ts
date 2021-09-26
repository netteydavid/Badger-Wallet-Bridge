import * as $ from "jquery"

const addressFormat: RegExp = /\b((1|3|bc)[a-z0-9]{13,73})/gi;
const replacement: string = `<span class='badgerAddr'><a href='bitcoin:$1'>$1</a></span>`;

replacer("p,b,i,:header,td,th,span,li,ol,dd,dt,div");

function replacer(elements: string){
    var children = $(elements);
    for (var i = 0; i < children.length; ++i){
        var element = $(children[i]);
        if (element != null){
            let innerHtml: string = element.html();
            if (innerHtml != null && innerHtml != ""){
                element.html(innerHtml.replace(addressFormat, replacement));
            }
        }
    }
}