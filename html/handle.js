var theTemplateScript = $("#console").html(); 

//Compile the template
var theTemplate = Handlebars.compile (theTemplateScript); 
$(".console").append(theTemplate(consoleOutput));

