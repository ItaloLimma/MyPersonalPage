// Ação do menu sidenav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

// Ação do footer para o icone linkedin
const alerta = () => alert('italoaslima@live.com');