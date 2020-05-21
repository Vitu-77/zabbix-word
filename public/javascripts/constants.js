const SLIDES = [
    {
        title: 'Zabbix reports',
        img: '/images/zabbix-reports.gif',
        ancor: 'http://zabbix.reports.com',
        homeBg: 'linear-gradient(292.62deg, #f57b51 -8.19%, #d63447 96.8%)',
        description: 'Com o Zabbix Reports, você pode gerar relatórios a partir dos seus Zabbixes e customizá-los como quiser',
    },
    {
        title: 'Data summary',
        img: '/images/data-summary.gif',
        ancor: 'http://summary.data.com',
        homeBg: 'linear-gradient(296.14deg, #f57b51 27.7%, #d63447 130.31%)',
        description: ' O Zabbix é uma soluçao de monitoraçao de ativos, que vem sendo utilizada em grande escala por milhares de empresas, dentre suas varias funcionalidade ele te entrega uma API para buscar dados e automatizar tarefas, mas se voce não sabe programar fica inviavel utilizar da melhor maneira, o Data Summary nasceu como uma soluçao para abstrair essa dificuldade e entregar ao usuario uma forma mais facil e agil de extrair esses dados.',
    },
];

const MAX = SLIDES.length;
const PRESENTATION_TIMEOUT = 60000;

export { SLIDES, MAX, PRESENTATION_TIMEOUT }