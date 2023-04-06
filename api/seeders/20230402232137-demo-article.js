'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        title: 'A importância do novo CPC para o direito processual civil brasileiro',
        author: 'Joao Silva',
        content: 'O novo Código de Processo Civil (Lei nº 13.105/2015) trouxe importantes mudanças para o direito processual civil brasileiro. Dentre as principais alterações, destacam-se a maior celeridade e eficiência do processo, a maior participação das partes na condução do processo e a maior garantia dos direitos fundamentais das partes envolvidas. Com isso, o novo CPC tem como objetivo tornar o processo civil mais justo e acessível para todos os cidadãos brasileiros.',
        date: '2022-02-01',
        category: 'Civil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A regulamentação da mediação no Brasil',
        author: 'Maria Souza',
        content: 'A mediação é um método alternativo de resolução de conflitos que tem se mostrado cada vez mais eficiente e eficaz em comparação com os métodos tradicionais. No Brasil, a mediação foi regulamentada pela Lei nº 13.140/2015, que estabeleceu as bases para a prática da mediação em território nacional. Com a regulamentação da mediação, espera-se que cada vez mais pessoas e empresas possam utilizar esse método para resolver conflitos de forma pacífica e justa.',
        date: '2022-02-02',
        category: 'Mediacao',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A importância da preservação dos direitos autorais',
        author: 'Pedro Santos',
        content: 'Os direitos autorais são uma das formas mais importantes de proteção da propriedade intelectual. Eles garantem que os criadores de obras intelectuais, como livros, músicas, filmes e programas de computador, tenham o direito exclusivo de reproduzir, distribuir e exibir suas obras. No Brasil, os direitos autorais são regulados pela Lei nº 9.610/1998, que estabelece as bases para a proteção da propriedade intelectual no país. Com a preservação dos direitos autorais, é possível garantir que os criadores de obras intelectuais sejam devidamente remunerados pelo seu trabalho e que a cultura e o conhecimento sejam preservados para as futuras gerações.',
        date: '2022-02-03',
        category: 'Autoral',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'O impacto da LGPD no setor de tecnologia',
        author: 'Maria Souza',
        content: 'A Lei Geral de Proteção de Dados (LGPD) entrou em vigor no Brasil em setembro de 2020 e tem gerado grandes impactos no setor de tecnologia. A nova lei estabelece regras claras para o tratamento de dados pessoais pelas empresas, o que pode afetar modelos de negócios baseados em coleta e venda de informações. Além disso, a LGPD impõe penalidades severas para as empresas que não cumprirem as suas disposições, o que tem levado muitas organizações a investir em conformidade com a nova legislação.',
        date: '2021-03-15',
        category: 'Digital',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A importância da prova pericial em processos trabalhistas',
        author: 'Pedro Santos',
        content: 'A prova pericial é uma das principais formas de produção de prova em processos trabalhistas. Ela consiste na realização de exames, vistorias ou avaliações por profissionais especializados para esclarecer questões técnicas envolvidas no caso. A prova pericial pode ser solicitada por qualquer das partes envolvidas no processo e é muito importante para garantir que as decisões judiciais sejam baseadas em evidências sólidas e confiáveis. Por isso, é fundamental contar com peritos capacitados e experientes para a realização desse tipo de prova.',
        date: '2021-05-10',
        category: 'Trabalhista',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Os desafios da conciliação em processos criminais',
        author: 'Lucas Oliveira',
        content: 'A conciliação é uma forma de resolução de conflitos que vem ganhando cada vez mais espaço em processos criminais. Ela consiste em uma negociação entre o acusado e a vítima ou o Ministério Público, com o objetivo de encontrar uma solução que satisfaça ambas as partes. No entanto, a conciliação em processos criminais apresenta alguns desafios, como a necessidade de garantir que a solução encontrada seja justa e adequada à gravidade do crime, além de garantir a segurança das partes envolvidas. Por isso, é importante contar com profissionais capacitados e experientes para conduzir esse tipo de processo.',
        date: '2021-06-20',
        category: 'Penal',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
