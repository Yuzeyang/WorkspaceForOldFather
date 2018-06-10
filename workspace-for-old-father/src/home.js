import React, { Component } from 'react';
import { Select, Layout, Button, List, Avatar, Spin } from 'antd';
import reqwest from 'reqwest';
import './home.css';

const { Header } = Layout;
const Option = Select.Option;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class Home extends Component {
    state = {
        loading: true,
        loadingMore: false,
        showLoadingMore: true,
        data: [],
    }

    componentDidMount() {
        this.getData((res) => {
          this.setState({
            loading: false,
            data: res.results,
          });
        });
    }

    getData = (callback) => {
        reqwest({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: (res) => {
            callback(res);
          },
        });
    }

    onLoadMore = () => {
        this.setState({
          loadingMore: true,
        });
        this.getData((res) => {
          const data = this.state.data.concat(res.results);
          this.setState({
            data,
            loadingMore: false,
          }, () => {
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
          });
        });
    }
    
    render() {
        const { loading, loadingMore, showLoadingMore, data } = this.state;
        const loadMore = showLoadingMore ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                {loadingMore && <Spin />}
                {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
            </div>
        ) : null;
        return (
            <div>
                <Layout>
                    <Header className="home-title">圣御山酒业管理后台</Header>
                </Layout>
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
                    className="demo-loadmore-list"
                    style={{ margin: (0, 20, 0, 20)}}
                    loading={loading}
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.name.last}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                        <div>content</div>
                    </List.Item>
                    )}
                />
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

export default Home;