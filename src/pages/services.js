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
        <ServiceSection title="Desarrollo de Aplicaciones Moviles"  image="./assets/appdevelopment.png" options={['Desarrollo de aplicaciones nativas', 'Desarrollo de aplicaciones multiplataforma', 'Desarrollo de aplicaciones portátiles', 'Desarrollo de aplicaciones en React Native', 'Desarrollo de aplicaciones Hibridas' ,'Desarrollo de aplicaciones en Flutter']} images={['./assets/icons/icons8-ios-logo.svg', './assets/icons/icons8-android-os.svg', './assets/icons/icons8-react.svg']} text="Desde aplicaciones B2B o B2E para empresas, pequeñas empresas y nuevas empresas, tenemos un historial comprobado de ofrecer servicios de desarrollo de aplicaciones móviles atractivos, orientados a resultados y de alto impacto. IndiaNIC es una de las principales empresas de desarrollo de aplicaciones móviles reconocida por ofrecer desarrollo de aplicaciones nativas de Android, desarrollo de aplicaciones nativas de iOS, servicios de desarrollo de aplicaciones híbridas y multiplataforma para crear aplicaciones móviles de última generación utilizando la última tecnología." />
        <ServiceSection do{true} title="Desarrollo Web"  image="./assets/appdevelopment.png" options={['Desarrollo de aplicaciones nativas', 'Desarrollo de aplicaciones multiplataforma', 'Desarrollo de aplicaciones portátiles', 'Desarrollo de aplicaciones en React Native', 'Desarrollo de aplicaciones Hibridas' ,'Desarrollo de aplicaciones en Flutter']} images={['./assets/icons/icons8-php-logo.svg', './assets/icons/icons8-java.svg', './assets/icons/icons8-drupal.svg', './assets/icons/icons8-html-5.svg', './assets/icons/icons8-angularjs.svg', './assets/icons/icons8-mongodb.svg', './assets/icons/icons8-nodejs.svg']} text="Al ser una empresa líder en el desarrollo de aplicaciones de sitios web, nuestros desarrolladores certificados tienen una experiencia sin igual en el trabajo con las últimas tecnologías web para ofrecer soluciones web personalizadas. Ya sea creando una presencia en la web para su empresa, un centro de información para su negocio o potenciando sus aplicaciones/dispositivos IoT a través del backend, IndiaNIC lo hace todo al cubrir un amplio espectro de soluciones y marcos web." />
        <ServiceSection title="Diseno UI/UX"  image="./assets/appdevelopment.png" options={['Desarrollo de aplicaciones nativas', 'Desarrollo de aplicaciones multiplataforma', 'Desarrollo de aplicaciones portátiles', 'Desarrollo de aplicaciones en React Native', 'Desarrollo de aplicaciones Hibridas' ,'Desarrollo de aplicaciones en Flutter']} images={['./assets/icons/icons8-ios-logo.svg', './assets/icons/icons8-android-os.svg', './assets/icons/icons8-react.svg']} text="El diseño de UI/UX es el catalizador detrás del éxito de cualquier aplicación web o móvil. IndiaNIC es una agencia líder en diseño web y diseño de aplicaciones móviles con la habilidad de convertir grandes ideas en interacciones significativas. Partiendo de la conceptualización, arquitectura de la información, identidad visual y diseño UX; contrate diseñadores de UI/UX de IndiaNIC para la entrega oportuna de sitios web atractivos y aplicaciones móviles que resulten en la máxima participación del usuario." />
        <ServiceSection doClass={true} title="Soluciones IoT"  image="./assets/appdevelopment.png" options={['Desarrollo de aplicaciones nativas', 'Desarrollo de aplicaciones multiplataforma', 'Desarrollo de aplicaciones portátiles', 'Desarrollo de aplicaciones en React Native', 'Desarrollo de aplicaciones Hibridas' ,'Desarrollo de aplicaciones en Flutter']} images={['./assets/icons/icons8-php-logo.svg', './assets/icons/icons8-java.svg', './assets/icons/icons8-drupal.svg', './assets/icons/icons8-html-5.svg', './assets/icons/icons8-angularjs.svg', './assets/icons/icons8-mongodb.svg', './assets/icons/icons8-nodejs.svg']} text="Al ser una empresa líder en el desarrollo de aplicaciones de sitios web, nuestros desarrolladores certificados tienen una experiencia sin igual en el trabajo con las últimas tecnologías web para ofrecer soluciones web personalizadas. Ya sea creando una presencia en la web para su empresa, un centro de información para su negocio o potenciando sus aplicaciones/dispositivos IoT a través del backend, IndiaNIC lo hace todo al cubrir un amplio espectro de soluciones y marcos web." />
        <ServiceSection title="Desarrollo de Aplicaciones con IA - ML"  image="./assets/appdevelopment.png" options={['Desarrollo de aplicaciones nativas', 'Desarrollo de aplicaciones multiplataforma', 'Desarrollo de aplicaciones portátiles', 'Desarrollo de aplicaciones en React Native', 'Desarrollo de aplicaciones Hibridas' ,'Desarrollo de aplicaciones en Flutter']} images={['./assets/icons/icons8-ios-logo.svg', './assets/icons/icons8-android-os.svg', './assets/icons/icons8-react.svg']} text="El diseño de UI/UX es el catalizador detrás del éxito de cualquier aplicación web o móvil. IndiaNIC es una agencia líder en diseño web y diseño de aplicaciones móviles con la habilidad de convertir grandes ideas en interacciones significativas. Partiendo de la conceptualización, arquitectura de la información, identidad visual y diseño UX; contrate diseñadores de UI/UX de IndiaNIC para la entrega oportuna de sitios web atractivos y aplicaciones móviles que resulten en la máxima participación del usuario." />
        <ServiceSection doClass={true} title="Garantia de Calidad (QA)"  image="./assets/appdevelopment.png" options={['Desarrollo de aplicaciones nativas', 'Desarrollo de aplicaciones multiplataforma', 'Desarrollo de aplicaciones portátiles', 'Desarrollo de aplicaciones en React Native', 'Desarrollo de aplicaciones Hibridas' ,'Desarrollo de aplicaciones en Flutter']} images={['./assets/icons/icons8-php-logo.svg', './assets/icons/icons8-java.svg', './assets/icons/icons8-drupal.svg', './assets/icons/icons8-html-5.svg', './assets/icons/icons8-angularjs.svg', './assets/icons/icons8-mongodb.svg', './assets/icons/icons8-nodejs.svg']} text="Al ser una empresa líder en el desarrollo de aplicaciones de sitios web, nuestros desarrolladores certificados tienen una experiencia sin igual en el trabajo con las últimas tecnologías web para ofrecer soluciones web personalizadas. Ya sea creando una presencia en la web para su empresa, un centro de información para su negocio o potenciando sus aplicaciones/dispositivos IoT a través del backend, IndiaNIC lo hace todo al cubrir un amplio espectro de soluciones y marcos web." />
        <ServiceSection title="Desarrollo de Aplicaciones VR - AR"  image="./assets/appdevelopment.png" options={['Desarrollo de aplicaciones nativas', 'Desarrollo de aplicaciones multiplataforma', 'Desarrollo de aplicaciones portátiles', 'Desarrollo de aplicaciones en React Native', 'Desarrollo de aplicaciones Hibridas' ,'Desarrollo de aplicaciones en Flutter']} images={['./assets/icons/icons8-ios-logo.svg', './assets/icons/icons8-android-os.svg', './assets/icons/icons8-react.svg']} text="El diseño de UI/UX es el catalizador detrás del éxito de cualquier aplicación web o móvil. IndiaNIC es una agencia líder en diseño web y diseño de aplicaciones móviles con la habilidad de convertir grandes ideas en interacciones significativas. Partiendo de la conceptualización, arquitectura de la información, identidad visual y diseño UX; contrate diseñadores de UI/UX de IndiaNIC para la entrega oportuna de sitios web atractivos y aplicaciones móviles que resulten en la máxima participación del usuario." />
        <ServiceSection doClass={true} title="Desarrollo de Videojuegos"  image="./assets/appdevelopment.png" options={['Desarrollo de aplicaciones nativas', 'Desarrollo de aplicaciones multiplataforma', 'Desarrollo de aplicaciones portátiles', 'Desarrollo de aplicaciones en React Native', 'Desarrollo de aplicaciones Hibridas' ,'Desarrollo de aplicaciones en Flutter']} images={['./assets/icons/icons8-php-logo.svg', './assets/icons/icons8-java.svg', './assets/icons/icons8-drupal.svg', './assets/icons/icons8-html-5.svg', './assets/icons/icons8-angularjs.svg', './assets/icons/icons8-mongodb.svg', './assets/icons/icons8-nodejs.svg']} text="Al ser una empresa líder en el desarrollo de aplicaciones de sitios web, nuestros desarrolladores certificados tienen una experiencia sin igual en el trabajo con las últimas tecnologías web para ofrecer soluciones web personalizadas. Ya sea creando una presencia en la web para su empresa, un centro de información para su negocio o potenciando sus aplicaciones/dispositivos IoT a través del backend, IndiaNIC lo hace todo al cubrir un amplio espectro de soluciones y marcos web." />
        <ContactForm />              
      </div>
    </Layout>
  );
}
