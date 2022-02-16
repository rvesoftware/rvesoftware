import styles from "../styles/Services.module.css";

export default function ContactForm() {
    return (
<div className={`${styles.secContainer} ${styles.center}`}>
    <h2>Listo para empezar tu Projecto?</h2>
    <p>Para empezar, use el formulario a continuacion para contarnos sobre usted y el proyecto</p>
      <form action="" className={styles.form}>
          <div>
              <label htmlFor="">Nombre</label>
              <span>
              <input type="text" name="" id="" placeholder="Primer Nombre" />
              <input type="text" name="" id="" placeholder="Apellido" />
              </span>

          </div>

          <div>
              <label htmlFor="">Correo Electronico</label>
              <input type="email" name="" id="" />
          </div>

          <div>
              <label htmlFor="">Telefono</label>
              <input type="number" name="" id="" />
          </div>

          <div>
              <label htmlFor="">Seleccione un Servicio</label>
              <select name="" id="">
              <option value="Seleccionar">Seleccionar</option>
                  <option value="">Desarrollo de Aplicacion Movil</option>
                  <option value="">Desarrollo Web</option>
                  <option value="">Personalizar producto de codigo abierto</option>
                  <option value="">Consultoria Cloud Y DevOps</option>
                  <option value="">Diseno UI/UX</option>
                  <option value="">IOT - AI or ML</option>
                  <option value="">Desarrollo de Videojuegos</option>
                  <option value="">Servicios QA</option>
                  <option value="">Otro</option>
              </select>
          </div>

          <div>
              <label htmlFor="">Presupuesto</label>
              <input type="number" name="" id="" />
              <label htmlFor="">Cuando quieres empezar?</label>
              <select name="" id="" placeholder="">
                  <option value="Seleccionar">Seleccionar</option>
                  <option value="Seleccionar">De inmediato</option>
                  <option value="Seleccionar">En una semana</option>
                  <option value="Seleccionar">En un mes</option>
                  <option value="Seleccionar">No estoy seguro</option>
              </select>
              <label htmlFor="">Requerimiento</label>
              <select name="" id="" placeholder="">
                  <option value="Seleccionar">Seleccionar</option>
                  <option value="Seleccionar">Contratar equipo dedicado</option>
                  <option value="Seleccionar">Nuevo proyecto</option>
                  <option value="Seleccionar">Proyecto existente</option>
                  <option value="Seleccionar">Soporte - Mantenimiento</option>

              </select>
            

          </div>
          <div>
              <label htmlFor="">Cuentanos sobre el proyecto</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <button className={styles.btn}>Empezar</button>

      </form>
    </div>
    )
}
