// Faqs.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Sample FAQ data
const faqData = [
  { question: 'Financial Information', answer: 'The first installment of fees for the academic year is payable on or before 5th May in respect of all students on roll. The Tuition fees as shown in this Prospectus are payable at the Banks, and the triplicate of the chalan is to be submitted at the Office when coming to collect Text books, the dates for which will be intimated through a circular to the present students.' },
  { question: 'Fee Rules', answer: 'a) The due date for all payments will be the 5th of every month.b) Late fee of Rs 5/- per day (inclusive of holidays) will be levied thereafter.c) If the due date is a public holiday, the next working day will be considered as the due date.d) After the 20th of the month the defaulter’s name will be removed from the rolls of the School and will be allowed to continue only after paying all dues along with a Reactivation fee of Rs 25/- over and above the late fee as detailed above.' },
  { question: 'School Fees', answer: 'Classes XI and XII students shall pay Rs 2000/- per annum towards Lab Fees. This is payable with the first installment of fees. Those seeking first admission to the School have to pay Rs 500/- towards admission fee (non-refundable), with the first installment.Students already on rolls, but joining LKG, Class I and Class XI have to pay Rs 500/- towards admission fee, with the first installment.UKG students have to pay Rs 500/- towards Convocation fee, with the first instalment.' },
  { question: 'Capital Expenditure Fee', answer: 'Parents will pay Rs 15,000/- at the time of first admission towards the capital expenditure of the School. This amount is not refundable, once an admission is made.Please note that the State Government has permitted unaided schools to collect one year’s school fees towards capital expenditure, at the time of first admission. However, taking into account the difficulties of many parents, the amount fixed as CEF is much lower than one year’s school fees.' },
  { question: 'School Food', answer: 'Playschool and KG (Lunch and milk & snack twice daily) – Rs 925/- per month (mandatory for all Playschool and KG children), payable from June 2024 to March 2025 (ten installments only).   Classes I and above (noon meal only) – Rs 800/- per month for day-scholars who use the facility, payable from June 2024 to March 2025 (ten installments only). ' },
  { question: 'School Bus', answer: 'School Bus (VMC) – For those who use the facilityRs 750/- per month for the first 5 kms, and for each additional km or fraction thereof, Rs 75/- per month, payable from June 2024 to March 2025 (ten installments only).' },
  { question: 'Certificate Fee', answer: 'Certificates will be issued only on written request from the parents and required a minimum of one day’s notice. Transfer Certificates will be issued only after clearance of all dues to the School. Fees payable are as follows: Transfer Certificate………………………..Rs 100/- Conduct Certificate…………………………Rs 50/- Bonafide/Fee Certificate …………………..Rs 30/-' },
  { question: 'Hostel Fee and Rule', answer: 'a)  First installment is to be paid on admission/readmission day in May and second to tenth installments are to be paid on the 5th of each month beginning July. If the due date is a public holiday, the next working day will be considered as the due date. b)  Late fee of Rs 5/- per day (inclusive of holidays) will be charged thereafter.' },
  { question: 'School Food & Establishment Charges', answer: 'Monthly fees (July 2024 to March 2025) payable by 5th of every month. Payment for June is payable at the time of admission.' },
  { question: 'School Development Fund', answer: 'A School like LRIS needs large sums of money for its developments. The fee collected is not sufficient even to meet the recurring expenditure. Yet no capitation fee is collected. Hence parents who can afford are encouraged to contribute to the School Development Fund. It should, however, be noted that the admission of the child is in no way connected with the above. Further, a parent who helps the School in any manner mentioned above shall not expect any special favour.' },
];

const FaqContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #fff;
`;

const FaqItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin: 10px 0;
  padding: 15px;
  cursor: pointer;
  background-color: #f9f9f9;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #003057;
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ToggleIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #003057;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Answer = styled.div`
  padding-top: 10px;
  padding-left: 30px;
  color: #666;
`;

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FaqContainer>
        <Heading>FAQs</Heading>
      {faqData.map((faq, index) => (
        <FaqItem key={index} onClick={() => toggleFaq(index)}>
          <Question>
            <ToggleIcon>{activeIndex === index ? '-' : '+'}</ToggleIcon>
            <span>{faq.question}</span>
          </Question>
          {activeIndex === index && <Answer>{faq.answer}</Answer>}
        </FaqItem>
      ))}
    </FaqContainer>
  );
};

export default Faqs;
