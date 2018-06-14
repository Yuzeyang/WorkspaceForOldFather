import React from 'react';
import { Button } from 'antd'

class Category extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary" icon='plus'>新增分类</Button>       
            </div>
        )
    }
}

export default Category;