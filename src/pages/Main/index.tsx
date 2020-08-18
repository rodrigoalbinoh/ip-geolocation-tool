import React, { FormEvent, useState } from 'react';
import { Container, FormContainer, ResultContainer } from './styles';

import api from '../../services/api';
import validateIP from '../../utils/ValidateIP';

interface IpInfo{
  ip: string;
  country_name: string;
  state_prov: string;
  city: string;
  organization: string;
  latitude: string;
  longitude: string;
}

const Main: React.FC = () => {
  const [ip, setIP] = useState('');
  const [ipInfo, setIpInfo] = useState<IpInfo>();

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if(!validateIP(ip)){
      return;
    }

    const response = await api.get<IpInfo>('/', {
      params: {
        apiKey: process.env.REACT_APP_IPGEO_API_KEY,
        ip
      }
    });

    setIpInfo(response.data);

  }
  return (
    <Container>
      <FormContainer>
        <h1><span>IP</span> Geolocation</h1>
        <form onSubmit={handleSubmit} >
          <input type="text" name="ip" placeholder="Digite um IP válido" onChange={(e) => setIP(e.target.value)} />
          <button type="submit">Buscar</button>
        </form>
      </FormContainer>
      
        {ipInfo && 
        <ResultContainer>
          <span>{ipInfo.ip}</span>
        <div>
          <div>
            <strong>País</strong>
            <span>{ipInfo.country_name}</span>
          </div>
          <div>
            <strong>Estado</strong>
            <span>{ipInfo.state_prov}</span>
          </div>
          <div>
            <strong>Cidade</strong>
            <span>{ipInfo.city}</span>
          </div>
          <div>
            <strong>Organização</strong>
            <span>{ipInfo.organization}</span>
          </div>
          <div>
            <strong>Latitude</strong>
            <span>{ipInfo.latitude}</span>
          </div>
          <div>
            <strong>Longitude</strong>
            <span>{ipInfo.longitude}</span>
          </div>
        </div>
        </ResultContainer>}
      
    </Container>
  )
};

export default Main;