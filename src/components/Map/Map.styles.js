import styled from "styled-components";

export const Content = styled.div`
  flex: 1;
  height: 100%;
  background-color: var(--color-light--1);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  #map {
    height: 100vh;
    overflow: hidden;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  .leaflet-popup .leaflet-popup-content-wrapper {
    background-color: var(--color-dark--1);
    color: var(--color-light--2);
    border-radius: 5px;
    padding-right: 0.6rem;
  }

  .leaflet-popup .leaflet-popup-content {
    font-size: 1.5rem;
  }

  .leaflet-popup .leaflet-popup-tip {
    background-color: var(--color-dark--1);
  }

  .running-popup .leaflet-popup-content-wrapper {
    border-left: 5px solid var(--color-brand--2);
  }
  .cycling-popup .leaflet-popup-content-wrapper {
    border-left: 5px solid var(--color-brand--1);
  }

  .popup-description {
    display: inline-flex;
  }
`;
