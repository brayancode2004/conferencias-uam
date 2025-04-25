document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = this.nombre.value.trim();
    const correo = this.correo.value.trim();
    const carrera = this.carrera.value.trim();
    const eventos = this.querySelectorAll('input[name="eventos"]:checked');
  
    if (!nombre || !correo || !carrera) {
      alert('Por favor completa todos los campos.');
      return;
    }
  
    if (!correo.endsWith('@uamv.edu.ni')) {
      alert('El correo debe ser institucional (@uamv.edu.ni).');
      return;
    }
  
    if (eventos.length === 0) {
      alert('Debes seleccionar al menos una conferencia.');
      return;
    }
  
    alert(`¡Registro exitoso! Gracias por inscribirte, ${nombre}.`);
    this.reset();
  });
  