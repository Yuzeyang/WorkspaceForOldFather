import React, { Component } from 'react';
import {  Layout, Menu, Icon } from 'antd';
import './home.css';
import Goods from './goods'
import Category from './category'
import Marketing from './marketing'

const { Header, Sider, Content } = Layout;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuSelect: '2'
		}
	}
	
	menuSelect = (item) => {
		this.setState({
			menuSelect: item.key
		})
	}

    render() {
		return (
            <div>
                <Layout>
                    <Header className="home-title">圣御山酒业管理后台</Header>
                </Layout>
                <Layout style={{height:"100vh"}}>
                    <Sider>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.menuSelect]} onSelect={this.menuSelect}
                        style={{ marginTop: 20 }}>
                            <Menu.Item key="1">
                            <Icon type="shop" />
                            <span className="nav-text">商品编辑</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                            <Icon type="profile" />
                            <span className="nav-text">分类管理</span>
							</Menu.Item>
							<Menu.Item key="3">
                            <Icon type="tags" />
                            <span className="nav-text">营销区管理</span>
                            </Menu.Item>
                        </Menu>    
                    </Sider> 
					<Content>
					{
						this.state.menuSelect === '1' && <Goods />
					}
					{
						this.state.menuSelect === '2' && <Category />
					}
					{
						this.state.menuSelect === '3' && <Marketing />
					}
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Home;