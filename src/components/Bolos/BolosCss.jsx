import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #FFF5F2;
  border: 1px solid #FFF5F2;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  @media (max-width: 320px) {
    padding: 5px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }

  @media (max-width: 320px) {
    gap: 2px;
  }
`;

export const Section = styled.section`
  padding: 15px;
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }

  @media (max-width: 320px) {
    padding: 2px;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

export const Price = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

export const Detail = styled.p`
  margin-bottom: 5px;

  @media (max-width: 480px) {
    margin-bottom: 3px;
  }

  @media (max-width: 320px) {
    margin-bottom: 2px;
  }
`;

export const Highlight = styled.span`
  font-weight: bold;
`;

export const Button = styled.a`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  background-color: pink;
  color: #8a2637;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ff69b4; /* Medium pink color */
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
  }
`;

export const Centro = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  @media (max-width: 320px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const Productdetail = styled.div`
  display: flex;
  gap: 250px;
  padding: 0px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }

  @media (max-width: 320px) {
    gap: 5px;
  }
`;

export const Detalhes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45vw;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Imagem = styled.div`
  img {
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: 25vw;
    height: 60vh;

    @media (max-width: 768px) {
      max-width: 50%;
      height: auto;
    }

    @media (max-width: 480px) {
      max-width: 40%;
    }

    @media (max-width: 320px) {
      max-width: 50%;
    }
  }
`;

export const CarouselContainer  = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;
