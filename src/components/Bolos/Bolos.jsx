import React from 'react';
import Carrossel from './Carrossel';
import Bolo1 from '../../assets/bolo1.png';
import Bolo2 from '../../assets/bolo2.png';
import Bolo3 from '../../assets/bolo3.png';
import * as S from './BolosCss';

const images = [
  {
    src: Bolo1,
    alt: 'Image 1',
    caption: 'Caption 1'
  },
  {
    src: Bolo2,
    alt: 'Image 2',
    caption: 'Caption 2'
  },
  {
    src: Bolo3,
    alt: 'Image 3',
    caption: 'Caption 3'
  }
];

const Bolos = () => {
  return (
    <S.Productdetail>
      <S.Centro>
        <Carrossel images={images} />
      </S.Centro>

      <S.Detalhes>
        <S.Container>
          <S.Grid>
            <S.Section>
              <S.Title>Tamanhos:</S.Title>
              <S.Price>15 cm <S.Highlight>R$200,00</S.Highlight></S.Price>
              <S.Price>20 cm <S.Highlight>R$260,00</S.Highlight></S.Price>
              <S.Price>25 cm <S.Highlight>R$350,00</S.Highlight></S.Price>
            </S.Section>

            <S.Section>
              <S.Title>Topo:</S.Title>
              <S.Detail>Topo simples incluso</S.Detail>
              <S.Detail>Topo 3D acréscimo de <S.Highlight>R$20,00</S.Highlight></S.Detail>
              <S.Detail>Topo com flores, consultar valor</S.Detail>
              <S.Detail>Glow cake acréscimo de <S.Highlight>R$20,00</S.Highlight></S.Detail>
            </S.Section>

            <S.Section>
              <S.Title>Massas:</S.Title>
              <S.Detail>Branca</S.Detail>
              <S.Detail>Chocolate</S.Detail>
            </S.Section>

            <S.Section>
              <S.Title>Recheio:</S.Title>
              <S.Detail>Coco cremoso</S.Detail>
              <S.Detail>Paçoca</S.Detail>
              <S.Detail>Doce de leite</S.Detail>
              <S.Detail>Brigadeiro</S.Detail>
              <S.Detail>Casadinho</S.Detail>
            </S.Section>

            <S.Section>
              <S.Title>Pedidos:</S.Title>
              <S.Detail>Mediante 50% de sinal e o restante no dia antes da retirada</S.Detail>
            </S.Section>

            <S.Section>
              <S.Title>Entrega:</S.Title>
              <S.Detail>Não fazemos entrega, mas enviamos por Uber por responsabilidade do cliente</S.Detail>
            </S.Section>
          </S.Grid>

          <S.Button href="https://wa.me/5591993964667?text=Olá!%20Eu%20quero%20fazer%20um%20pedido%20de%20um%20bolo%20!" target="_blank" rel="noopener noreferrer">
            Quero comprar um bolo!
          </S.Button>
        </S.Container>
      </S.Detalhes>
    </S.Productdetail>
  );
};

export default Bolos;
