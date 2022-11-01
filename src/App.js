import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    deckOfCards: [
      {
        cardName: 'Batman',
        cardDescription: 'Após a morte de seus pais, Bruce herdou uma considerável fortuna, além da Mansão Wayne. Ao longo de sua vida, combateu inúmeros vilões criminosos de Gotham City, onde operou por muitos anos. Eventualmente fez parte da Liga da Justiça, onde atuou ao lado de outros super-heróis com o intuito de reprimir o crime.',
        cardAttr1: '48',
        cardAttr2: '63',
        cardAttr3: '85',
        cardImage: 'https://cdn1.epicgames.com/undefined/offer/batman-arkham-knight_promo-2048x1152-ed2be22b3f24f446534b90b122ed560d.jpg',
        cardRare: 'RARO',
        cardTrunfo: false,
      },
      {
        cardName: 'Superman',
        cardDescription: 'Nascido no planeta Krypton sob o nome de Kal-El ele foi enviado à Terra momentos antes do planeta explodir, aterrisando na cidade de Smallville/Pequenópolis. O jovem Kal-El foi descoberto/adotado por um casal de fazendeiros e recebeu o nome de Clark Kent.',
        cardAttr1: '48',
        cardAttr2: '63',
        cardAttr3: '85',
        cardImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NYqAmQImuxPTUIzeNj_TEAHaEK%26pid%3DApi&f=1&ipt=cdb681918628edde9af6a7cea474ea80ef94aac2dc232f696e014da935411d21&ipo=images',
        cardRare: 'RARO',
        cardTrunfo: true,
      },
      {
        cardName: 'Mulher-maravilha',
        cardDescription: 'Após a morte de seus pais, Bruce herdou uma considerável fortuna, além da Mansão Wayne. Ao longo de sua vida, combateu inúmeros vilões criminosos de Gotham City, onde operou por muitos anos. Eventualmente fez parte da Liga da Justiça, onde atuou ao lado de outros super-heróis com o intuito de reprimir o crime.',
        cardAttr1: '48',
        cardAttr2: '63',
        cardAttr3: '85',
        cardImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kFhir3gjHvXsKfkjIaVUMAHaEK%26pid%3DApi&f=1&ipt=41ab0c4ceafc790918d7e140b3c46fbf2a935b0adafbc563331edcd64e2e981b&ipo=images',
        cardRare: 'NORMAL',
        cardTrunfo: false,
      },
      {
        cardName: 'Lanterna Verde',
        cardDescription: 'Hal Jordan é um piloto de caça e membro da tropa dos Lanternas Verdes, um dos protetores do Setor 2814, que é o setor onde a Terra reside. Seus poderes derivam de seu anel de energia e da bateria do Lanterna Verde, que nas mãos de alguém capaz de superar o grande medo permite ao usuário canalizar sua força de vontade.',
        cardAttr1: '48',
        cardAttr2: '63',
        cardAttr3: '85',
        cardImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hAOYp0HrLJzWvFEJkPShJQHaD4%26pid%3DApi&f=1&ipt=dac11df8b2ef33a3dc5c819fa19c63578a7b43655fd319dd34b6c3d1d204ca05&ipo=images',
        cardRare: 'NORMAL',
        cardTrunfo: false,
      },
      {
        cardName: 'Aquaman',
        cardDescription: 'Nascido com o nome de Orin, filho da rainha Atlanna e do misterioso feiticeiro Atlan na cidade atlante de Poseidonis. Ainda um bebê, ele foi abandonado. Como uma criança selvagem que se criou sozinha nos confins do oceano com somente as criaturas do mar para lhe fazer companhia, Orin foi encontrado e recolhido por um faroleiro que colocou o nome de "Arthur Curry Jr.".',
        cardAttr1: '48',
        cardAttr2: '63',
        cardAttr3: '85',
        cardImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yxXrBLJtsRYBAVfZmNzOLwHaDn%26pid%3DApi&f=1&ipt=20c14b250ed14a08f3801c8dfda127c6aa2a5c6f8879a16c3a38b6e70588d7c9&ipo=images',
        cardRare: 'NORMAL',
        cardTrunfo: false,
      },
      {
        cardName: 'Flash',
        cardDescription: 'Barry Allen é funcionário da polícia científica. Aos 11 anos viu sua mãe sendo morta por um velocista e seu pai foi preso, quando sofreu um acidente químico após seu laboratório ser atingido por um raio. Esse acidente fez que ele, fosse capaz de acessar e canalizar o poder vindo da "Força de Aceleração".',
        cardAttr1: '48',
        cardAttr2: '63',
        cardAttr3: '85',
        cardImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.B-6qL2FnGvxLILnLjcikwgHaDt%26pid%3DApi&f=1&ipt=1da35d362c39d342227a1708ecb75b4967e8960773c92afc87c5d46523852d70&ipo=images',
        cardRare: 'NORMAL',
        cardTrunfo: false,
      },
      {
        cardName: 'Caçador de Marte',
        cardDescription: 'Jonn Jonzz foi separado do restante de sua raça quando um cientista da Terra criou uma maquina, que segundo ele poderia alcançar os confins do universo, a fim de verificar se existia vida inteligente. Um dia nos anos 50, a máquina funcionou e ela transportou um marciano macho para a terra.',
        cardAttr1: '48',
        cardAttr2: '63',
        cardAttr3: '85',
        cardImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lGta9nIQ9rUa5FlTAGhJegHaD4%26pid%3DApi&f=1&ipt=1c2faabde99d3b953dc8e8cb12171f5edae2eb5b9fed3f21db800d57a40171bf&ipo=images',
        cardRare: 'NORMAL',
        cardTrunfo: false,
      },
      {
        cardName: 'Arqueiro Verde',
        cardDescription: 'Oliver Queen é um milionário industrial que, certa noite, bêbado, caiu de um iate no mar e ficou preso numa ilha deserta próximo a Costa da Califórniae para se manter precisou caçar usando um conjunto rústico de arco e flechas. Assim ele prendeu um grupo de traficantes e usou o barco deles para retornar para a costa',
        cardAttr1: '48',
        cardAttr2: '63',
        cardAttr3: '85',
        cardImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mYsiJLwbY-WqOReBnrbTCAHaEK%26pid%3DApi&f=1&ipt=b50088d802e9c5e1fade9d5be2fee18ba766347ce45f465588d2416c109c7727&ipo=images',
        cardRare: 'NORMAL',
        cardTrunfo: false,
      },
    ],
  };

  buttonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxValueEachAttr = 90;
    const maxSumAttr = 210;
    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if ((cardName.length
      && cardDescription.length
      && cardImage.length
      && cardRare.length !== 0)
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) >= 0

      && Number(cardAttr1) <= maxValueEachAttr
      && Number(cardAttr2) <= maxValueEachAttr
      && Number(cardAttr3) <= maxValueEachAttr

      && (sumAttr <= maxSumAttr)
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else { this.setState({ isSaveButtonDisabled: true }); }
  }

  onInputChange = ({ target: { value, name, type, checked } }) => {
    this.setState({ [name]: type === 'checkbox' ? checked : value }, this.buttonDisabled);
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newObject = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      deckOfCards: [...prevState.deckOfCards, newObject],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    }), () => this.trunfoVerified((prevState) => [...prevState.deckOfCards]));
  };

  trunfoVerified = () => {
    const { deckOfCards } = this.state;
    if (deckOfCards.filter((item) => item.cardTrunfo === true).length > 0) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  excludeButton = (card) => {
    const { deckOfCards } = this.state;
    const index = deckOfCards.findIndex((cardOfDeck) => cardOfDeck === card);

    deckOfCards.splice(index, 1);

    this.setState({ deckOfCards }, () => this.trunfoVerified());
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      deckOfCards,
    } = this.state;

    return (
      <div className="conteiner pt-4 bg">
        <h1 className="text-center">DC Super Trunfo</h1>
        <section className="row g-0 justify-content-center mx-auto pt-5">
          <div className="col-12 col-md-8 d-flex flex-wrap justify-content-center">
            <div className="col-md-5 d-flex justify-content-end mb-3">
              <Form
                cardName={cardName}
                cardDescription={cardDescription}
                cardAttr1={cardAttr1}
                cardAttr2={cardAttr2}
                cardAttr3={cardAttr3}
                cardImage={cardImage}
                cardRare={cardRare}
                cardTrunfo={cardTrunfo}
                hasTrunfo={hasTrunfo}
                isSaveButtonDisabled={isSaveButtonDisabled}
                onInputChange={this.onInputChange}
                onSaveButtonClick={this.onSaveButtonClick}
              />
            </div>
            <div className="col-md-5 gx-5">
              <Card
                cardName={cardName}
                cardDescription={cardDescription}
                cardAttr1={cardAttr1}
                cardAttr2={cardAttr2}
                cardAttr3={cardAttr3}
                cardImage={cardImage}
                cardRare={cardRare}
                cardTrunfo={cardTrunfo}
              />
            </div>
          </div>
        </section>

        <section className="container-fluid pt-5">
          <h2 className="text-center mb-4 mt-5">Este é o seu Deck!</h2>
          <div className="container-fluid">
            <div className="row justify-content-center">
              {deckOfCards.map((card) => (
                <div className="col-12 col-md-6 col-lg-4 mb-5" key={card.cardName}>
                  <Card
                    key={card.cardName}
                    cardName={card.cardName}
                    cardDescription={card.cardDescription}
                    cardAttr1={card.cardAttr1}
                    cardAttr2={card.cardAttr2}
                    cardAttr3={card.cardAttr3}
                    cardImage={card.cardImage}
                    cardRare={card.cardRare}
                    cardTrunfo={card.cardTrunfo}
                  />
                  <button
                    type="button"
                    data-testid="delete-button"
                    onClick={() => this.excludeButton(card)}
                    Style="width:100px"
                    className="mt-2 btn btn-danger"
                  >
                    Excluir
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
