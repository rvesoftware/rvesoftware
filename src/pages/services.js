import Layout from "../components/layout";
import ContactForm from "../sections/contactForm";
import ServiceSection from "../sections/serviceSection";
import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.mainSection}>
          <h2>Servicios de desarrollo de software web y móvil</h2>
          <p>
          Una exitosa empresa de desarrollo de aplicaciones de software en alta mar desde 2017, que ofrece una gama completa de desarrollo de sitios web y aplicaciones móviles, desarrollo de juegos, IoT, AR-VR y otros servicios y soluciones de TI a nivel mundial.
          </p>
        </section>
        <ServiceSection title="Desarrollo de Aplicaciones Moviles"  image="./assets/appdevelopment.png" options={['Desarrollo de aplicaciones nativas', 'Desarrollo de aplicaciones multiplataforma', 'Desarrollo de aplicaciones portátiles', 'Desarrollo de aplicaciones en React Native', 'Desarrollo de aplicaciones Hibridas' ,'Desarrollo de aplicaciones en Flutter']} images={['./assets/icons/icons8-ios-logo.svg', './assets/icons/icons8-android-os.svg', './assets/icons/icons8-react.svg', './assets/icons/icons8-flutter.svg' ]} text="Desde aplicaciones B2B o B2E para empresas, pequeñas empresas y nuevas empresas, tenemos un historial comprobado de ofrecer servicios de desarrollo de aplicaciones móviles atractivos, orientados a resultados y de alto impacto. IndiaNIC es una de las principales empresas de desarrollo de aplicaciones móviles reconocida por ofrecer desarrollo de aplicaciones nativas de Android, desarrollo de aplicaciones nativas de iOS, servicios de desarrollo de aplicaciones híbridas y multiplataforma para crear aplicaciones móviles de última generación utilizando la última tecnología." />
        <ServiceSection doClass={true} title="Desarrollo Web"  image="./assets/webdev.png" options={['Desarrollo de sitios web personalizados', 'Desarrollo de aplicaciones web', 'Desarrollo de tiendas de comercio electronico', 'Desarrollo de software CRM/ERP personalizados', 'Desarrollo de webs receptivas' ,'Desarrollo de aplicaciones web progresivas']} images={['./assets/icons/icons8-php-logo.svg', './assets/icons/icons8-java.svg', './assets/icons/icons8-drupal.svg', './assets/icons/icons8-html-5.svg', './assets/icons/icons8-angularjs.svg', './assets/icons/icons8-mongodb.svg', './assets/icons/icons8-nodejs.svg']} text="Al ser una empresa líder en el desarrollo de aplicaciones de sitios web, nuestros desarrolladores certificados tienen una experiencia sin igual en el trabajo con las últimas tecnologías web para ofrecer soluciones web personalizadas. Ya sea creando una presencia en la web para su empresa, un centro de información para su negocio o potenciando sus aplicaciones/dispositivos IoT a través del backend, IndiaNIC lo hace todo al cubrir un amplio espectro de soluciones y marcos web." />
        <ServiceSection title="Diseno UI/UX"  image="./assets/uiux.png" options={['Diseno de Wireframes', 'Consultoria de diseno estrategico', 'Prototipado de alta/baja fidelidad', 'Diseno de aplicaciones movilesuitectura informacional', 'Analisis de experiencia de usuario' ,'Diseno de interfaz de usuario']} images={['./assets/icons/icons8-figma.svg', './assets/icons/icons8-adobe-photoshop.svg', './assets/icons/icons8-adobe-xd.svg', './assets/icons/icons8-adobe-illustrator.svg']} text="El diseño de UI/UX es el catalizador detrás del éxito de cualquier aplicación web o móvil. IndiaNIC es una agencia líder en diseño web y diseño de aplicaciones móviles con la habilidad de convertir grandes ideas en interacciones significativas. Partiendo de la conceptualización, arquitectura de la información, identidad visual y diseño UX; contrate diseñadores de UI/UX de IndiaNIC para la entrega oportuna de sitios web atractivos y aplicaciones móviles que resulten en la máxima participación del usuario." />
        <ServiceSection doClass={true} title="Soluciones IoT"  image="./assets/iotsol.png" options={['Automatización del hogar inteligente', 'Automatizacion de IoT industrial', 'Desarrollo de aplicaciones IoT', 'Soluciones iBeacon', 'APIs y backend' ,'Integracion en la nube de IoT','Integracion de sistemas IoT', 'Pruebas de soluciones de IoT']} images={[]} text="Aprovechando el poder de Internet de las cosas (IoT), la red de Dispositivos conectados, Real Vision Software es el mejor proveedor de servicios de IoT en el desarrollo de soluciones innovadoras de IoT. Nuestros expertos en IoT desarrollan soluciones de IoT innovadoras y personalizadas para simplificar y automatizar procesos comerciales complejos. Juntos podemos crear increíbles experiencias inalámbricas con el moderno hardware IoT para recopilar información. Contrate a los mejores programadores de IoT de Real Vision Software que ayudan a los nuevos negocios y empresas a construir una plataforma de IoT y conectarla con otras aplicaciones en la nube, en el sitio o múltiples plataformas de IoT." />
        <ServiceSection title="Desarrollo de Aplicaciones con IA - ML"  image="./assets/iaml.png" options={['Motor de recomendacion de productos', 'Chatbots / IA conversacional', 'Procesado y reconocimeinto de imagenes', 'Automatizacion', 'Robotica de Procesos' ,'Analisis de comportamiento', 'Consultoria en AI-ML', 'Analisis predictivo']} images={[]} text="¿Busca agregar inteligencia a su aplicación comercial existente o desea desarrollar una nueva? Estás en el lugar correcto. Nuestros ingenieros de AI-ML lo ayudarán a hacerlo. Creamos soluciones AI-ML que ahorrarán hasta un 30 % de costos en sus operaciones comerciales generales. Tenemos experiencia en el trabajo con herramientas, marcos y tecnologías como TensorFlow, Apache SystemML, Caffe, Apache Mahout, OpenNN, Torch, Neuroph, Mycroft AI, etc. para fomentar la inteligencia empresarial en diversos sectores verticales de la industria." />
        <ServiceSection doClass={true} title="Garantia de Calidad (QA)"  image="./assets/qa.png" options={['Documentacion QA', 'Automatizacion de Web Testing', 'Pruebas de rendimiento', 'Automatizacion de pruebas de API' ,'Consultoria de expertos en QA']} images={[]} text="Mantenemos los servicios de control de calidad (QA) y pruebas de software en el centro de nuestro ecosistema. IndiaNIC cuenta con expertos probados en pruebas cuya confianza ayuda en lanzamientos más rápidos con una calidad inigualable. Realizamos varias pruebas, como funcional, GUI, usabilidad, seguridad, pruebas de base de datos, multiplataforma, multinavegador, accesibilidad, etc. Nuestros expertos en control de calidad trabajan con herramientas DevOps y técnicas de prueba de compilación automatizadas para una entrega más rápida. Con nosotros, tendrá acceso completo a los informes de control de calidad para mantenerse actualizado sobre los resultados de las pruebas con todos los detalles." />
        <ServiceSection title="Desarrollo de Aplicaciones VR - AR"  image="./assets/vrar.png" options={['HTV Vive Apps', 'Oculus Rift + Touch', 'VR Cardboard & Oculus Apps', 'Sansung Gear Apps', 'Microsoft HoloLens Apps']} images={[]} text="El mundo de la realidad virtual está creciendo rápidamente y Real Vision Software, siendo una de las principales empresas de desarrollo de aplicaciones de realidad virtual en Latinoamerica y EE. UU., ofrece experiencias realistas para los auriculares de realidad virtual. Nuestras soluciones de aplicaciones de realidad virtual son perfectas para casos de uso industrial, empresas y entretenimiento. Tenemos experiencia comprobada en la prestación de servicios de desarrollo de aplicaciones de realidad virtual para crear entornos 3D cautivadores y aplicaciones de realidad virtual interactivas para diversas industrias verticales." />
        <ServiceSection doClass={true} title="Desarrollo de Videojuegos"  image="./assets/game.png" options={['Juegos 2D/3D', 'Diseno de personajes', 'Modelado 3D', 'Plugins para Unity 3D', 'Estrategia de Monetizacion' ,'Publicaciones de juegos para movil']} images={['./assets/icons/icons8-unity.svg', './assets/icons/icons8-unreal-engine.svg']} text="Crear juegos es la parte más enérgica de nuestro negocio. Nuestro experto equipo de desarrollo de juegos móviles puede manejar proyectos desde cero o desde cualquier etapa de desarrollo. Hemos estado involucrados con éxito en la entrega de una experiencia de juego altamente interactiva y emocionante en plataformas móviles, de consola y de realidad virtual. Convertimos su idea en una aplicación de juego adictiva para Android o iOS mientras nos aseguramos de crear soluciones de juego listas para usar." />
        <ContactForm />              
      </div>
    </Layout>
  );
}
