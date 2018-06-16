import React from 'react';
import { Button, List, Card, Icon, Modal, Input } from 'antd'

const confirm = Modal.confirm;

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit_category: null,
            loading: false,
            visible: false,
        }
    }

    /* 编辑分类 */
    editCategory = (item) => {
        this.setState({
            edit_category: item,
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }

    categoryDelete = () => {
        confirm({
            title: '确定删除该分类吗？',
            content: '删除该分类会导致该分类下所有商品需重新分配类别！',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    render() {
        return (
            <div>
                <Button type="primary" icon='plus' style={{ margin: (20, 0, 0, 20) }} onClick={this.editCategory.bind(this, null)}>新增分类</Button>
                <Modal
                    visible={this.state.visible}
                    title={this.state.edit_category === null ? '新增分类' : '编辑分类'}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>返回</Button>,
                        <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                            确定
                        </Button>,
                    ]}
                >
                    <p>分类名称：</p>
                    <Input placeholder='例如：加饭酒'></Input>
                </Modal>
                <List
                    style={{ margin: (0, 20) }}
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 5 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item >
                            <Card title={item.title} actions={[<Icon type="edit" onClick={this.editCategory.bind(this, item)} />, <Icon type="delete" onClick={this.categoryDelete} />]}>共{item.total}件</Card>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

const data = [
    {
        title: '加饭酒',
        total: 5,
    },
    {
        title: '手工冬酿',
        total: 1,
    },
    {
        title: '料酒',
        total: 13,
    },
    {
        title: '花雕',
        total: 16,
    },
    {
        title: '黄酒',
        total: 16,
    },
];

export default Category;