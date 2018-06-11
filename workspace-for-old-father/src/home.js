import React, { Component } from 'react';
import { Select, Layout, Button, List, Avatar, Spin, Menu, Icon, Pagination, Row } from 'antd';
import './home.css';

const { Header, Sider, Content } = Layout;
const Option = Select.Option;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: all_data
        };
    }
	
	selectChange = (value) => {
        if (value == 0) {
			var data = all_data
		} else {
			var data = all_data.filter( item => {
					console.log(item);
					return item.category.includes(value);
				}
			);
		}
		this.setState({
			data: data
		});
	}

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
                        <Select defaultValue="全部" style={{ width: 120, margin: (20, 0, 0, 20)}} onChange={this.selectChange}>
                        <Option value="0">全部</Option>
                        <Option value="1">加饭酒</Option>
                        <Option value="2">手工冬酿</Option>
                        <Option value="3">料酒</Option>
                        <Option value="4">花雕</Option>
                        <Option value="5">黄酒</Option>
                        </Select>
                        <Button type="primary" icon='upload' onClick={uploadClick}>上传图片</Button>
                        <List
                            itemLayout="horizontal"
                            style={{ margin: (0, 20, 0, 20)}}
                            pagination={{showQuickJumper:true}}
                            dataSource={this.state.data}
                            renderItem={item => (
                            <List.Item actions={[<a>编辑</a>, <a>删除</a>]}>
                                <List.Item.Meta
                                avatar={<Avatar src={item.cover[0]} />}
                                title={<span>{item.title}</span>}
                                description={<span>规格：{item.specification}，价格：￥{item.price}</span>}
                                />
                            </List.Item>
                            )}
                        />
                    </Content>
                </Layout>
            </div>
        )
    }
}

/* event */
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

