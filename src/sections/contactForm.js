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
              <label htmlFor="">Seleccione un Servicio</label>
              <select name="" id="">
              <option value="Seleccionar">Seleccionar</option>
                  <option value="">Desarrollo de Aplicacion Movil</option>
                  <option value="">Desarrollo Web</option>
                  <option value="">Otro</option>
              </select>
          </div>

          <div>
              <span>

              <select name="" id="" placeholder="">
                  <option value="Seleccionar">Seleccionar</option>
              </select>
              <select name="" id="" placeholder="">
                  <option value="Seleccionar">Seleccionar</option>
              </select>
              </span>

          </div>
          <div>
              <label htmlFor="">Requerimiento</label>
              <select name="" id=""></select>
          </div>

          <div>
              <label htmlFor="">Cuentanos sobre el proyecto</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          {/* <button>Empezar</button> */}

      </form>
    </div>
    )
}
