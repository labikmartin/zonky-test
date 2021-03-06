export interface Loan {
  id: number;
  url: string;
  name: string;
  story: string;
  purpose: string;
  photos: Array<{ [key: string]: string }>;
  nickName: string;
  termInMonths: number;
  interestRate: number;
  revenueRate: number;
  annuityWithInsurance: number;
  rating: string;
  topped: boolean;
  amount: number;
  currency: string;
  remainingInvestment: string;
  reservedAmount: string;
  investmentRate: number;
  covered: boolean;
  datePublished: string;
  published: boolean;
  deadline: string;
  investmentsCount: number;
  questionsCount: number;
  region: string;
  mainIncomeType: string;
  insuranceActive: boolean;
  insuranceHistory: string[];
}
