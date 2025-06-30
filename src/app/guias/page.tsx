import Header from "@/components/layout/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Microscope, Syringe } from 'lucide-react';

const equipmentGuides = [
  {
    id: "eq1",
    title: "Como Operar um Microscópio Óptico",
    steps: [
      { title: "Passo 1: Preparação", description: "Verifique se o microscópio está limpo. Conecte-o à energia e ligue a fonte de luz." },
      { title: "Passo 2: Montagem da Lâmina", description: "Coloque a lâmina com a amostra na platina e prenda-a com as pinças." },
      { title: "Passo 3: Focagem Inicial", description: "Use o revólver para selecionar a objetiva de menor aumento. Olhando pelas oculares, use o parafuso macrométrico para aproximar a platina da objetiva e, em seguida, afaste lentamente até a imagem ficar nítida." },
      { title: "Passo 4: Focagem Fina e Observação", description: "Use o parafuso micrométrico para um ajuste fino do foco. Mova a lâmina com os parafusos do carro para explorar a amostra. Para maior aumento, mude a objetiva e reajuste o foco fino." },
    ],
  },
  {
    id: "eq2",
    title: "Uso da Centrífuga de Laboratório",
    steps: [
      { title: "Passo 1: Balanceamento", description: "Sempre coloque os tubos em posições opostas no rotor, com volumes iguais, para garantir o balanceamento. Se tiver um número ímpar de tubos, use um tubo de 'balanço' com água." },
      { title: "Passo 2: Configuração", description: "Feche a tampa da centrífuga firmemente. Programe a velocidade (em RPM ou RCF) e o tempo de centrifugação de acordo com o protocolo." },
      { title: "Passo 3: Operação", description: "Pressione o botão 'Start' e não abra a tampa até que o rotor pare completamente e a máquina indique que é seguro." },
      { title: "Passo 4: Remoção das Amostras", description: "Com a centrífuga parada, abra a tampa e remova os tubos com cuidado para não perturbar o sedimento (pellet) e o sobrenadante." },
    ],
  },
    {
    id: "eq3",
    title: "Operação da Autoclave",
    steps: [
      { title: "Passo 1: Carregamento", description: "Coloque o material a ser esterilizado dentro da autoclave, garantindo que o vapor possa circular livremente. Não sobrecarregue a câmara." },
      { title: "Passo 2: Seleção de Ciclo", description: "Escolha o ciclo de esterilização apropriado para o tipo de material (ex: líquidos, vidraria, resíduos). Verifique a temperatura e o tempo recomendados (geralmente 121°C por 15-20 minutos)." },
      { title: "Passo 3: Início do Ciclo", description: "Feche e trave a porta da autoclave corretamente. Inicie o ciclo e monitore os parâmetros no painel." },
      { title: "Passo 4: Descarregamento Seguro", description: "Após o ciclo, espere a pressão interna zerar completamente antes de abrir a porta. Use luvas de proteção térmica para remover o material quente." },
    ],
  },
];

const medicationGuides = [
  {
    id: "med1",
    title: "Administração de Insulina Subcutânea",
    steps: [
      { title: "Passo 1: Verificação", description: "Confirme a prescrição médica: nome do paciente, tipo de insulina, dose, via e horário. Verifique a data de validade da insulina." },
      { title: "Passo 2: Preparação do Material", description: "Reúna seringa de insulina, agulha, frasco de insulina e algodão com álcool." },
      { title: "Passo 3: Técnica de Aplicação", description: "Faça a assepsia do local de aplicação (abdômen, braços, coxas). Pince a pele para formar uma prega subcutânea e insira a agulha em um ângulo de 90 graus. Injete a insulina lentamente e retire a agulha." },
      { title: "Passo 4: Descarte e Registro", description: "Descarte a seringa e a agulha em um coletor de perfurocortantes. Registre a administração no prontuário do paciente." },
    ],
  },
  {
    id: "med2",
    title: "Coleta de Sangue Venoso",
    steps: [
      { title: "Passo 1: Preparação do Material", description: "Separe luvas, garrote, agulha, adaptador, tubos de coleta apropriados, algodão e curativo." },
      { title: "Passo 2: Preparação do Paciente", description: "Posicione o braço do paciente confortavelmente. Aplique o garrote cerca de 4 dedos acima do local da punção. Peça para o paciente fechar a mão." },
      { title: "Passo 3: Punção", description: "Faça a assepsia do local com álcool 70%. Com o bisel da agulha para cima, insira-a na veia em um ângulo de 15 a 30 graus. Conecte o tubo de coleta." },
      { title: "Passo 4: Finalização", description: "Após coletar o volume necessário, remova o garrote e depois a agulha. Pressione o local com algodão e aplique um curativo. Homogeneize os tubos por inversão suave." },
    ],
  },
];

const GuideAccordion = ({ guides }: { guides: typeof equipmentGuides }) => (
  <Accordion type="single" collapsible className="w-full">
    {guides.map((guide) => (
      <AccordionItem value={guide.id} key={guide.id}>
        <AccordionTrigger className="text-lg text-left hover:no-underline">{guide.title}</AccordionTrigger>
        <AccordionContent>
          <ol className="list-decimal list-inside space-y-4 pl-4">
            {guide.steps.map((step, index) => (
              <li key={index}>
                <strong className="font-semibold">{step.title}:</strong>
                <p className="pl-2 text-muted-foreground inline">{step.description}</p>
              </li>
            ))}
          </ol>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);


export default function GuiasPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Guias Práticos para Internos
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Instruções passo a passo para equipamentos e medicamentos essenciais.
          </p>
        </div>
        
        <Tabs defaultValue="equipamentos" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 h-12">
            <TabsTrigger value="equipamentos" className="text-base">
              <Microscope className="mr-2 h-5 w-5" />
              Equipamentos
            </TabsTrigger>
            <TabsTrigger value="medicamentos" className="text-base">
              <Syringe className="mr-2 h-5 w-5" />
              Medicamentos
            </TabsTrigger>
          </TabsList>
          <TabsContent value="equipamentos" className="mt-8">
            <GuideAccordion guides={equipmentGuides} />
          </TabsContent>
          <TabsContent value="medicamentos" className="mt-8">
            <GuideAccordion guides={medicationGuides} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
