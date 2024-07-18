// src/components/BenefitList.js
import React, { useState } from "react";
import styled from "styled-components";
import BenefitCard from "./BenefitsCard";

const Container = styled.div`
  padding: 20px;
`;

const AddButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BenefitList = () => {
  const [benefits, setBenefits] = useState([
    {
      title: "Travel Reimbursement",
      payment: "$1,000.00",
      startDate: "Jun 10th 2024",
      endDate: "Jan 10th 2025",
      purpose: "Business Trip",
    },
    {
      title: "Book and E-Course",
      payment: "$550.00",
      startDate: "Aug 3rd 2024",
      endDate: "Feb 3rd 2025",
      purpose: "Improvement",
    },
    {
      title: "Medical Insurance",
      payment: "$2,500.00",
      startDate: "Sep 5th 2023",
      endDate: "Sep 5th 2027",
      purpose: "Healthcare",
    },
  ]);

  return (
    <Container>
      <AddButton>+ Add New</AddButton>
      {benefits.map((benefit, index) => (
        <BenefitCard key={index} benefit={benefit} />
      ))}
    </Container>
  );
};

export default BenefitList;
