document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.acordeon-boton');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;

           
            if (content.style.display === "block") {
                content.style.display = "none";
                this.classList.remove('activo'); 
            } else {
                content.style.display = "block";
                this.classList.add('activo'); 
            }
        });
    });
});