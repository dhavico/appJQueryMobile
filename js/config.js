$(document).bind("mobileinit", function () {
    //Código de inicio para jQM
    
    //$.mobile.ajaxEnabled = false;
    $.mobile.defaultPageTransition = "splideup";
    $.mobile.defaultDialogTransition = "flip";
    $.mobile.loadingMessage = "Por favor espere...";
    $.mobile.pageLoadErrorMessage = "No se ha podido cargar la página";
    
    $('zona').bind("tap", function () {
        
    });
    
    $('zona').bind("taphold", function () {
        
    });
    
    $('zona').bind("swipeleft", function () {
        
    });
    
    $('zona').bind("swiperight", function () {
        
    });
    
    //Eventos de mouse virtuales
    
    $('zona').bind("vclick", function () {
        
    });
    
    //Eventos de orientacion
    
    $(document).bind("orientationchange", function () {
        
    });
    
    //Eventos de scroll
    
    $(document).bind("scrollstart", function () {
        
    });
    
    $(document).bind("scrollstop", function () {
        
    });
    
    //Eventos de pagina
    
    $(document).bind("pageinit", function () {
        
    });
    
    //Eventos de pagina externa (via ajax)
    
    $('pagina1').bind("pageload", function () {
        
    });
    
    $(document).bind("pageloadfailed", function () {
        
    });
    
    $('pagina1').bind("pagebeforechange", function () {
        //antes de cambiar de pagina
    });
    
    $('pagina1').bind("pageafterchange", function () {
        //luego de cambiar de pagina
    });
    
    $('pagina1').bind("pagechangefailed", function () {
        //si ocurre un error al cambiar de pagina
    });
    
    $('pagina1').bind("pagebeforeshow", function () {
        //antes que se muestra la pagina 1
    });
    
    $('pagina1').bind("pageshow", function () {
        //la pagina 1 ya esta en pantalla
    });
    
    $('pagina1').bind("pagebeforehide", function () {
        //antes que desaparesca la pagina 1
    });
    
    $('pagina1').bind("pagehide", function () {
        //la pagina 1 ya desaparecio
    });
    
    //Eventos de layout
    
    $(document).bind("updatelayout", function () {
        //cuando se ha actualizado el diseño de la pagina
    });
    
    $(document).bind("animationComplete", function () {
        //cuando la animacion css de un objeto o pagina termina
    });
})