
export interface TechStack {
  name: string;
  img: string;
}

export const frontend: TechStack[] =   
    [
      {name: 'JavaScript', img: './images/javascript.png'},
      {name: 'TypesScript', img: './images/typescript.png'},
      {name: 'React', img: './images/react.png'},
      {name: 'NextJS', img: './images/nextjs.png'},
      {name: 'Tailwind CSS', img: './images/tailwind.png'},
    ];

export const backend: TechStack[] = [
  {name: 'Spring Framework', img: './images/spring.png'},
]

export const database: TechStack[] = [
  {name: 'MySQL', img: './images/mysql.png'},
  {name: 'Firebase', img: './images/firebase.png'},
]

export const tools: TechStack[] = [
  {name: 'Git', img: './images/git.png'},
  {name: 'Vercel', img: './images/vercel.png'},
]
