$("script[type='math/tex']").replaceWith(
  function(){
    var tex = $(this).text();
    return "<span class=\"inline-equation\">" + 
           katex.renderToString(tex) +
           "</span>";
});

$("script[type='math/tex; mode=display']").replaceWith(
  function(){
    var tex = $(this).text();
    return "<div class=\"equation\">" + 
           katex.renderToString("\\displaystyle "+tex, {
             displayMode: true
           }) +
           "</div>";
});

$("script[type='math/tex']").replaceWith(
  function(){
    var tex = $(this).text();
    return "<span class=\"katex\">" + 
           katex.renderToString(tex) +
           "</span>";
});

text-align: center