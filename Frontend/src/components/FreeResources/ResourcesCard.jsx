import React, { useState } from 'react';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const ResourcesCard = ({ image, title, description, avatar, actions }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription = description.length > 80 ? description.substring(0, 80) + '...' : description;

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={image} />}
      actions={actions}
    >
      <Meta
        title={title}
        description={
          <>
            {isExpanded ? description : truncatedDescription}
            {description.length > 80 && (
              <span onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>
                {isExpanded ? ' Read Less' : ' Read More'}
              </span>
            )}
          </>
        }
      />
    </Card>
  );
};

export default ResourcesCard;
