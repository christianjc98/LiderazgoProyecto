import styled from "styled-components";

const Wrapper = styled.main`
  p {
    text-indent: 1rem;
    margin-bottom: 0;
  }
  .characteristics {
    display: flex;
    p {
      margin-top: 0;
    }
    .pi {
      line-height: 0%;
    }
  }
  .profile-img {
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    border-radius: 0.3rem;
  }
  .nav-bar {
    margin-bottom: 1rem;
    border-radius: 0;
  }
  .page {
    display: grid;
    align-items: center;
  }
  .main-img {
    display: none;
  }
  .card {
    display: flex;
  }
  .p-card-body {
  }
  .p-card-content {
    display: flex;
    flex-direction: column;
  }

  .charac-img {
    position: absolute;
    top: 8rem;
    right: 2rem;
    height: 15rem;
    display: none;
  }
  .charac-container {
    position: relative;
    margin-top: 1rem;
  }
  @media (min-width: 690px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
  }
  @media (min-width: 1150px) {
    .charac-img {
      display: block;
    }
  }
`;

export default Wrapper;
