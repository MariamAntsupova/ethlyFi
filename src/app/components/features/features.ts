import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports:[CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class Features {
  currentIndex = 0;

  features = [
    {
      title: 'ETH-Pegged',
      desc: 'Each pETH is backed by LST/LRT and is 1:1 hard pegged to ETH.',
      icon: '💰'
    },
    {
      title: 'Low Risk',
      desc: 'Both the collateral and loan track ETH prices, reducing liquidation risk.',
      icon: '⚠️'
    },
    {
      title: '11x Yield',
      desc: 'pETH’s 110% collateral ratio allows users to leverage their LST/LRT yield up to 11x.',
      icon: '📈'
    },
    {
      title: 'Future Ready',
      desc: 'Built on aggregated chains for ultra-scalable finance.',
      icon: '🚀'
    }
  ];

  getVisibleFeatures(): any[] {
    const screenWidth = window.innerWidth;
    const visibleCount = screenWidth <= 700 ? 1 : 3;

    return this.features.slice(this.currentIndex, this.currentIndex + visibleCount);
  }

  next(): void {
    const screenWidth = window.innerWidth;
    const visibleCount = screenWidth <= 700 ? 1 : 3;

    if (this.currentIndex + visibleCount < this.features.length) {
      this.currentIndex++;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
