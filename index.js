function cleanWhitespace( node ){
	for(var n = 0; n < node.childNodes.length; n++){
        var child = node.childNodes[n];

        if ( child.nodeType === 8 || ( child.nodeType === 3 && !/\S/.test( child.nodeValue ) ) ) {
            node.removeChild( child );
            n--;
        } else if ( child.nodeType === 1) {
            cleanWhitespace( child );
        } else if ( child.nodeType === 3 && /(^\s+|\s+$)/.test( child.parentNode.innerHTML ) ){
            child.parentNode.innerHTML = child.parentNode.innerHTML.replace(/(^\s+|\s+$)/g, '');
        }
	}
};

module.exports = cleanWhitespace;