/* 测试 */
var all_data = [
	/**
	 * 加饭酒
	 */
	{
		"title": "五年加饭酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/05%E4%BA%94%E5%B9%B4%E5%8A%A0%E9%A5%AD%E9%85%92.JPG"
		],
		"category": [
			"1",
		],
		"specification": "2.5L*6桶",
		"price": "48.00",
		"tag": "05"
	},
	{
		"title": "陈年加饭酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/26%E9%99%88%E5%B9%B4%E5%8A%A0%E9%A5%AD%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/26%E9%99%88%E5%B9%B4%E5%8A%A0%E9%A5%AD%E9%85%92%E7%93%B6.JPG"
		],
		"category": [
			"1",
		],
		"specification": "600ML*20瓶",
		"price": "48.00",
		"tag": "26"
	},
	{
		"title": "五年加饭酒（古法酿造）",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/27%E4%BA%94%E5%B9%B4%E5%8A%A0%E9%A5%AD%E9%85%92%EF%BC%88%E5%8F%A4%E6%B3%95%E9%85%BF%E9%80%A0%EF%BC%89.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/27%E4%BA%94%E5%B9%B4%E5%8A%A0%E9%A5%AD%E9%85%92%EF%BC%88%E5%8F%A4%E6%B3%95%E9%85%BF%E9%80%A0%EF%BC%89%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/27%E4%BA%94%E5%B9%B4%E5%8A%A0%E9%A5%AD%E9%85%92%EF%BC%88%E5%8F%A4%E6%B3%95%E9%85%BF%E9%80%A0%EF%BC%89%E7%BA%B8%E7%AE%B1.JPG"
		],
		"category": [
			"1",
		],
		"specification": "500ML*12瓶",
		"price": "50.00",
		"tag": "27"
	},
	{
		"title": "三年特加饭酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/30%E4%B8%89%E5%B9%B4%E7%89%B9%E5%8A%A0%E9%A5%AD%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/30%E4%B8%89%E5%B9%B4%E7%89%B9%E5%8A%A0%E9%A5%AD%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/30%E4%B8%89%E5%B9%B4%E7%89%B9%E5%8A%A0%E9%A5%AD%E9%85%92%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"1",
		],
		"specification": "500ML*12瓶",
		"price": "32.00",
		"tag": "30"
	},
	{
		"title": "加饭酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/33%E5%8A%A0%E9%A5%AD%E9%85%92.JPG"
		],
		"category": [
			"1",
		],
		"specification": "500ML*12瓶",
		"price": "30.00",
		"tag": "33"
	},
	/**
	 * 手工冬酿
	 */
	{
		"title": "手工冬酿6年陈",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/38%E6%89%8B%E5%B7%A5%E5%86%AC%E9%85%BF6%E5%B9%B4%E9%99%88.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/38%E6%89%8B%E5%B7%A5%E5%86%AC%E9%85%BF6%E5%B9%B4%E9%99%88%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/38%E6%89%8B%E5%B7%A5%E5%86%AC%E9%85%BF6%E5%B9%B4%E9%99%88%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"2",
		],
		"specification": "500ML*12瓶",
		"price": "32.00",
		"tag": "38"
	},
	/**
	 * 料酒
	 */
	{
		"title": "三年陈绍兴料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/16%E4%B8%89%E5%B9%B4%E9%99%88%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/16%E4%B8%89%E5%B9%B4%E9%99%88%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/16%E4%B8%89%E5%B9%B4%E9%99%88%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"3",
		],
		"specification": "5L*4桶",
		"price": "46.00",
		"tag": "16"
	},
	{
		"title": "绍兴料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/18%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92.JPG"
		],
		"category": [
			"3",
		],
		"specification": "5L*4桶",
		"price": "48.00",
		"tag": "18"
	},
	{
		"title": "绍兴料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/20%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92.JPG"
		],
		"category": [
			"3",
		],
		"specification": "2.5L*6桶",
		"price": "37.00",
		"tag": "20"
	},
	{
		"title": "绍兴料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/21%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/21%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/21%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92%E7%BA%B8%E7%AE%B1.JPG"
		],
		"category": [
			"3",
		],
		"specification": "1.75L*6桶",
		"price": "40.00",
		"tag": "21"
	},
	{
		"title": "绍兴料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/23%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92.JPG"
		],
		"category": [
			"3",
		],
		"specification": "2.5L*6桶",
		"price": "42.00",
		"tag": "23"
	},
	{
		"title": "绍兴料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/24%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92.JPG"
		],
		"category": [
			"3",
		],
		"specification": "5L*4桶",
		"price": "46.00",
		"tag": "24"
	},
	{
		"title": "经典料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/40%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92.JPG"
		],
		"category": [
			"3",
		],
		"specification": "500ML*12瓶",
		"price": "33.00",
		"tag": "40"
	},
	{
		"title": "经典料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/42%E7%BB%8F%E5%85%B8%E6%96%99%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/42%E7%BB%8F%E5%85%B8%E6%96%99%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/42%E7%BB%8F%E5%85%B8%E6%96%99%E9%85%92%E7%BA%B8%E7%AE%B1.jpg",
		],
		"category": [
			"3",
		],
		"specification": "500ML*12瓶",
		"price": "33.00",
		"tag": "42"
	},
	{
		"title": "料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/44%E6%96%99%E9%85%92.JPG"
		],
		"category": [
			"3",
		],
		"specification": "500ML*12瓶",
		"price": "28.00",
		"tag": "44"
	},
	{
		"title": "绍兴料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/45%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92.JPG"
		],
		"category": [
			"3",
		],
		"specification": "500ML*12瓶",
		"price": "29.00",
		"tag": "45"
	},
	{
		"title": "绍兴料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/48%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92.JPG"
		],
		"category": [
			"3",
		],
		"specification": "500ML*12瓶",
		"price": "30.00",
		"tag": "48"
	},
	{
		"title": "葱姜料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/49%E8%91%B1%E5%A7%9C%E6%96%99%E9%85%92.JPG"
		],
		"category": [
			"3",
		],
		"specification": "500ML*12瓶",
		"price": "30.00",
		"tag": "49"
	},
	{
		"title": "绍兴料酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/51%E7%BB%8D%E5%85%B4%E6%96%99%E9%85%92.JPG"
		],
		"category": [
			"3",
		],
		"specification": "500ML*12瓶",
		"price": "34.00",
		"tag": "51"
	},
	/**
	 * 花雕
	 */
	{
		"title": "国标八年冬酿花雕",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/03%E5%9B%BD%E6%A0%87%E5%85%AB%E5%B9%B4%E5%86%AC%E9%85%BF%E8%8A%B1%E9%9B%95.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/03%E5%9B%BD%E6%A0%87%E5%85%AB%E5%B9%B4%E5%86%AC%E9%85%BF%E8%8A%B1%E9%9B%95%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/03%E5%9B%BD%E6%A0%87%E5%85%AB%E5%B9%B4%E5%86%AC%E9%85%BF%E8%8A%B1%E9%9B%95%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"4",
		],
		"specification": "5L*4桶",
		"price": "56.00",
		"tag": "03"
	},
	{
		"title": "五年手工花雕",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/06%E4%BA%94%E5%B9%B4%E6%89%8B%E5%B7%A5%E8%8A%B1%E9%9B%95.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/06%E4%BA%94%E5%B9%B4%E6%89%8B%E5%B7%A5%E8%8A%B1%E9%9B%95%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/06%E4%BA%94%E5%B9%B4%E6%89%8B%E5%B7%A5%E8%8A%B1%E9%9B%95%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"4",
		],
		"specification": "2.5L*6桶",
		"price": "48.00",
		"tag": "06"
	},
	{
		"title": "五年陈花雕酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/07%E4%BA%94%E5%B9%B4%E9%99%88%E8%8A%B1%E9%9B%95%E9%85%92.JPG"
		],
		"category": [
			"4",
		],
		"specification": "3.785L*4桶",
		"price": "52.00",
		"tag": "07"
	},
	{
		"title": "花雕王",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/08%E8%8A%B1%E9%9B%95%E7%8E%8B.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/08%E8%8A%B1%E9%9B%95%E7%8E%8B%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/08%E8%8A%B1%E9%9B%95%E7%8E%8B%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"4",
		],
		"specification": "2.5L*6桶",
		"price": "56.00",
		"tag": "08"
	},
	{
		"title": "三年陈花雕",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/09%E4%B8%89%E5%B9%B4%E9%99%88%E8%8A%B1%E9%9B%95.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/09%E4%B8%89%E5%B9%B4%E9%99%88%E8%8A%B1%E9%9B%95%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/09%E4%B8%89%E5%B9%B4%E9%99%88%E8%8A%B1%E9%9B%95%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"4",
		],
		"specification": "5L*4桶",
		"price": "52.00",
		"tag": "09"
	},
	{
		"title": "五年陈坛装花雕",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/10%E4%BA%94%E5%B9%B4%E9%99%88%E5%9D%9B%E8%A3%85%E8%8A%B1%E9%9B%95.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/10%E4%BA%94%E5%B9%B4%E9%99%88%E5%9D%9B%E8%A3%85%E8%8A%B1%E9%9B%95%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/10%E4%BA%94%E5%B9%B4%E9%99%88%E5%9D%9B%E8%A3%85%E8%8A%B1%E9%9B%95%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"4",
		],
		"specification": "1.5L*6坛",
		"price": "65.00",
		"tag": "10"
	},
	{
		"title": "八年坛装花雕酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/11%E5%85%AB%E5%B9%B4%E5%9D%9B%E8%A3%85%E8%8A%B1%E9%9B%95%E9%85%92.JPG"
		],
		"category": [
			"4",
		],
		"specification": "500ML*6坛",
		"price": "88.00",
		"tag": "11"
	},
	{
		"title": "十年坛装花雕酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/12%E5%8D%81%E5%B9%B4%E5%9D%9B%E8%A3%85%E8%8A%B1%E9%9B%95%E9%85%92.JPG"
		],
		"category": [
			"4",
		],
		"specification": "5L",
		"price": "32.00",
		"tag": "12"
	},
	{
		"title": "陈三年花雕",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/13%E9%99%88%E4%B8%89%E5%B9%B4%E8%8A%B1%E9%9B%95.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/13%E9%99%88%E4%B8%89%E5%B9%B4%E8%8A%B1%E9%9B%95%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/13%E9%99%88%E4%B8%89%E5%B9%B4%E8%8A%B1%E9%9B%95%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"4",
		],
		"specification": "2.5L*6桶",
		"price": "38.00",
		"tag": "13"
	},
	{
		"title": "陈年花雕酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/25%E9%99%88%E5%B9%B4%E8%8A%B1%E9%9B%95%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/25%E9%99%88%E5%B9%B4%E8%8A%B1%E9%9B%95%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/25%E9%99%88%E5%B9%B4%E8%8A%B1%E9%9B%95%E9%85%92%E7%BA%B8%E7%AE%B1.JPG"
		],
		"category": [
			"4",
		],
		"specification": "600ML*20瓶",
		"price": "48.00",
		"tag": "25"
	},
	{
		"title": "五年花雕酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/28%E4%BA%94%E5%B9%B4%E8%8A%B1%E9%9B%95%E9%85%92.JPG"
		],
		"category": [
			"4",
		],
		"specification": "500ML*12瓶",
		"price": "50.00",
		"tag": "28"
	},
	{
		"title": "小花雕酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/29%E5%B0%8F%E8%8A%B1%E9%9B%95%E9%85%92.JPG"
		],
		"category": [
			"4",
		],
		"specification": "500ML*12瓶",
		"price": "30.00",
		"tag": "29"
	},
	{
		"title": "三年特花雕",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/31%E4%B8%89%E5%B9%B4%E7%89%B9%E8%8A%B1%E9%9B%95.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/31%E4%B8%89%E5%B9%B4%E7%89%B9%E8%8A%B1%E9%9B%95%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/31%E4%B8%89%E5%B9%B4%E7%89%B9%E8%8A%B1%E9%9B%95%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"4",
		],
		"specification": "500ML*12瓶",
		"price": "32.00",
		"tag": "31"
	},
	{
		"title": "花雕酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/32%E8%8A%B1%E9%9B%95%E9%85%92.JPG"
		],
		"category": [
			"4",
		],
		"specification": "500ML*20瓶",
		"price": "46.00",
		"tag": "32"
	},
	{
		"title": "三年花雕酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/36%E4%B8%89%E5%B9%B4%E8%8A%B1%E9%9B%95%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/36%E4%B8%89%E5%B9%B4%E8%8A%B1%E9%9B%95%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/36%E4%B8%89%E5%B9%B4%E8%8A%B1%E9%9B%95%E9%85%92%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"4",
		],
		"specification": "500ML*12瓶",
		"price": "40.00",
		"tag": "36"
	},
	{
		"title": "五年装花雕",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/37%E4%BA%94%E5%B9%B4%E8%A3%85%E8%8A%B1%E9%9B%95.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/37%E4%BA%94%E5%B9%B4%E8%A3%85%E8%8A%B1%E9%9B%95%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/37%E4%BA%94%E5%B9%B4%E8%A3%85%E8%8A%B1%E9%9B%95%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"4",
		],
		"specification": "500ML*12瓶",
		"price": "50.00",
		"tag": "37"
	},
	/**
	 * 黄酒
	 */
	{
		"title": "八年陈黑糯米酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/01%E5%85%AB%E5%B9%B4%E9%99%88%E9%BB%91%E7%B3%AF%E7%B1%B3%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/01%E5%85%AB%E5%B9%B4%E9%99%88%E9%BB%91%E7%B3%AF%E7%B1%B3%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/01%E5%85%AB%E5%B9%B4%E9%99%88%E9%BB%91%E7%B3%AF%E7%B1%B3%E9%85%92%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"5",
		],
		"specification": "5L*4桶",
		"price": "58.00",
		"tag": "01"
	},
	{
		"title": "八年陈酿上海老酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/02%E5%85%AB%E5%B9%B4%E9%99%88%E9%85%BF%E4%B8%8A%E6%B5%B7%E8%80%81%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/02%E5%85%AB%E5%B9%B4%E9%99%88%E9%85%BF%E4%B8%8A%E6%B5%B7%E8%80%81%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/02%E5%85%AB%E5%B9%B4%E9%99%88%E9%85%BF%E4%B8%8A%E6%B5%B7%E8%80%81%E9%85%92%E7%BA%B8%E7%AE%B1.JPG"
		],
		"category": [
			"5",
		],
		"specification": "5L*4桶",
		"price": "56.00",
		"tag": "02"
	},
	{
		"title": "五年上海老酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/04%E4%BA%94%E5%B9%B4%E4%B8%8A%E6%B5%B7%E8%80%81%E9%85%92.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/04%E4%BA%94%E5%B9%B4%E4%B8%8A%E6%B5%B7%E8%80%81%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/04%E4%BA%94%E5%B9%B4%E4%B8%8A%E6%B5%B7%E8%80%81%E9%85%92%E7%BA%B8%E7%AE%B1.JPG"
		],
		"category": [
			"5",
		],
		"specification": "2.5L*6桶",
		"price": "48.00",
		"tag": "04"
	},
	{
		"title": "糯米老酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/14%E7%B3%AF%E7%B1%B3%E8%80%81%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/14%E7%B3%AF%E7%B1%B3%E8%80%81%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/14%E7%B3%AF%E7%B1%B3%E8%80%81%E9%85%92%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"5",
		],
		"specification": "2.5L*6桶",
		"price": "38.00",
		"tag": "14"
	},
	{
		"title": "三年陈黄酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/15%E4%B8%89%E5%B9%B4%E9%99%88%E9%BB%84%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/15%E4%B8%89%E5%B9%B4%E9%99%88%E9%BB%84%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/15%E4%B8%89%E5%B9%B4%E9%99%88%E9%BB%84%E9%85%92%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"5",
		],
		"specification": "5L*4桶",
		"price": "48.00",
		"tag": "15"
	},
	{
		"title": "陈年黄酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/17%E9%99%88%E5%B9%B4%E9%BB%84%E9%85%92.JPG"
		],
		"category": [
			"5",
		],
		"specification": "5L*4桶",
		"price": "52.00",
		"tag": "17"
	},
	{
		"title": "陈年黄酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/19%E9%99%88%E5%B9%B4%E9%BB%84%E9%85%92.JPG"
		],
		"category": [
			"5",
		],
		"specification": "2.5L*6桶",
		"price": "38.00",
		"tag": "19"
	},
	{
		"title": "陈年黄酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/22%E9%99%88%E5%B9%B4%E9%BB%84%E9%85%92.JPG"
		],
		"category": [
			"5",
		],
		"specification": "2.5L*6桶瓶",
		"price": "44.00",
		"tag": "22"
	},
	{
		"title": "五年经典老酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/34%E4%BA%94%E5%B9%B4%E7%BB%8F%E5%85%B8%E8%80%81%E9%85%92.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/34%E4%BA%94%E5%B9%B4%E7%BB%8F%E5%85%B8%E8%80%81%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/34%E4%BA%94%E5%B9%B4%E7%BB%8F%E5%85%B8%E8%80%81%E9%85%92%E7%BA%B8%E7%AE%B1.JPG"
		],
		"category": [
			"5",
		],
		"specification": "500ML*12瓶",
		"price": "55.00",
		"tag": "34"
	},
	{
		"title": "圣御壹号（清爽型黄酒）",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/35%E5%9C%A3%E5%BE%A1%E5%A3%B9%E5%8F%B7%EF%BC%88%E6%B8%85%E7%88%BD%E5%9E%8B%E9%BB%84%E9%85%92%EF%BC%89.JPG"
		],
		"category": [
			"5",
		],
		"specification": "500ML*12瓶",
		"price": "65.00",
		"tag": "35"
	},
	{
		"title": "绍兴陈年黄酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/39%E7%BB%8D%E5%85%B4%E9%99%88%E5%B9%B4%E9%BB%84%E9%85%92.JPG"
		],
		"category": [
			"5",
		],
		"specification": "500ML*20瓶",
		"price": "40.00",
		"tag": "39"
	},
	{
		"title": "三年陈酿经典黄酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/41%E4%B8%89%E5%B9%B4%E9%99%88%E9%85%BF%E7%BB%8F%E5%85%B8%E9%BB%84%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/41%E4%B8%89%E5%B9%B4%E9%99%88%E9%85%BF%E7%BB%8F%E5%85%B8%E9%BB%84%E9%85%92%E7%93%B6.JPG",
			"http://7xt7s8.com2.z0.glb.clouddn.com/41%E4%B8%89%E5%B9%B4%E9%99%88%E9%85%BF%E7%BB%8F%E5%85%B8%E9%BB%84%E9%85%92%E7%BA%B8%E7%AE%B1.jpg"
		],
		"category": [
			"5",
		],
		"specification": "500ML*12瓶",
		"price": "35.00",
		"tag": "41"
	},
	{
		"title": "黄酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/43%E9%BB%84%E9%85%92.jpg",
			"http://7xt7s8.com2.z0.glb.clouddn.com/43%E9%BB%84%E9%85%92%E7%93%B6.JPG"
		],
		"category": [
			"5",
		],
		"specification": "500ML*12瓶",
		"price": "29.00",
		"tag": "43"
	},
	{
		"title": "黄酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/46%E9%BB%84%E9%85%92.JPG"
		],
		"category": [
			"5",
		],
		"specification": "500ML*20瓶",
		"price": "42.00",
		"tag": "46"
	},
	{
		"title": "金标黄酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/47%E9%87%91%E6%A0%87%E9%BB%84%E9%85%92.JPG"
		],
		"category": [
			"5",
		],
		"specification": "500ML*12瓶",
		"price": "32.00",
		"tag": "47"
	},
	{
		"title": "金标黄酒",
		"cover": [
			"http://7xt7s8.com2.z0.glb.clouddn.com/50%E9%87%91%E6%A0%87%E9%BB%84%E9%85%92.JPG"
		],
		"category": [
			"5",
		],
		"specification": "500ML*12瓶",
		"price": "35.00",
		"tag": "50"
	},
];

export default Home;