import _ from 'lodash';
import $ from 'jquery';
import foo from './foo.js'

function component() {

    var element = $('<div></div>')
  

    // Lodash, now imported by this script

    element.html(_.join(['AAA','webpack'],' '));
  
    return element.get(0);
  }
  
  document.body.appendChild(component());
  console.log(foo)
  console.log(foo())