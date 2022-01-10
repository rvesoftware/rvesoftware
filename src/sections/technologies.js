import { useState } from 'react'
import styles from '../styles/Technologies.module.css'

export default function Technologies() {
    
    const menuItems = [
        {
            title: 'Mobile',
            techs: [
                {
                    icon: './assets/icons/icons8-ios-logo.svg',
                    name: 'iOS'   
                },
                {
                    icon: './assets/icons/icons8-android-os.svg',
                    name: 'Android'   
                },
                {
                    icon: './assets/icons/icons8-react-native.svg',
                    name: 'React Native'   
                },
                {
                    icon: './assets/icons/icons8-flutter.svg',
                    name: 'Flutter'   
                },
                {
                    icon: './assets/icons/icons8-swift.svg',
                    name: 'Swift'   
                },
                {
                    icon: './assets/icons/icons8-kotlin.svg',
                    name: 'Kotlin'   
                },
                {
                    icon: './assets/icons/icons8-xamarin.svg',
                    name: 'Xamarin'   
                },
            ]
        },
        {
            title: 'Frontend',
            techs: [
                {
                    icon: './assets/icons/icons8-react.svg',
                    name: 'ReactJs'   
                },
                {
                    icon: './assets/icons/icons8-vue-js.svg',
                    name: 'VueJs'   
                },
                {
                    icon: './assets/icons/icons8-html-5.svg',
                    name: 'HTML5'
                },
                {
                    icon: './assets/icons/icons8-angularjs.svg',
                    name: 'AngularJs'  
                },
                {
                    icon: './assets/icons/icons8-svelte.svg',
                    name: 'Svelt'   
                },
                
            ]
        },
        {
            title: 'Backend',
            techs: [
                {
                    icon: './assets/icons/icons8-nodejs.svg',
                    name: 'NodeJS'   
                },
                {
                    icon: './assets/icons/icons8-java.svg',
                    name: 'Java'   
                },
                {
                    icon: './assets/icons/icons8-php-logo.svg',
                    name: 'PHP'   
                },
                {
                    icon: './assets/icons/icons8-c-sharp-logo.svg',
                    name: '.NET'   
                },
                {
                    icon: './assets/icons/icons8-ruby-programming-language.svg',
                    name: 'Ruby on Rails'   
                },
                {
                    icon: './assets/icons/icons8-python.svg',
                    name: 'Python'   
                },
            ]
        },
        {
            title: 'Database',
            techs: [
                {
                    icon: './assets/icons/icons8-mongodb.svg',
                    name: 'MongoDB'   
                },
                {
                    icon: './assets/icons/icons8-mysql-logo.svg',
                    name: 'MySQL'   
                },
                {
                    icon: './assets/icons/icons8-firebase.svg',
                    name: 'Firebase'   
                },
                {
                    icon: './assets/icons/icons8-oracle-logo.svg',
                    name: 'Oracle'   
                },
                {
                    icon: './assets/icons/icons8-postgresql.svg',
                    name: 'PostgreSQL'   
                },
                {
                    icon: './assets/icons/icons8-redis.svg',
                    name: 'Redis'   
                },
            ]
        },
        {
            title: 'CMS',
            techs: [
                {
                    icon: './assets/icons/icons8-drupal.svg',
                    name: 'Drupal'   
                },
                {
                    icon: './assets/icons/icons8-joomla.svg',
                    name: 'Joomla'   
                },
                {
                    icon: './assets/icons/icons8-wordpress.svg',
                    name: 'Wordpress'   
                },
                {
                    icon: './assets/icons/icons8-magento.svg',
                    name: 'Magento'   
                },
                {
                    icon: './assets/icons/icons8-shopify.svg',
                    name: 'Shopify'   
                },
            ]
        },
        {
            title: 'Infraestructura',
            techs: [
                {
                    icon: './assets/icons/icons8-amazon-web-services.svg',
                    name: 'AWS'   
                },
                {
                    icon: './assets/icons/icons8-google-cloud.svg',
                    name: 'Google Cloud'   
                },
                {
                    icon: './assets/icons/icons8-jenkins.svg',
                    name: 'Jenkins'   
                },
                {
                    icon: './assets/icons/icons8-selenium.svg',
                    name: 'Selenium'   
                },
                {
                    icon: './assets/icons/icons8-digital-ocean.svg',
                    name: 'Digital Ocean'   
                },
            ]
        }
    ]

    const [selectItem, setSelectItem] = useState("Mobile")
    return (
        <section className={styles.container}>
            <h2>Tecnologias</h2>
            <p>Estas son las tecnologias con las que trabajamos, constantemente estamos invetigando cuales son las tecnologias mas importantes del mundo y cuales le daran el mayor beneficio a nuestros clientes. </p>

            <div className={styles.optionsContainer}>
                {
                    menuItems.map((item, i) => (
                        <button  key={item.title} onClick={() => setSelectItem(item.title)}>{item.title}</button>
                    ))
                }
            </div>

            <div className={styles.techs}>
                {
                    menuItems.filter((item) => selectItem == item.title )
                    .map((item, i) => (
                        item.techs.map((tech) => (
                            <div key={tech.name}>
                                <img src={tech.icon} alt="" />
                                <p> {tech.name}</p>
                                </div>
                        ))                        

                    ))
                }
            </div>
        </section>
    )
}
