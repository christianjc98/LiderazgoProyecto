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
  .logo {
    width: 15rem;
  }

  .header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  .model-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  iframe {
    margin-top: 2rem;
  }

  @media (min-width: 992px) {
    iframe {
      width: 100%;
    }
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .model-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
      margin-top: 2rem;
    }
    .header-container {
      display: flex;
      justify-content: center;
      flex-direction: row;
    }
    .logo {
      width: 15rem;
      margin-right: 3rem;
    }
  }
`;

export default Wrapper;
