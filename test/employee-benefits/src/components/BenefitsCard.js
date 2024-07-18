// src/components/BenefitCard.js
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardBody = styled.div`
  margin-top: 10px;
`;

const BenefitCard = ({ benefit }) => {
  return (
    <Card>
      <CardHeader>
        <h4>{benefit.title}</h4>
        <button>Edit</button>
        <button>Delete</button>
      </CardHeader>
      <CardBody>
        <p>Payment: {benefit.payment}</p>
        <p>Start Date: {benefit.startDate}</p>
        <p>End Date: {benefit.endDate}</p>
        <p>Purpose: {benefit.purpose}</p>
      </CardBody>
    </Card>
  );
};

export default BenefitCard;
