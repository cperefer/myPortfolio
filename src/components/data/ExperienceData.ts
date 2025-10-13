export interface Experience {
  company: string;
  time: string;
  position: string;
  projects: Project[]
}

export interface Project {
  name: string;
  description: string;
  stack: string;
}

export const ntt: Experience = {
  company: 'NTT Data',
  time: 'Abril 2020 - actualmente',
  position: 'Senior Software Engineer',
  projects: [
    {
      name: 'BBVA Empresas',
      description: 'Gestión de equipos y desarrollo de funcionalidades tanto backend como frontend en los portales de Empresas.',
      stack: 'Frontend: Cells, Backend: ASO, APX',
    },
    {
      name: 'UGG',
      description: 'Desarrollo de los procesos, estándares y comunicaciones realizados por técnicos y operadores en la instalación de fibra óptica.',
      stack: 'Backend: Spring Boot, Database: Neo4J',
    },
    {
      name: 'Telefónica - STV IPTV',
      description: 'Desarrollo de nuevas funcionalidades y componentes para la plataforma de VOD en Sudamérica.',
      stack: 'Frontend: Javascript, Web Components, HTML5, CSS3',
    },
  ]
}

export const madison: Experience = {
  company: 'Madison Marketing Experience',
  time: 'Septiembre 2018 - Marzo 2020',
  position: 'Fullstack developer',
  projects: [
    {
      name: 'Paradores',
      description: 'Desarrollo, mantenimiento y procesamiendo de datos de la encuesta para los mystery shoppers de la cadena hotelera Paradores.',
      stack: 'Frontend: Javascript, Database: MySQL, Herramientas: Lime Survey',
    },
    {
      name: 'Canal Isabel II',
      description: 'Diseño de encuestas de satisfacción y control de calidad además del portal de explotación y consulta de datos.',
      stack: 'Frontend: Javascript, Database: MySQL, Backend: PHP, Herramientas: Lime Survey',
    },
    {
      name: 'Turismo CyL',
      description: 'Mantenimiento del portal y desarrollo de nuevas funcionalidades',
      stack: 'Frontend: Angular, Backend: PHP, Database: MySQL',
    },
  ]
}

export const maspc: Experience = {
  company: 'MasPC',
  time: 'Febrero 2017 - Agosto 2018',
  position: 'Frontend developer & community manager',
  projects: [
    {
      name: 'Centro del Deporte - tienda',
      description: 'Creación y configuración del portal de venta y sus módulos internos.',
      stack: 'Frontend: Javascript, Backend: PHP, Database: MySQL, Herramientas: Joomla',
    },
    {
      name: 'Centro del Deporte - RRSS',
      description: 'Mantenimiento y manejo de las redes sociales.',
      stack: 'Herramientas: Hootsuite',
    },
    {
      name: 'Más PC',
      description: 'Renovación de la página web de la empresa',
      stack: 'Frontend: HTML5, CSS3, Javascript',
    },
  ]
}