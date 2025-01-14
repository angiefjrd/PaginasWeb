function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('section');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });
    document.getElementById(seccionId).style.display = 'block';
}
function mostrarIntroduccion() {
    const introText = document.getElementById('intro-text');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarEncabezado() {
    const introText = document.getElementById('Encabezado');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarListas() {
    const introText = document.getElementById('Listas');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarListasDesordenadas() {
    const introText = document.getElementById('ListasDesordenadas');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarEnlaces() {
    const introText = document.getElementById('Enlaces');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarImagenes() {
    const introText = document.getElementById('Imagenes');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarFormularios(){
    const introText = document.getElementById('Formularios');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarSemantico(){
    const introText = document.getElementById('Semantico');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarIntegracion(){
    const introText = document.getElementById('Integracion');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarSelectores(){
    const introText = document.getElementById('Selectores');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarPropiedades(){
    const introText = document.getElementById('Propiedades');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarModelo(){
    const introText = document.getElementById('Modelo');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarElementos(){
    const introText = document.getElementById('Elementos');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarDiv(){
   const introText = document.getElementById('Div');
    introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
}
function mostrarWidht(){
    const introText = document.getElementById('Widht');
     introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
 }