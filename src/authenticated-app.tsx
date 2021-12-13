import styled from "@emotion/styled";
import { Button, Dropdown, Menu } from "antd";
import { Row } from "components/lib";
import { useAuth } from "context/auth.context";
import { ProjectListScreen } from "screens/project-list";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();

  return (
    <div>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h2>Logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown overlay={<Menu>
            <Menu.Item key={'logout'}>
              <Button type={'link'} onClick={logout}>登出</Button>
            </Menu.Item>
          </Menu>}>
             <Button type={'link'} onClick={e=>e.preventDefault()}>
               Hi. {user?.name}
             </Button>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </div>
  );
};


const Header = styled(Row)`
padding: 3.2rem;
box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
z-index: 1
`

const HeaderLeft = styled(Row)`
`

const HeaderRight = styled.div`
`

const Main = styled.main`
  height: calc(100vh - 6rem)
`