import styled from "styled-components";

const Wrapper = styled.main`
  p {
    margin-bottom: 0;
  }
  .nav-bar {
    margin-bottom: 1rem;
    border-radius: 0;
  }
  .page {
    display: grid;
    align-items: center;
  }
  .values-img {
    display: none;
  }

  .header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .heading-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
      margin-top: 2rem;
      margin-bottom: 4rem;
    }
    .info {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .values-img {
      width: 30rem;
      margin-right: 3rem;
      display: block;
    }
  }
`;

export default Wrapper;
