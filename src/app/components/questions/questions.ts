import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  imports: [CommonModule],
  templateUrl: './questions.html',
  styleUrl: './questions.css'
})
export class Questions {
faqs = [
    {
      question: 'What is Ethly Finance?',
      answer: 'Ethly Finance is a platform that enables users to transact seamlessly and securely in the crypto ecosystem.',
      open: false
    },
    {
      question: 'What are the fees?',
      answer: `Ethly Finance aims to provide a seamless and efficient platform for cryptocurrency transactions, with a transparent fee structure designed to support the network and provide value to users.
      
When conducting transactions, users will encounter network fees, which are small charges paid to miners or validators who process and confirm transactions on the blockchain. These fees vary based on network congestion and transaction complexity. Additionally, Ethly Finance may implement platform fees to facilitate transactions, ensuring smooth and secure operations.`,
      open: true
    },
    {
      question: 'How can I leverage my yield?',
      answer: 'You can leverage your yield by depositing collaterals, minting pETH, redeeming it, and repeating the cycle to maximize gains.',
      open: false
    },
    {
      question: 'What are the utilities of pETH?',
      answer: 'pETH can be used for staking, yield farming, and collateral within the Ethly ecosystem.',
      open: false
    }
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
