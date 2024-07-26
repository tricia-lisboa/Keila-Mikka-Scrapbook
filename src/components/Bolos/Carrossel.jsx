import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import * as S from './BolosCss';

const Carrossel = ({ images }) => {
  return (
    <S.CarouselContainer>
      <Carousel
        showThumbs={false}   // Oculta as miniaturas (thumbnails)
        showArrows={true}    // Mostra setas de navegação
        autoPlay={true}      // Ativa a reprodução automática
        infiniteLoop={true}  // Ativa o loop infinito
        showStatus={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <S.Imagem>
              <img src={image.src} alt={image.alt} />
            </S.Imagem>
          </div>
        ))}
      </Carousel>
    </S.CarouselContainer>
  );
};

export default Carrossel;
