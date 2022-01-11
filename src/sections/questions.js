import styles from '../styles/Questions.module.css'

export default function Questions() {
    return (
        <section className={styles.container}>
            <h2>Preguntas Frecuentes</h2>
            <p>Si tu pregunta no se encuentra aquí debajo, contactanos y te responderemos.</p>
            <div className={styles.box}>
                <details>
                    <summary>¿Que es un dominio?</summary>
                    <p>Un dominio de internet es un nombre único que identifica a una subárea de internet. El propósito principal de los nombres de dominio en Internet y del sistema de nombres de dominio, es traducir las direcciones IP de cada activo en la red, a términos memorizables y fáciles de encontrar.</p>
                </details>
                <details>
                    <summary>¿Puedo descargar mi sitio web?</summary>
                    <p>No.Nuestros servicios se ofrecen en línea. Se adaptan a sus necesidades, y se actualizan y mejoran constantemente.</p>
                </details>
                <details>
                    <summary>¿Que es SEO?</summary>
                    <p>El posicionamiento en buscadores, optimización en motores de búsqueda o SEO, es un conjunto de acciones orientadas a mejorar el posicionamiento de un sitio web en la lista de resultados de Google, Bing, u otros buscadores de internet.​</p>
                </details>
                <details>
                    <summary>¿Como se manejan los pagos?</summary>
                    <p>Tenemos muchos medios de pago. Los cuales de definen a la hora de llegar a un acuerdo con el cliente, para darle la opcion que le resulte mas comoda.</p>
                </details>
                <details>
                    <summary>¿En cuanto tiempo se desarrolla un sitio web?</summary>
                    <p>El tiempo total para desarrollar un sitio web depende de varios factores. El primero es la complejidad del proyecto. Un sitio web estático generalmente toma menos tiempo que los sitios web de comercio electrónico o los sitios web que requieren desarrollo flash. Algunos cambios menores o mayores pueden aumentar el límite de tiempo. El tiempo promedio que toma nuestro desarrollador web para un sitio web estático será menor que un sitio web con flash y otros gráficos dinámicos. Sin embargo, desarrollar sitios web complejos como el sitio web de comercio electrónico lleva un poco más de tiempo.</p>
                </details>
                <details>
                    <summary>¿Cuantos cambios se pueden hacer durante el desarrollo?</summary>
                    <p>Generalmente, ninguna empresa de desarrollo de software le proporciona esto. Pero Real Vision Software ofrece un par de cambios durante el desarrollo del sitio web además de los objetivos especificados. Sin embargo, sugerimos firmemente discutir y definir el alcance y los elementos antes de que comience el proyecto. Esto ahorra tiempo, recursos y dinero en iteraciones tanto como sea posible.</p>
                </details>
                <details>
                    <summary>¿Donde tiene su sede Real Vision Software?</summary>
                    <p>Desde 2017, hemos sido una empresa de TI de desarrollo de software líder con sede en Medellin, Colombia. Medellin pertenece al estado de Antioquia y es una de las ciudades de más rápido crecimiento. Contamos con un equipo muy talentoso, la mayoría de las cuales se encuentran en nuestra sede en Medellin.</p>
                </details>
                <details>
                    <summary>¿Cuál es su experiencia en la industria?</summary>
                    <p>Contamos con un equipo extremadamente talentoso de desarrolladores de aplicaciones web y móviles que pueden crear excelentes aplicaciones móviles, sitios web y juegos. Cuando empezamos en 2017, comenzamos con los servicios de desarrollo web. Desde entonces, hemos recorrido un largo camino. Hemos sido una clase aparte en lo que respecta al desarrollo web, el desarrollo de aplicaciones móviles y los servicios de desarrollo de videojuegos.</p>
                </details>
            </div>
        </section>
    )
}
