/**
 * Parse the HTML document and create a list of tokens in a JavaScript object
 * @author Andrew Jarombek
 * @since 4/18/2018
 */

const parse5 = require('parse5');

/**
 * Function to start the process of tokenizing the HTML document.  The HTML will be represented
 * in JSON format
 * @param data - the HTML contents
 */
function tokenize(data) {
  // Dive into the html down to the container div
  const document = parse5.parse(data);
  const html = document.childNodes[0];
  const body = html.childNodes[1];
  const div = body.childNodes[0];

  return tokenizeElement(div.childNodes);
}

/**
 * Take an HTML element in the document and write all its information and children to an object
 * @param children - the children HTML elements and their information
 * @returns {Array} - An array of all the HTML tokens from this element and its children
 */
function tokenizeElement(children) {
  let htmlTokens = [];

  children.forEach((child) => {
    htmlTokens = tokenizeChild(child, htmlTokens);
  });

  return htmlTokens;
}

/**
 * Create a token for a single child.
 * @param child - the child HTML element information
 * @param tokens - the currently existing list of HTML tokens to build on
 * @returns {*} - a new list of tokens
 */
function tokenizeChild(child, tokens) {
  // Ignore children containing empty text
  if (child.nodeName === '#text' && child.value === '\n') {
    return tokens;
  }

  if (
    child.nodeName === 'sup' ||
    child.nodeName === 'code' ||
    child.nodeName === 'codesnippet' ||
    child.nodeName === 'span'
  ) {
    const value = child.childNodes[0].value;

    return [
      ...tokens,
      {
        el: child.nodeName,
        attributes: tokenizeAttrs(child.attrs),
        value: value.replace('\n', ''), // Remove the first occurrence of a newline character
        children: null,
      },
    ];
  } else {
    const value = child.value;

    return [
      ...tokens,
      {
        el: child.nodeName,
        attributes: tokenizeAttrs(child.attrs),
        value: value ? value.replace(/\n/g, ' ') : null, // Remove the newline character
        children: child.childNodes ? tokenizeElement(child.childNodes) : null,
      },
    ];
  }
}

/**
 * Tokenize all the attributes for an HTML element
 * @param attributes - a list of all the elements attributes
 * @returns {*} - an array of object representations of attributes
 */
function tokenizeAttrs(attributes) {
  let attrs = {};

  if (!attributes || attributes.length === 0) {
    return null;
  } else {
    attributes.map((attribute) => {
      attrs = pushAttribute(attribute, attrs);
    });
    return attrs;
  }
}

/**
 * Create a token for an HTML elements attribute
 * @param attribute - an attribute to tokenize
 * @param attrs - the currently existing list of attributes for this HTML element
 * @returns {{}} - a new object of attributes
 */
function pushAttribute(attribute, attrs) {
  let attributeName = attribute.name;

  // By default, browsers parse attribute names as lowercase characters.  Override this behavior
  // for className, which is used by React.js.
  if (attributeName === 'classname') {
    attributeName = 'className';
  }

  return {
    ...attrs,
    [`${attributeName}`]: attribute.value,
  };
}

// Export just the tokenize() function.  The rest are private to the module
module.exports = tokenize;
