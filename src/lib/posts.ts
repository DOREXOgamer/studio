import type { Post } from "./types";

let posts: Post[] = [
  {
    id: "1",
    title: "Revolucionando o Tratamento do Câncer com CRISPR-Cas9",
    author: "Dra. Evelyn Reed",
    avatar: "/avatars/01.png",
    date: "2024-07-20",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "genetics lab",
    content: `
O advento da tecnologia CRISPR-Cas9 marcou uma nova era na engenharia genética, oferecendo uma precisão sem precedentes na edição do genoma. No contexto da oncologia, esta ferramenta é imensamente promissora para o desenvolvimento de novas terapias contra o câncer. Os pesquisadores estão explorando várias estratégias, incluindo a correção de mutações causadoras de câncer, o aprimoramento da capacidade do sistema imunológico de combater o câncer e a engenharia de vírus terapêuticos.
Uma das aplicações mais promissoras é na terapia com células CAR-T. Ao usar o CRISPR para editar as células T, os cientistas podem torná-las mais eficazes no reconhecimento e destruição das células cancerígenas, ao mesmo tempo em que reduzem o risco de efeitos colaterais. Ensaios clínicos recentes mostraram resultados encorajadores em pacientes com certos tipos de leucemia e linfoma.
Além disso, o CRISPR está sendo usado para criar modelos de câncer mais precisos em laboratório, permitindo uma melhor triagem de medicamentos e uma compreensão mais profunda da biologia do tumor. Esses modelos são cruciais para personalizar os planos de tratamento dos pacientes. Apesar do entusiasmo, persistem desafios, incluindo efeitos fora do alvo e as implicações éticas da edição da linha germinativa. No entanto, o ritmo da pesquisa é rápido, e as terapias baseadas em CRISPR estão prestes a se tornar um pilar do tratamento do câncer no futuro próximo.
    `,
  },
  {
    id: "2",
    title: "O Papel do Microbioma Intestinal em Distúrbios Neurológicos",
    author: "Dr. Kenji Tanaka",
    avatar: "/avatars/02.png",
    date: "2024-07-18",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "microscope bacteria",
    content: `
O eixo intestino-cérebro, uma rede de comunicação bidirecional entre o trato gastrointestinal e o sistema nervoso central, é um campo de estudo em rápida ascensão. Agora é amplamente aceito que o microbioma intestinal desempenha um papel crucial na manutenção da saúde do cérebro. Desequilíbrios nas bactérias intestinais, conhecidos como disbiose, foram associados a uma variedade de distúrbios neurológicos e psiquiátricos, incluindo a doença de Parkinson, a doença de Alzheimer, a depressão e a ansiedade.
Os micróbios no intestino podem influenciar a função cerebral por meio de vários mecanismos. Eles produzem compostos neuroativos, como serotonina e dopamina, que são essenciais para a regulação do humor. Eles também modulam o sistema imunológico e influenciam a integridade da barreira hematoencefálica. A inflamação crônica desencadeada pela disbiose intestinal pode contribuir para a neuroinflamação, um fator-chave na progressão de muitas doenças neurodegenerativas.
A pesquisa agora está focada em aproveitar o poder do microbioma para fins terapêuticos. Probióticos, prebióticos e transplante de microbiota fecal (FMT) estão sendo investigados como tratamentos potenciais para restaurar um ambiente intestinal saudável e aliviar os sintomas neurológicos. Embora mais pesquisas sejam necessárias para estabelecer a causalidade e desenvolver intervenções direcionadas, a modulação do microbioma intestinal representa uma abordagem inovadora para prevenir e tratar distúrbios cerebrais.
    `,
  },
  {
    id: "3",
    title: "Avanços na Tecnologia de Vacinas de mRNA Além da COVID-19",
    author: "Dra. Sofia Al-Jamil",
    avatar: "/avatars/03.png",
    date: "2024-07-15",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "vaccine development",
    content: `
O desenvolvimento bem-sucedido de vacinas de mRNA para a COVID-19 catalisou uma revolução na vacinologia. Essa tecnologia oferece várias vantagens sobre as vacinas tradicionais, incluindo desenvolvimento rápido, escalabilidade e a capacidade de eliciar fortes respostas imunes. Os cientistas agora estão aproveitando o poder do mRNA para combater uma ampla gama de doenças infecciosas e até mesmo condições não infecciosas, como o câncer.
Uma das fronteiras mais empolgantes é o desenvolvimento de vacinas personalizadas contra o câncer. Essas vacinas são adaptadas às mutações específicas encontradas no tumor de um paciente, treinando seu sistema imunológico para reconhecer e atacar as células cancerígenas. Ensaios de fase inicial para melanoma e câncer de pâncreas mostraram resultados promissores, oferecendo um novo farol de esperança para pacientes com malignidades de difícil tratamento.
Além disso, as vacinas de mRNA estão sendo desenvolvidas para outros vírus desafiadores, como influenza, HIV e vírus sincicial respiratório (VSR). A flexibilidade da plataforma de mRNA permite a criação de vacinas multivalentes que podem proteger contra múltiplas cepas de um vírus simultaneamente. À medida que a pesquisa continua a refinar os sistemas de entrega de nanopartículas lipídicas e a aumentar a estabilidade das moléculas de mRNA, podemos esperar ver uma nova geração de vacinas mais seguras, mais eficazes e mais acessíveis para pessoas em todo o mundo.
    `,
  },
];

export const getPosts = (): Post[] => {
  return posts;
};

export const getPostById = (id: string): Post | undefined => {
  return posts.find((post) => post.id === id);
};

export const addPost = (postData: Omit<Post, 'id' | 'date' | 'avatar' | 'imageUrl' | 'imageHint'>): Post => {
  const newPost: Post = {
    ...postData,
    id: (posts.length + 1).toString(),
    date: new Date().toISOString().split('T')[0],
    avatar: '/avatars/04.png',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: "pesquisa ciencia",
  };
  posts.unshift(newPost);
  return newPost;
};
