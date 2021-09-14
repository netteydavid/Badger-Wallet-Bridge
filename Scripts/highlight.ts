import * as $ from "jquery"

const target: string = "Google";
const replacement: string = "Frugal";

replacer(`p:contains('${target}')`);
replacer(`b:contains('${target}')`);
replacer(`i:contains('${target}')`);
replacer(`:header:contains('${target}')`);
replacer(`td:contains('${target}')`);
replacer(`th:contains('${target}')`);
replacer(`div:contains('${target}')`);
replacer(`a:contains('${target}')`);
replacer(`span:contains('${target}')`);
replacer(`li:contains('${target}')`);
replacer(`ol:contains('${target}')`);
replacer(`dd:contains('${target}')`);
replacer(`dt:contains('${target}')`);

function replacer(elements: string){
    var children = $(elements);
    for (var i = 0; i < children.length; ++i){
        var element = $(children[i]);
        if (element != null){
            let innerHtml: string = element.html();
            if (innerHtml != null && innerHtml != ""){
                element.html(innerHtml.replace(target, replacement));
            }
        }
    }
}