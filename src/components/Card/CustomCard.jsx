import React from 'react';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const CustomCard = ({ image, title, description, avatar, actions }) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={image}
      />
    }
    actions={actions}
  >
    <Meta
      title={title}
      description={description}
    />
  </Card>
);
export default CustomCard;