define([
  'jquery',
  'mockup-registry',
  'mockup-patterns-base',
  'mockup-patterns-textareamimetypeselector',
  'mockup-patterns-thememapper'
], function($, Registry, Base) {
  'use strict';

  // initialize only if we are in top frame
  if (window.parent === window) {
    $(document).ready(function() {
      Registry.scan($('body'));
    });
  }
});
