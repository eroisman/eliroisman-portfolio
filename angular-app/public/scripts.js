
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
})()

// highlights JS activation
document.addEventListener('DOMContentLoaded', (event) => {
  if (typeof hljs !== 'undefined' && typeof hljs.highlightBlock === 'function') {
    document.querySelectorAll('code').forEach((block) => {
      try { hljs.highlightBlock(block); } catch (e) { /* ignore highlighting errors */ }
    });
  }
});

// Contact 'Condition d'utilisation' modal
var acceptButton = document.getElementById('acceptButton');
if (acceptButton) {
  acceptButton.addEventListener('click', function() {
    var checkEl = document.getElementById('check');
    if (checkEl) checkEl.checked = true;
    var modal = document.getElementById('exampleModal');
    if (modal && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
      var modalInstance = bootstrap.Modal.getInstance(modal) || new bootstrap.Modal(modal);
      try { modalInstance.hide(); } catch (e) { /* ignore */ }
    }
  });
}

function closeOffcanvas() {
  var offcanvas = document.getElementById('offcanvasStart');
  if (offcanvas && typeof bootstrap !== 'undefined' && bootstrap.Offcanvas) {
      var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas) || new bootstrap.Offcanvas(offcanvas);
      try { offcanvasInstance.hide(); } catch (e) { /* ignore */ }
  }
}