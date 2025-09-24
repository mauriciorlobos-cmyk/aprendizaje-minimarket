// PROYECTO: APP MINIMARKET DELIVERY
console.log("🚀 ¡Comienza el desarrollo de la app del minimarket!");
console.log("📅 Fecha de inicio: " + new Date().toLocaleDateString());

// OBJETIVO PRINCIPAL
const objetivoProyecto = {
  nombre: "Minimarket Digital con Delivery",
  cliente: "App para compras y entregas a domicilio",
  tecnologias: ["JavaScript", "Flutter", "Node.js", "MySQL"],
  tiempoEstimado: "10-12 meses",
  estadoActual: "Fase 1: Aprendizaje de fundamentos"
};

console.log("🎯 Objetivo del proyecto:", objetivoProyecto);

// FUNCIÓN PARA CALCULAR PROGRESO
function mostrarProgreso() {
  const pasosCompletados = 3;
  const totalPasos = 10;
  const porcentaje = (pasosCompletados / totalPasos) * 100;
  
  console.log("📊 Progreso: " + porcentaje.toFixed(1) + "% completado");
  console.log("✅ Pasos completados: " + pasosCompletados + "/" + totalPasos);
}

mostrarProgreso();