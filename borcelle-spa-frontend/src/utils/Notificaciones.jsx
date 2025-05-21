// utils/Notificaciones.js
export const pedirPermisoNotificaciones = () => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission()
    }
  }
  
  export const mostrarNotificacion = (titulo, cuerpo) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(titulo, { body: cuerpo })
    }
  }
  