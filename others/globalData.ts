// ---Types
import { Stack, JobDetail, Labels } from '@Reducers/language/customTypes';

// ----------------------------------Technological Stack------------------------------
export const stackEnglish: Stack = {
  front: {
    devTools: [
      {
        title: 'React JS',
        imgRoute: '/images/DevTools/react.webp',
        stars: 4.5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `I've been using react for more than 4 years or so. For me it's an amazing and minimalist framework. 

        It's super light and gives very basic and clean features for building apps the disadvantage using react is that you need to find other librarys that complement react but it can be an advantage if you know other librarys with the custom features you need for your app.`
      },
      {
        title: 'Typescript',
        imgRoute: '/images/DevTools/typescript.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: `I love typescript, at the beginning I wasn't very convinced because I didn't understand at 100% the special types and code using typescript used to take me 2 or 3 times more than plain javascript.
        
        I'm not an expert yet but i like typescript very much now I code everything that I can with it`
      },
      {
        title: 'Node JS',
        imgRoute: '/images/DevTools/nodejs.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Node is the base where i run every backend and frontend application and it is my main web and application server when I do freelance development.'
      },
      {
        title: 'Redux',
        imgRoute: '/images/DevTools/redux.webp',
        stars: 3.5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `Redux is the default state management library that I've been using for the last 3 years, I'm eveb using it for this proyect. It's easy to use, the hardest part is the initial configuration but I don't like that setup and manage state in redux takes too much times and steps.

        I'm sure that currently there are better options for state management but I'havent search and test any better alternative yet.`
      },
      {
        title: 'Webpack',
        imgRoute: '/images/DevTools/webpack.webp',
        stars: 1.5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: "I've made a couple of webpack 4 and 5 configurations for client-side projects implementing most of my frontend stack and I'm going to be honest, It is a pain in the ass but it can be necessary, deppending on the project."
      },
      {
        title: 'Bootstrap',
        imgRoute: '/images/DevTools/bootstrap.webp',
        stars: 4,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: "Bootstrap was the first responsive design and ui library that I met. It is easy to install and use but I don't use it since 2 years ago."
      },
      {
        title: 'Ant design',
        imgRoute: '/images/DevTools/antd.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `Ant is my favorite library for responsive design, also have another super useful components, like a lot of inputs and form control among other ui components that are really helpful.

        This has the grid and some components of ant design.`
      },
      {
        title: 'Material UI',
        imgRoute: '/images/DevTools/material.webp',
        stars: 4,
        expertise: 'Beginner',
        expertiseNumber: 20,
        experience: `This library really got my attention in a project (not developed by me) with amazing UI so I would like to test Material in order to know what it has to offer. 

        My only experience is basic examples of simple components and reviewing the implementetion of Material in other projects.`
      },
      {
        title: 'VS Code',
        imgRoute: '/images/DevTools/vscode.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'My favorite IDE, no matter what kind of development or language I use vs for every project.'
      },
      {
        title: 'Shopify',
        imgRoute: '/images/DevTools/shopify.webp',
        stars: 3.5,
        expertise: 'Beginner',
        expertiseNumber: 20,
        experience: 'Definitely not an expert, I used to dislike shopify a lot but then I knew other ecommerce platforms and then realised that shopify was really good, not as good as a custom development but has benefits that are worth.'
      },
      {
        title: 'Next JS',
        imgRoute: '/images/DevTools/nextjs.webp',
        stars: 4.5,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: "I'm really impressed with next js, it is very optimized and has awesome features. It is really easy to setup but it can also be hard if you need to much configurations for your projects."
      },
      {
        title: 'Less',
        imgRoute: '/images/DevTools/less.webp',
        stars: 4.5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Generally all my frontend projects are built with less as css preprocessor. I know that less has much features to offer but for now I just using nesting and variables.'
      },
      {
        title: 'JW Tokens',
        imgRoute: '/images/DevTools/jwt.webp',
        stars: 4,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: "Json web tokens are one alternative that I use to implement security in the frontend and the backend, most of the projects that I've made are for financial entities so the security has to be really strong."
      },
      {
        title: 'Apollo',
        imgRoute: '/images/DevTools/apollo.webp',
        stars: 3,
        expertise: 'Basic',
        expertiseNumber: 10,
        experience: "Don't have even the basics yet but currently I have a project working with a graphql server and I' have to change some configuration of apollo so hope I'll learn a bit of apollo soon."
      },
      {
        title: 'Axios',
        imgRoute: '/images/DevTools/axios.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Really easy to understand, using it for request handling in the frontend and in the backend for end to end communication.'
      },
      {
        title: 'AM charts',
        imgRoute: '/images/DevTools/amcharts.webp',
        stars: 4,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'An alternative to create dynamic dashboards and charts with lots of options for customize, it is not the fastest charts library and neither the easiest one but it is reliable and an amazing tool.'
      },
      {
        title: 'Joi',
        imgRoute: '/images/DevTools/joi.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `As a developer I've tested a lot of tools to control the data types but I haven't found anything better than joi. 

        It is amazingly precise and fast, it allows you to make simple validation or super complex validations in no time. It's super useful for the backend to validate de request data and for the frontend to make form validations.`
      },
      {
        title: 'Eslint',
        imgRoute: '/images/DevTools/eslint.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: "Currently I can't code without eslint, It makes me a lot more productive when I write code. I've made a couple of eslint configurations for the frontend and for the backend and yes the configuration part could be  tedious but it's woth 100%"
      }

    ],
    achivements: [
      'Dynamic responsive design for all screen resolutions (not just mobile and desktop).',
      'Security on the frontend, security on the request, cookies and tokens handling',
      'Frontend JS/TS architecture creation from 0 customized for specific use cases and prepared for development, production and containerization.',
      'Debugging of applications in all phases',
      'Dynamic forms and advanced validations',
      'Creation of dynamic dashboards and charts'
    ]
  },
  back: {
    devTools: [
      {
        title: 'Node JS',
        imgRoute: '/images/DevTools/nodejs.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Node is the base where i run every backend and frontend application and it is my main web and application server when I do freelance development.'
      },
      {
        title: 'Express',
        imgRoute: '/images/DevTools/express.webp',
        stars: 4,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Express is lightweight and fast, and has everything that I need to build APIs. Also I would like to test Koa in the close future.'
      },
      {
        title: 'Typescript',
        imgRoute: '/images/DevTools/typescript.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: `I love typescript, at the beginning I wasn't very convinced because I didn't understand at 100% the special types and code using typescript used to take me 2 or 3 times more than plain javascript.
        
        I'm not an expert yet but i like typescript very much now I code everything that I can with it`
      },
      {
        title: 'JW Tokens',
        imgRoute: '/images/DevTools/jwt.webp',
        stars: 4,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: "Json web tokens are one alternative that I use to implement security in the frontend and the backend, most of the projects that I've made are for financial entities so the security has to be really strong."
      },
      {
        title: 'Joi',
        imgRoute: '/images/DevTools/joi.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `As a developer I've tested a lot of tools to control the data types but I haven't found anything better than joi. 

        It is amazingly precise and fast, it allows you to make simple validation or super complex validations in no time. It's super useful for the backend to validate de request data and for the frontend to make form validations.`
      },
      {
        title: 'VS Code',
        imgRoute: '/images/DevTools/vscode.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'My favorite IDE, no matter what kind of development or language I use vs for every project.'
      },
      {
        title: 'GraphQL',
        imgRoute: '/images/DevTools/apollo.webp',
        stars: 5,
        expertise: 'Basic',
        expertiseNumber: 10,
        experience: "Don't have even the basics yet but currently I have a project working with a graphql server and I currently I'm studing the setup of the graphQL server. It's really intresting so far."
      },
      {
        title: 'mongoDB',
        imgRoute: '/images/DevTools/mongodb.webp',
        stars: 5,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: "I'm not a database administrator but the years that I've been using mongoDB allowed me to understand their amazing features, and also to make backups and restore them, get, delete or modify documents and collections trough the cli and mongoDB Compass."
      },
      {
        title: 'Mongoose',
        imgRoute: '/images/DevTools/mongoose.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'There is no backend development and mongoDB without mongoose, super useful and it helps me a lot with the mongoDB Querying and to control de document model for de DB.'
      },
      {
        title: 'BCrypt',
        imgRoute: '/images/DevTools/BCrypt.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: "It's an alternative to hash data before it goes to de data base. It doesn't have de highest level of encryption for security but if its used with other security tools and strategies it becomes a really strong solution."
      },
      {
        title: 'Bull',
        imgRoute: '/images/DevTools/bull.webp',
        stars: 3.5,
        expertise: 'Basic',
        expertiseNumber: 10,
        experience: "It's package that allows you to schedule cron jobs. I'm very interested in it because a client ask me to schedule some tasks next year and since I'm a Javascript/Typescript developer would love to do it in my main language instead of using java with quartz or something like that."
      },
      {
        title: 'Axios',
        imgRoute: '/images/DevTools/axios.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Really easy to understand, using it for request handling in the frontend and in the backend for end to end communication.'
      },
      {
        title: 'Nodemailer',
        imgRoute: '/images/DevTools/nodemailer.webp',
        stars: 4,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: "Nodemailer it's a package that allow us to connect to a smtp client for manage emails. I've only used it for simple notification, I've never attached files or read other mails and I'm not sure if node mailer allow us to do that task but for notification it's an amazing library."
      },
      {
        title: 'AWS SNS',
        imgRoute: '/images/DevTools/sns.webp',
        stars: 2,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: "I've use the amazon service SNS to send sms messages but it wasn't a nice experience. But at the end of the day it works and send sms through an api."
      },
      {
        title: 'Mercado Pago',
        imgRoute: '/images/DevTools/mercadoP.webp',
        stars: 4,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: "The only payment service that I've integrated so far. I enjoyed working with it's SDK but I think it needs a lot more features that it has. Currently interesting in stripe for payment services integration."
      },
      {
        title: 'Eslint',
        imgRoute: '/images/DevTools/eslint.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: "Currently I can't code without eslint, It makes me a lot more productive when I write code. I've made a couple of eslint configurations for the frontend and for the backend and yes the configuration part could be  tedious but it's woth 100%"
      }
    ],
    achivements: [
      'Development of APIs REST and RESTful',
      'Development in microserices arquitecture',
      'Development of security midleware to secure APIs',
      'Data encryption',
      'Tokens handling',
      'File management',
      'Notification through mails and sms',
      'Integration to payment services'
    ]
  },
  arch: {
    devTools: [
      {
        title: 'Debian linux',
        imgRoute: '/images/DevTools/debian.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: "I'm not a sysadmin nor linux guru but I feel comfortable in linux distributions based on debian. I've configured a couple of servers all based on ubuntu, so I'm able to manage some tasks or help the architects or sysadmins with the  provisioning."
      },
      {
        title: 'RHEL',
        imgRoute: '/images/DevTools/redHat.webp',
        stars: 2,
        expertise: 'Beginner',
        expertiseNumber: 20,
        experience: "Definitely not my strongest linux, I've struggled with provisioning, configuration and installation of drivers and software but at least I've already tried RHEL based distros and have and idea of how it works."
      },
      {
        title: 'Arch Linux',
        imgRoute: '/images/DevTools/archlinux.webp',
        stars: 4,
        expertise: 'Basic',
        expertiseNumber: 10,
        experience: "Honestly I've never touched any linux distro based on arch, in fact I'm afraid of arch because maybe it is too much complex for my current linux skills but it got my interest since a good friend of mine told me that his manjaro distro (based on arch) it's amazing and super fast."
      },
      {
        title: 'Docker',
        imgRoute: '/images/DevTools/docker.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `I love docker, my strongest skills of containerization are with node apps. 

        I can handle deploys, ports, docker networks, volumes as well as the basics.`
      },
      {
        title: 'Lets Encrypt',
        imgRoute: '/images/DevTools/letsencrypt.webp',
        stars: 5,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: "Before I knew let's encrypt I used to spend money and resources in tls certificates and it was painful to think in the setup and renovation of the certificates. Not the biggest expert but I've work with this tool a couple of times."
      },
      {
        title: 'Nginx',
        imgRoute: '/images/DevTools/nginx.webp',
        stars: 4,
        expertise: 'Basic',
        expertiseNumber: 10,
        experience: "Not even the basics but I'm really interested in this server to handle request and serve applications."
      },
      {
        title: 'Open-Litespeed',
        imgRoute: '/images/DevTools/openlitespeed.webp',
        stars: 1,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: "very bad experience with this web server, I don't know if it was my lack of skill or it's not a good alternative, at least for modern development."
      },
      {
        title: 'DNS',
        imgRoute: '/images/DevTools/dns.webp',
        stars: 3,
        expertise: 'Beginner',
        expertiseNumber: 20,
        experience: "Again not a sysadmin but I've done a couple of dns configurations to handle the traffic through a domain. I've used dns of google, godaddy, hostgator and digital ocean."
      },
      {
        title: 'Ansible',
        imgRoute: '/images/DevTools/ansible.webp',
        stars: 4,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: 'It is amazing for automation but sure it may be another tools that offer more benefits, but so far ansible has allowed me to automate CI and provisioning environments.'
      },
      {
        title: 'Digital Ocean',
        imgRoute: '/images/DevTools/digitalocean.webp',
        stars: 5,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: "I'm very used to work with digital ocean cloud, it is easy to use and very cheap in comparison to other cloud providers. I haven't used the Digital Ocean API yet but if someday have the opportunity to learn and use Terraform I'm going to be very intrested in using their API."
      }
    ],
    achivements: [
      'Basic server administration through ssh',
      'SSH keys configurations',
      'Provisioning',
      'Continuous integration with ansible',
      'HTTPS configuration and letsencrypt certbot',
      'High level software architecture understanding',
      'I work in collaboration with architects and other team leaders'
    ]
  }
};

export const stackSpanish: Stack = {
  front: {
    devTools: [
      {
        title: 'React JS',
        imgRoute: '/images/DevTools/react.webp',
        stars: 4.5,
        expertise: 'Advanzado',
        expertiseNumber: 80,
        experience: `He usado react por más de 4 años, para mi es un framework asombroso y minimalista.

        Es super liviano y tiene características básicas y limpias para crear aplicaciones, la desventaja de usar react es que se necesita encontrar diferentes librarías para complementarlo, pero esto puede ser una ventaja si conoces librarías con las características personalizadas que necesitas para tu aplicación.`
      },
      {
        title: 'Typescript',
        imgRoute: '/images/DevTools/typescript.webp',
        stars: 5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: `Amo typescript, al principio no estaba muy convencido, porque no entendía al 100% los tipos especiales, y el código usando typescript me tomaba 2 o 3 veces más que con javascript plano.

        No soy un experto aun pero me gusta mucho typescript, ahora codifico todo lo que puedo con él.`
      },
      {
        title: 'Node JS',
        imgRoute: '/images/DevTools/nodejs.webp',
        stars: 5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'Node es la base donde ejecuto toda aplicación de backend y frontend y es mi principal servidor web y aplicación cuando hago desarrollo freelance.'
      },
      {
        title: 'Redux',
        imgRoute: '/images/DevTools/redux.webp',
        stars: 3.5,
        expertise: 'Advanzado',
        expertiseNumber: 80,
        experience: `Redux es la librería de manejo de estados que he estado usando por los últimos 3 años. Incluso lo uso en este proyecto. Es fácil de usar, la parte difícil es la configuración inicial pero no me gusta que la configuración y el manejo de estados en redux tome demasiado tiempo y pasos. 

        Estoy seguro de que recientemente hay mejores opciones para el manejo de estados pero no he buscado y probado ninguna alternativa mejor aún.`
      },
      {
        title: 'Webpack',
        imgRoute: '/images/DevTools/webpack.webp',
        stars: 1.5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'He hecho un par de configuraciones en webpack 4 y 5 para proyectos del lado del cliente implementando la mayor parte de mi frontend stack y voy a ser honesto, es un molestia necesaria dependiendo del proyecto.'
      },
      {
        title: 'Bootstrap',
        imgRoute: '/images/DevTools/bootstrap.webp',
        stars: 4,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'Bootstrap fue la primera librería de diseño responsivo y ui que conocí. Es muy fácil de instalar y de usar pero no lo uso desde hace 2 años.'
      },
      {
        title: 'Ant design',
        imgRoute: '/images/DevTools/antd.webp',
        stars: 5,
        expertise: 'Advanzado',
        expertiseNumber: 80,
        experience: `Ant es mi librería favorita para diseño responsive, ademas tiene otros componentes super utiles, como muchos inputs y control formularios entre otros componentes ui que son de mucha ayuda.

        Este proyecto tiene el grid y algunos componentes de ant design.`
      },
      {
        title: 'Material UI',
        imgRoute: '/images/DevTools/material.webp',
        stars: 4,
        expertise: 'Principiante',
        expertiseNumber: 20,
        experience: `Esta librería realmente tuvo mi atención en un proyecto (no desarrollado por mí) con increíble UI, así que me gustaría probar Material para saber que es lo que ofrece.
        Mi única experiencia son ejemplos básicos de componente simples y revisando la implementación de Material en otros proyectos.`
      },
      {
        title: 'VS Code',
        imgRoute: '/images/DevTools/vscode.webp',
        stars: 5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'Mi IDE Favorito, no importa que el tipo de desarrollo o lenguaje, uso VS para cada proyecto.'
      },
      {
        title: 'Shopify',
        imgRoute: '/images/DevTools/shopify.webp',
        stars: 3.5,
        expertise: 'Principiante',
        expertiseNumber: 20,
        experience: 'Definitivamente no soy un experto, no me gustaba mucho shopify pero luego conocí otras plataformas de comercio en línea entonces comprendí que shopify era realmente buena, no es tan bueno como un desarrollo personalizado pero tiene beneficios que valen la pena.'
      },
      {
        title: 'Next JS',
        imgRoute: '/images/DevTools/nextjs.webp',
        stars: 4.5,
        expertise: 'Pre-Intermedio',
        expertiseNumber: 35,
        experience: 'Estoy realmente impresionado con next js, está muy optimizado y tiene asombrosas configuraciones. Es realmente fácil de configurar pero puede volverse Dificil si necesitas muchas configuraciones para tu proyecto.'
      },
      {
        title: 'Less',
        imgRoute: '/images/DevTools/less.webp',
        stars: 4.5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'Generalmente todos mis proyectos de frontend esta construidos con less como procesador de Css. Conozco que less tiene muchas configuraciones que ofrecer pero por ahora solo uso anidación y variables.'
      },
      {
        title: 'JW Tokens',
        imgRoute: '/images/DevTools/jwt.webp',
        stars: 4,
        expertise: 'Advanzado',
        expertiseNumber: 80,
        experience: 'Json web tokens es una alternativa que uso para implementar seguridad en el frontend y el backend, la mayoría de los proyectos que he hecho son para entidades financieras así que la seguridad debe ser realmente fuerte.'
      },
      {
        title: 'Apollo',
        imgRoute: '/images/DevTools/apollo.webp',
        stars: 3,
        expertise: 'Basico',
        expertiseNumber: 10,
        experience: 'No tengo lo básico aun pero recientemente tuve un proyecto con servidor graphql y tuve que cambiar algunas configuraciones de apollo así que espero aprender un poco más de apollo pronto.'
      },
      {
        title: 'Axios',
        imgRoute: '/images/DevTools/axios.webp',
        stars: 5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'Realmente fácil de entender, usarlo para el manejo de solicitudes en el frontend y en el backend para la comunicación de un extremo a otro.'
      },
      {
        title: 'AM charts',
        imgRoute: '/images/DevTools/amcharts.webp',
        stars: 4,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'Una alternativa para crear cuadros de mando y gráficos dinámicos con muchas opciones de personalización, no es la librería de gráficos más rápida no tampoco la más fácil pero es una herramienta asombrosa y confiable.'
      },
      {
        title: 'Joi',
        imgRoute: '/images/DevTools/joi.webp',
        stars: 5,
        expertise: 'Advanzado',
        expertiseNumber: 80,
        experience: `Un desarrollador puede probar muchas herramientas de control de tipo de datos pero no encontraran nada mejor que joi.
        Es increíblemente preciso y rápido, permite hacer validaciones simples o validaciones super complejas al instante. Es super útil para el backend para validar los datos de las peticiones y para el frontend para hacer validación de formularios.`
      },
      {
        title: 'Eslint',
        imgRoute: '/images/DevTools/eslint.webp',
        stars: 5,
        expertise: 'Advanzado',
        expertiseNumber: 80,
        experience: 'Actualmente no puedo codificar sin eslint, este me hace mucho más productivo cuando escribo código, he hecho un par de configuraciones de eslint para frontend y el backend, y si, la parte configuración puede ser tediosa pero vale la pena 100%.'
      }

    ],
    achivements: [
      'Diseño responsive dinamico para todas las resoluciones de pantalla (no solo móviles y de escritorio).',
      'Seguridad en el frontend, seguridad en las solicitudes, manejo de cookies y tokens.',
      'Creación de arquitectura frontend JS / TS desde 0 personalizada para casos de uso específicos y preparada para desarrollo, producción y contenerización.',
      'Depuración de aplicaciones en todas las fases.',
      'Formularios dinámicos y validaciones avanzadas.',
      'Creación de dashboards y gráficas dinámicas.'
    ]
  },
  back: {
    devTools: [
      {
        title: 'Node JS',
        imgRoute: '/images/DevTools/nodejs.webp',
        stars: 5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'Node es la base donde ejecuto toda aplicación de backend y frontend y es mi principal servidor web y aplicación cuando hago desarrollo freelance.'
      },
      {
        title: 'Express',
        imgRoute: '/images/DevTools/express.webp',
        stars: 4,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'Express es ligera y rápida, y tiene todo lo que necesitas para construir APIs. Ademas me gustaría probar Koa en un futuro cercano.'
      },
      {
        title: 'Typescript',
        imgRoute: '/images/DevTools/typescript.webp',
        stars: 5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: `Amo typescript, al principio no estaba muy convencido, porque no entendía al 100% los tipos especiales, y el código usando typescript me tomaba 2 o 3 veces más que con javascript plano.

        No soy un experto aun pero me gusta mucho typescript, ahora codifico todo lo que puedo con él.`
      },
      {
        title: 'JW Tokens',
        imgRoute: '/images/DevTools/jwt.webp',
        stars: 4,
        expertise: 'Advanzado',
        expertiseNumber: 80,
        experience: 'Json web tokens es una alternativa que uso para implementar seguridad en el frontend y el backend, la mayoría de los proyectos que he hecho son para entidades financieras así que la seguridad debe ser realmente fuerte.'
      },
      {
        title: 'Joi',
        imgRoute: '/images/DevTools/joi.webp',
        stars: 5,
        expertise: 'Advanzado',
        expertiseNumber: 80,
        experience: `Un desarrollador puede probar muchas herramientas de control de tipo de datos pero no encontraran nada mejor que joi.
        Es increíblemente preciso y rápido, permite hacer validaciones simples o validaciones super complejas al instante. Es super útil para el backend para validar los datos de las peticiones y para el frontend para hacer validación de formularios.`
      },
      {
        title: 'VS Code',
        imgRoute: '/images/DevTools/vscode.webp',
        stars: 5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'Mi IDE Favorito, no importa que el tipo de desarrollo o lenguaje, uso VS para cada proyecto.'
      },
      {
        title: 'GraphQL',
        imgRoute: '/images/DevTools/apollo.webp',
        stars: 5,
        expertise: 'Basico',
        expertiseNumber: 10,
        experience: 'No tengo lo básico aun pero recientemente tuve un proyecto con servidor graphql y actualmente estoy estudiando las configuraciones de servidores graphQl. Estoy realmente interesante hasta ahora'
      },
      {
        title: 'mongoDB',
        imgRoute: '/images/DevTools/mongodb.webp',
        stars: 5,
        expertise: 'Pre-Intermedio',
        expertiseNumber: 35,
        experience: 'No soy un administrados de base de datos pero en los años que he usado mongoDB me ha permitido entender sus increíbles configuraciones, y ademas de hacer respaldos y restauraciones puedes borrar modificar documentos y colecciones atrevés de cli y mongoDB Compass.'
      },
      {
        title: 'Mongoose',
        imgRoute: '/images/DevTools/mongoose.webp',
        stars: 5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'No hay desarrollo de backend y mongoDB sin mongoose, super útil y ayuda mucho con las consultas de mongoDB y el control del modelo de documento para la DB.'
      },
      {
        title: 'BCrypt',
        imgRoute: '/images/DevTools/BCrypt.webp',
        stars: 5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'Es una alternativa a los datos hash antes de que vayan a la base de datos, no tiene un alto nivel de encriptaron para seguridad pero si es usado con otras herramientas de seguridad y estrategia esta se vuelve una solución solida.'
      },
      {
        title: 'Bull',
        imgRoute: '/images/DevTools/bull.webp',
        stars: 3.5,
        expertise: 'Basico',
        expertiseNumber: 10,
        experience: 'Esta paquetería te permite calendarizar tu trabajo, me interesa mucho porque si un cliente me pide programar alguna tarea para el año siguiente, y como desarrollador Javascript/Typescript me encantaría hacerlo en mi idioma principal el lugar de usar java con quartz o algo así.'
      },
      {
        title: 'Axios',
        imgRoute: '/images/DevTools/axios.webp',
        stars: 5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'Realmente fácil de entender, usarlo para el manejo de solicitudes en el frontend y en el backend para la comunicación de un extremo a otro.'
      },
      {
        title: 'Nodemailer',
        imgRoute: '/images/DevTools/nodemailer.webp',
        stars: 4,
        expertise: 'Pre-Intermedio',
        expertiseNumber: 35,
        experience: 'Nodemailer es una librería que nos permite conectarnos aun smtp de cliente para manejar correos. Unicamente lo he usado para notificaciones simples, nunca adjunte archivos o lei otros correos y no estoy seguro si nodemailer nos permite hacerlo pero para notificaciones es una librería increíble.'
      },
      {
        title: 'AWS SNS',
        imgRoute: '/images/DevTools/sns.webp',
        stars: 2,
        expertise: 'Pre-Intermedio',
        expertiseNumber: 35,
        experience: 'Uso el servicio de amazon SNS para enviar mensajes pero no es una buena experiencia. Pero al final del día trabaja y manda sms atrevés de la api.'
      },
      {
        title: 'Mercado Pago',
        imgRoute: '/images/DevTools/mercadoP.webp',
        stars: 4,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'El único servicio de pago que podido integrar, disfrute trabajar con el, creo que necesita más configuraciones de las que tiene, actualmente estoy interesado en Stripe para integración de servicio de pago.'
      },
      {
        title: 'Eslint',
        imgRoute: '/images/DevTools/eslint.webp',
        stars: 5,
        expertise: 'Advanzado',
        expertiseNumber: 80,
        experience: 'Actualmente no puedo codificar sin eslint, este me hace mucho más productivo cuando escribo código, he hecho un par de configuraciones de eslint para frontend y el backend, y si, la parte configuración puede ser tediosa pero vale la pena 100%.'
      }
    ],
    achivements: [
      'Desarrollo de APIs REST y RESTful',
      'Desarrollo en arquitectura de microservicios',
      'Desarrollo de midleware intermedio de seguridad para proteger las API',
      'Cifrado de datos',
      'Manejo de tokens',
      'Gestión de archivos',
      'Notificación a través de mails y sms',
      'Integración a servicios de pago'
    ]
  },
  arch: {
    devTools: [
      {
        title: 'Debian linux',
        imgRoute: '/images/DevTools/debian.webp',
        stars: 5,
        expertise: 'Intermedio',
        expertiseNumber: 55,
        experience: 'No soy un administrador de sistemas ni un gurú de Linux, pero me siento cómodo con las distribuciones de Linux basadas en Debian. Configuré un par de servidores, todos basados ​​en ubuntu, por lo que puedo administrar algunas tareas o ayudar a los arquitectos o administradores de sistemas con el aprovisionamiento.'
      },
      {
        title: 'RHEL',
        imgRoute: '/images/DevTools/redHat.webp',
        stars: 2,
        expertise: 'Principiante',
        expertiseNumber: 20,
        experience: 'Definitivamente no es mi Linux más fuerte, he tenido problemas con el aprovisionamiento, la configuración y la instalación de controladores y software, pero al menos ya probé distribuciones basadas en RHEL y tengo una idea de cómo funciona.'
      },
      {
        title: 'Arch Linux',
        imgRoute: '/images/DevTools/archlinux.webp',
        stars: 4,
        expertise: 'Basico',
        expertiseNumber: 10,
        experience: 'Honestamente, nunca he tocado ninguna distro de Linux basada en Arch, de hecho le tengo miedo a Arch porque tal vez sea demasiado complejo para mis habilidades actuales de Linux, pero me interesó ya que un buen amigo me dijo que su distribución de Manjaro (basado en el arco) es increíble y súper rápido.'
      },
      {
        title: 'Docker',
        imgRoute: '/images/DevTools/docker.webp',
        stars: 5,
        expertise: 'Advanzado',
        expertiseNumber: 80,
        experience: 'Me encanta Docker, mis habilidades más sólidas de contenerización son las aplicaciones de nodo. Puedo manejar implementaciones, puertos, redes acoplables, volúmenes y lo básico.'
      },
      {
        title: 'Lets Encrypt',
        imgRoute: '/images/DevTools/letsencrypt.webp',
        stars: 5,
        expertise: 'Pre-Intermedio',
        expertiseNumber: 35,
        experience: 'Antes de conocer Lets Encrypt, solía gastar dinero y recursos en certificados tls y era doloroso pensar en la configuración y renovación de los certificados. No soy el mayor experto, pero he trabajado con esta herramienta un par Ae veces.'
      },
      {
        title: 'Nginx',
        imgRoute: '/images/DevTools/nginx.webp',
        stars: 4,
        expertise: 'Basico',
        expertiseNumber: 10,
        experience: 'Ni siquiera lo básico, pero estoy realmente interesado en este servidor para manejar solicitudes y servir aplicaciones.'
      },
      {
        title: 'Open-Litespeed',
        imgRoute: '/images/DevTools/openlitespeed.webp',
        stars: 1,
        expertise: 'Pre-Intermedio',
        expertiseNumber: 35,
        experience: 'Muy mala experiencia con este servidor web, no sé si fue mi falta de habilidad o no es una buena alternativa, al menos para el desarrollo moderno.'
      },
      {
        title: 'DNS',
        imgRoute: '/images/DevTools/dns.webp',
        stars: 3,
        expertise: 'Principiante',
        expertiseNumber: 20,
        experience: 'Una vez más, no soy un administrador de sistemas, pero he realizado un par de configuraciones de dns para manejar el tráfico a través de un dominio. He usado dns de google, godaddy, hostgator y digital ocean.'
      },
      {
        title: 'Ansible',
        imgRoute: '/images/DevTools/ansible.webp',
        stars: 4,
        expertise: 'Pre-Intermedio',
        expertiseNumber: 35,
        experience: 'Es sorprendente para la automatización, pero seguro que puede ser otra herramienta que ofrezca más beneficios, pero hasta ahora ansible me ha permitido automatizar entornos de aprovisionamiento y CI.'
      },
      {
        title: 'Digital Ocean',
        imgRoute: '/images/DevTools/digitalocean.webp',
        stars: 5,
        expertise: 'Pre-Intermedio',
        expertiseNumber: 35,
        experience: 'Estoy muy acostumbrado a trabajar con la nube Digital Ocean, es fácil de usar y muy económico en comparación con otros proveedores de la nube. Todavía no he usado la API de Digital Ocean, pero si algún día tengo la oportunidad de aprender y usar Terraform, estaré muy interesado en usar su API.'
      }
    ],
    achivements: [
      'Administración básica de servidores a través de ssh',
      'Configuraciones de claves SSH.',
      'Aprovisionamiento.',
      'Configuración HTTPS y letsencrypt certbot.',
      'Integración continua con ansible.',
      'Comprensión de la mayoría de las arquitecturas a alto nivel.',
      'Trabajo en colaboración con arquitectos y otros lideres técnicos.'
    ]
  }
};

// ----------------------------------Work Expirience------------------------------
const engWorkExp: Array<JobDetail> = [
  {
    urlImg: '/images/WorkExp/WorkExp1.jpeg',
    date: '2017-Jan - 2018-Jan',
    company: 'IBM',
    title: 'Jr Application Developer Java & Web Technologies',
    time: '1 Year',
    description: 'Design, implement and maintain java application phases, take part in software development activities, conduct software analysis, programming, testing and debugging. As jr developer I mainly support and document the operation.'
  },
  {
    urlImg: '/images/WorkExp/WorkExp2.jpeg',
    date: '2018-Jan - 2019-Jan',
    company: 'Freelance',
    title: 'Frontend Developer',
    time: '1 Year',
    description: 'Design, implement and maintain web applications in different phases, analysis, design, development, testing and maintenance using most used technologies (html5, Javascript, JQuery ,css3, boostrap, responsive design, ). Connection to Web Services and Apis, proposals for solutions, programming, testing and debugging.'
  },
  {
    urlImg: '/images/WorkExp/WorkExp1.jpeg',
    date: '2019-Jan - 2021-March',
    company: 'Interware',
    title: 'JR React & Node Developer',
    time: '2.5 Years',
    description: 'Design and develop diferent web systems using modern technogies like the most updated version of react, redux, node, server side render (ssr), webpack and flow for the development. Also for the quality side I use typescript, prettier, checkstyle, eslint to avoid syntax and typing mistakes and sonarqube and code structre mistakes or too much repeated code, ensuring the quality and efficiency of the software'
  },
  {
    urlImg: '/images/WorkExp/WorkExp2.jpeg',
    date: '2021-March - Today',
    company: 'One Phase',
    title: 'Mid Fullstack Developer',
    time: '1.6 Years (last job)',
    description: 'Here I developed a lot of different proyects and manage to improve my previous stack of tecnologies and also understand and learn how to use other tecnologies, such as Graph QL, more backend implementations with different data bases such as mongo db and mariaDB and some infra configurations such as Docker or AWS services'
  }
];

const espWorkExp: Array<JobDetail> = [
  {
    urlImg: '/images/WorkExp/WorkExp1.jpeg',
    date: '2013-Enero',
    company: 'IBM',
    title: 'Desarrollador Jr de aplicaciones Java y Technologias Web',
    time: '1 Año',
    description: 'Diseño, implementación y mantenimiento de aplicaciones Java, actividades de desarrollo de software, análisis, programación, pruebas y depuración de software. Como desarrollador jr, principalmente apoyo y documente la operación.'
  },
  {
    urlImg: '/images/WorkExp/WorkExp2.jpeg',
    date: '2014-Enero',
    company: 'Freelance',
    title: 'Desarrollador Frontend',
    time: '1 Año',
    description: 'Diseñar, implementar y mantener aplicaciones web en diferentes fases, análisis, diseño, desarrollo, testing y mantenimiento utilizando las tecnologías más utilizadas (html5, Javascript, JQuery, css3, boostrap, responsive design,). Conexión a Web Services y Apis, propuestas de soluciones, programación, testing y depuración.'
  },
  {
    urlImg: '/images/WorkExp/WorkExp3.jpeg',
    date: '2015-Enero',
    company: 'PBG',
    title: 'Jefe de Desarrollo',
    time: '1.5 Años',
    description: 'La empresa no tenía un área de desarrollo antes de mi llegada, los productos de TI que necesitaban se alquilaron a consultores externos. Durante mi estadía, utilicé mi experiencia en la solución de los problemas que los consultores intentan resolver como la carga lenta del sitio, la actualización de su sitio web, la promoción de buenas prácticas en el código, ayudando a todos los departamentos a tener una experiencia más amigable, dinámica y funcional en su ambiente de TI además de supervisar que los productos contratados de TI sean lo esperado.'
  },
  {
    urlImg: '/images/WorkExp/WorkExp1.jpeg',
    date: '2016-Marzo',
    company: 'Interware',
    title: 'Desarrollador Fullstack Senior',
    time: '2.5 Años',
    description: 'Diseñar y desarrollar diferentes sistemas web utilizando tecnologías modernas como la versión más actualizada de react, redux, node, server side render (ssr), webpack y flow para el desarrollo. También por el lado de la calidad utilicé husky, prettier, checkstyle, eslint y sonarqube para evitar errores de sintaxis y estructura en el código y JEST con enzyme para la parte de pruebas, asegurando la calidad y eficiencia del software.'
  },
  {
    urlImg: '/images/WorkExp/WorkExp2.jpeg',
    date: '2019-Enero',
    company: 'Interware',
    title: 'Ingeniero Preventa y Líder Técnico',
    time: '1.7 Años (current job)',
    description: 'Después de haber sido asignado en diferentes proyectos como desarrollador, recibí una oferta del director para ayudar como ingeniero Preventa ayudando al equipo de ventas a reunirse con los clientes y ofrecer soluciones de desarrollo medio tiempo y la otra mitad como líder técnico en proyectos y ser responsable del desarrollo. Estaba muy estresado al principio porque se suponía que yo era el experto en todo tipo de tecnologías con los clientes, así que estudié mucho para poder cumplir con las nuevas responsabilidades que tengo actualmente.'
  }
];

// ----------------------------------Basic Info------------------------------
export const englishData = {
  jobWanted: 'React and node mid developer',
  introduction: `Hello, I'm Axel.
  
  Currently Looking for personal grow and modern technologies, for the moment I prefer remote work.
  
  I'm someone that is always looking to stay updated and active in IT and development, who works compromised with results and quality providing the best experience for everyone, I'not focused only in my code, I care about my team, the client, the final user and the company where I work.`,
  time: '1 Year',
  stack: stackEnglish,
  workExp: engWorkExp
};

export const spanishData = {
  jobWanted: 'Desarrollador mid react y node',
  introduction: `Hola, me llamo Axel.

  Actualmente buscando crecimiento personal y tecnologías interesantes, por el momento prefiero trabajo remoto.
  
  Soy alguien que siempre busca estar actualizado y activo en  IT y desarrollo, siempre comprometido con resultados y calidad proveyendo la mejor experiencia para todos. No me enfoco sólo en el código, me preocupo por mi equipo, los clientes, el usuario final y la compañía donde trabajo.`,
  stack: stackSpanish,
  workExp: espWorkExp
};

// ----------------------------------Not multilanguage data------------------------------
export const general = {
  englishLevel: 90,
  sectionIds: {
    top: 'top',
    intro: 'intro',
    stack: 'stack',
    exp: 'exp',
    knowledge: 'knowledge',
    contact: 'contact'
  }
};

// ----------------------------------Labels (careful)------------------------------
export const englishLabels: Labels = {
  startButton: 'Start',
  menu: {
    contact: 'Contact',
    intro: 'Introduction',
    stack: 'Stack',
    experience: 'Experience',
    knowledge: 'Knowledge',
    lang: 'Language'
  },
  introduction: 'Let me introduce myself...',
  devCounter: 'Dev tools and frameworks',
  englishLevel: 'English level',
  DevSkills: {
    first: 'Frontend',
    second: 'Backend',
    third: 'Architecture'
  },
  enjoyUsing: 'How much I like?',
  opinionAndUsage: 'Opinion, usage and experience...',
  achievements: 'Achievements',
  workExp: 'Work trajectory',
  contactMe: 'Contact me'
};

export const spanishLabels: Labels = {
  startButton: 'Empezar',
  menu: {
    contact: 'Contacto',
    intro: 'Presentación',
    stack: 'Stack',
    experience: 'Experiencia',
    knowledge: 'Conocimiento',
    lang: 'Lenguaje'
  },
  introduction: 'Me presento...',
  devCounter: 'Herramientas de desarrollo y frameworks',
  englishLevel: 'Nivel de inglés',
  DevSkills: {
    first: 'Frontend',
    second: 'Backend',
    third: 'Arquitectura'
  },
  enjoyUsing: '¿Cuanto me gusta?',
  opinionAndUsage: 'Opinión, uso y experiencia...',
  achievements: 'Logros',
  workExp: 'Mi trayectoria',
  contactMe: 'Contáctame'
};

export default null;
