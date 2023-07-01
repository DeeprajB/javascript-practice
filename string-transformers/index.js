window.onload = function(){
    let output;
    const input = document.querySelector("input");
    input.addEventListener("keyup", function(e){
        output = e.target.value;
        document.getElementById('lower-case-output').innerHTML = output.toLowerCase()
        document.getElementById('upper-case-output').innerHTML = output.toUpperCase()
        document.getElementById('camel-case-output').innerHTML = toCamelCase(output)
        document.getElementById('pascal-case-output').innerHTML = toPascalCase(output)
        document.getElementById('snake-case-output').innerHTML = toSnakeCase(output)
        document.getElementById('kebab-case-output').innerHTML = toKebabCase(output)
        document.getElementById('trim-output').innerHTML = toTrim(output);
    });
}

function toCamelCase(str){
    return str.replace(/\W+(.)/g, function(match, chr)
       {
            return chr.toUpperCase();
        });
}

function toPascalCase(str){
    return (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
}

function toSnakeCase(str){
    return (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.slice(1)}`).join('_');
}

function toKebabCase(str){
    return (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.slice(1)}`).join('-');
}

function toTrim(str){
    return str.replace(/\s/g, '')
}