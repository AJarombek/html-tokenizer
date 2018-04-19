const parse5 = require('parse5');

function tokenize(data) {

    // Dive into the html down to the container div
    const document = parse5.parse(data);
    const html = document.childNodes[0];
    const body = html.childNodes[1];
    const div = body.childNodes[0];

    return tokenizeElement(div.childNodes);
}

function tokenizeElement(children) {

    let htmlTokens = [];

    console.info(children);

    children.forEach(child => {
        htmlTokens = tokenizeChild(child, htmlTokens);
    });

    return htmlTokens;
}

function tokenizeChild(child, tokens) {
    if (child.nodeName === '#text' && child.value === '\n') {
        return tokens;
    }

    return [
        ...tokens,
        {
            el: child.nodeName,
            attributes: tokenizeAttrs(child.attrs),
            value: child.value,
            children: child.childNodes ? tokenizeElement(child.childNodes) : null
        }
    ]
}

function tokenizeAttrs(attributes) {
    console.info(attributes);
    let attrs = [];

    if (!attributes || attributes.length === 0) {
        return null;
    } else {
        attributes.forEach(attribute => {
            attrs = pushAttribute(attribute, attrs)
        });
        return attributes;
    }
}

function pushAttribute(attribute, attrs) {
    return [
        ...attrs,
        {
            key: attribute.name,
            value: attribute.value
        }
    ]
}

module.exports = tokenize;