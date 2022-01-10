import styles from '../styles/Integrations.module.css'

export default function Integrations() {
  const data = [
    {
        icon: "./assets/marca004.png",
      name: "Facebook",
      description: "Creacion de redes y comunidad",
    },
    {
        icon: "./assets/marca016.png",
      name: "Youtube",
      description: "Incrusta fondos o videos de youtube",
    },
    {
      icon: "./assets/marca009.png",
      name: "WhatsApp",
      description: "Mensajeria y comunicacion",
    },

    {
        icon: "./assets/marca001.png",
      name: "Google Analytics",
      description:
        "Propiedades de seguimeinto de google, incluye Google Analyticks v4",
    },
    {
        icon: "./assets/marca012.png",
      name: "MailChimp",
      description:
        "Envia clientes potenciales directamente a una lista de MailChimp",
    },
  ];

  return (
    <section className={styles.container}>
      <h2>Integraciones</h2>
      <p>
        Conectamos tu sitio con las principales y mas poderosas herramientas
        para potenciar tu negocio
      </p>

      <div className={styles.box}>
        {data.map((item) => (
          <span>
            <img src={item.icon} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </span>
        ))}
      </div>
    </section>
  );
}
