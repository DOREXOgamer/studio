import type { Post } from "./types";

let posts: Post[] = [
  {
    id: "1",
    title: "Revolutionizing Cancer Treatment with CRISPR-Cas9",
    author: "Dr. Evelyn Reed",
    avatar: "/avatars/01.png",
    date: "2024-07-20",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "genetics lab",
    content: `
The advent of CRISPR-Cas9 technology has marked a new era in genetic engineering, offering unprecedented precision in editing the genome. In the context of oncology, this tool holds immense promise for developing novel cancer therapies. Researchers are exploring various strategies, including correcting cancer-causing mutations, enhancing the immune system's ability to fight cancer, and engineering therapeutic viruses.
One of the most promising applications is in CAR-T cell therapy. By using CRISPR to edit T-cells, scientists can make them more effective at recognizing and destroying cancer cells, while also reducing the risk of side effects. Recent clinical trials have shown encouraging results in patients with certain types of leukemia and lymphoma.
Furthermore, CRISPR is being used to create more accurate cancer models in the lab, allowing for better drug screening and a deeper understanding of tumor biology. These models are crucial for personalizing treatment plans for patients. Despite the excitement, challenges remain, including off-target effects and the ethical implications of germline editing. However, the pace of research is rapid, and CRISPR-based therapies are poised to become a cornerstone of cancer treatment in the near future.
    `,
  },
  {
    id: "2",
    title: "The Role of Gut Microbiome in Neurological Disorders",
    author: "Dr. Kenji Tanaka",
    avatar: "/avatars/02.png",
    date: "2024-07-18",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "microscope bacteria",
    content: `
The gut-brain axis, a bidirectional communication network between the gastrointestinal tract and the central nervous system, is a rapidly emerging field of study. It is now widely accepted that the gut microbiome plays a crucial role in maintaining brain health. Imbalances in gut bacteria, known as dysbiosis, have been linked to a variety of neurological and psychiatric disorders, including Parkinson's disease, Alzheimer's disease, depression, and anxiety.
Microbes in the gut can influence brain function through several mechanisms. They produce neuroactive compounds, such as serotonin and dopamine, which are essential for mood regulation. They also modulate the immune system and influence the integrity of the blood-brain barrier. Chronic inflammation triggered by gut dysbiosis can contribute to neuroinflammation, a key factor in the progression of many neurodegenerative diseases.
Research is now focused on harnessing the power of the microbiome for therapeutic purposes. Probiotics, prebiotics, and fecal microbiota transplantation (FMT) are being investigated as potential treatments to restore a healthy gut environment and alleviate neurological symptoms. While more research is needed to establish causality and develop targeted interventions, modulating the gut microbiome represents a groundbreaking approach to preventing and treating brain disorders.
    `,
  },
  {
    id: "3",
    title: "Advances in mRNA Vaccine Technology Beyond COVID-19",
    author: "Dr. Sofia Al-Jamil",
    avatar: "/avatars/03.png",
    date: "2024-07-15",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "vaccine development",
    content: `
The successful development of mRNA vaccines for COVID-19 has catalyzed a revolution in vaccinology. This technology offers several advantages over traditional vaccines, including rapid development, scalability, and the ability to elicit strong immune responses. Scientists are now leveraging the power of mRNA to target a wide range of infectious diseases and even non-infectious conditions like cancer.
One of the most exciting frontiers is the development of personalized cancer vaccines. These vaccines are tailored to the specific mutations found in a patient's tumor, training their immune system to recognize and attack cancer cells. Early-phase trials for melanoma and pancreatic cancer have shown promising results, offering a new beacon of hope for patients with hard-to-treat malignancies.
Additionally, mRNA vaccines are being developed for other challenging viruses, such as influenza, HIV, and respiratory syncytial virus (RSV). The flexibility of the mRNA platform allows for the creation of multivalent vaccines that can protect against multiple strains of a virus simultaneously. As research continues to refine lipid nanoparticle delivery systems and enhance the stability of mRNA molecules, we can expect to see a new generation of vaccines that are safer, more effective, and more accessible to people worldwide.
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
    imageHint: "science research",
  };
  posts.unshift(newPost);
  return newPost;
};
