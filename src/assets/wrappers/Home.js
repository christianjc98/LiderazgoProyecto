import styled from "styled-components";

const Wrapper = styled.main`
  .nav-bar {
    margin-bottom: 1rem;
    border-radius: 0;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
  }
  .main-img {
    display: block;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    text-align: center;
    margin-top: 2rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      width: 18rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default Wrapper;
