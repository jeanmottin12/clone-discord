import React from 'react';

import { Container, Role, User, Avatar } from './styles';

export interface UserProps {
  isBot?: boolean;
  nickname: string;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Jean Mottin" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandesssssss" isBot />
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname="Diego Fernandes"  />
      <UserRow nickname="Diego Fernandes"  />
      <UserRow nickname="Diego Fernandes"  />
      <UserRow nickname="Diego Fernandes"  />
      <UserRow nickname="Diego Fernandes"  />
      <UserRow nickname="Diego Fernandes"  />
      <UserRow nickname="Diego Fernandes"  />
      <UserRow nickname="Diego Fernandes"  />
      <UserRow nickname="Diego Fernandes"  />
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname="Diego Fernandes" isBot />
    </Container>
  )
}

export default UserList;