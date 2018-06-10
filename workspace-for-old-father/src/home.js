import React, { Component } from 'react';
import { Select, Layout, Button, List, Avatar, Spin, Menu, Icon, Pagination, Row } from 'antd';
import './home.css';

const { Header, Sider, Content } = Layout;
const Option = Select.Option;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

const data = [

    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

class Home extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header className="home-title">圣御山酒业管理后台</Header>
                </Layout>
                <Layout style={{height:"100vh"}}>
                    <Sider>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={itemClick} onSelect={menuSelect}
                        style={{ marginTop: 20 }}>
                            <Menu.Item key="1">
                            <Icon type="shop" />
                            <span className="nav-text">商品编辑</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                            <Icon type="profile" />
                            <span className="nav-text">分类管理</span>
                            </Menu.Item>
                        </Menu>    
                    </Sider> 
                    <Content>
                        <Select defaultValue="全部" style={{ width: 120, margin: (20, 0, 0, 20)}} onChange={handleChange}>
                        <Option value="全部">全部</Option>
                        <Option value="加饭酒">加饭酒</Option>
                        <Option value="手工冬酿">手工冬酿</Option>
                        <Option value="料酒">料酒</Option>
                        <Option value="花雕">花雕</Option>
                        <Option value="黄酒">黄酒</Option>
                        </Select>
                        <Button type="primary" icon='upload' onClick={uploadClick}>上传图片</Button>
                        <List
                            itemLayout="horizontal"
                            style={{ margin: (0, 20, 0, 20)}}
                            dataSource={data}
                            renderItem={item => (
                            <List.Item actions={[<a>编辑</a>, <a>删除</a>]}>
                                <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                            )}
                        />
                        <Row type="flex" justify="end">
                            <Pagination showQuickJumper defaultCurrent={1} total={12} onChange={onChange} hideOnSinglePage 
                            style={{ marginBottom:20}} /> 
                        </Row>
                    </Content>
                </Layout>
            </div>
        )
    }
}

/* event */
function handleChange(value) {
    console.log(`selected ${value}`);
}

function uploadClick(value) {
    console.log('点击了上传');
}

function itemClick(item, key, keyPath) {
    console.log(`item ${item} key ${key} keyPath ${keyPath}`);
}

function menuSelect(item, key, selectedKeys ) {
    console.log(`item ${item} key ${key} selectedKeys ${selectedKeys}`);
}

function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }

export default Home;