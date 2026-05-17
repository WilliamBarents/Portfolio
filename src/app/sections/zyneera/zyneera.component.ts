import { Component } from '@angular/core';

interface Stage {
  number: number;
  title: string;
  status: 'complete' | 'active' | 'pending';
  statusLabel: string;
  description: string;
}

@Component({
  selector: 'app-zyneera',
  templateUrl: './zyneera.component.html',
  styleUrls: ['./zyneera.component.scss']
})
export class ZyneeraComponent {
  workflowSteps = [
    'Event Creation',
    'Sourcing',
    'Quoting',
    'Invoicing',
    'Payment',
    'Execution',
    'Reviews'
  ];

  stages: Stage[] = [
    {
      number: 1,
      title: 'Concept & Architecture',
      status: 'complete',
      statusLabel: 'Complete',
      description: 'Defining the two-sided marketplace model, data architecture, user types, and core procurement workflow. Setting up Firebase, TypeScript, and Cloud Functions infrastructure.'
    },
    {
      number: 2,
      title: 'Core Workflow Build',
      status: 'complete',
      statusLabel: 'Complete',
      description: 'Building the end-to-end procurement loop: event creation, interest and bidding, quoting, awarding, invoicing, proof of payment, execution tracking, and reviews.'
    },
    {
      number: 3,
      title: 'Platform Hardening',
      status: 'complete',
      statusLabel: 'Complete',
      description: 'Security auditing (ownership checks, input validation, auth gates), subscription enforcement, idempotent retry handling, audit logging, and structured error handling.'
    },
    {
      number: 4,
      title: 'Operational Features',
      status: 'complete',
      statusLabel: 'Complete',
      description: 'Team management, email notification system with user preferences, in-app messaging, vendor opportunity feed, and support ticketing.'
    },
    {
      number: 5,
      title: 'Frontend Integration',
      status: 'active',
      statusLabel: 'In Progress',
      description: 'React frontend connecting to the backend function by function. Messaging UI, notification preference settings, and opportunity badge tracking are the active integration points.'
    },
    {
      number: 6,
      title: 'Alpha / Internal Testing',
      status: 'pending',
      statusLabel: 'Upcoming',
      description: 'End-to-end testing with real planner and vendor accounts, catching workflow gaps, UI/UX polish, and validating the subscription model.'
    },
    {
      number: 7,
      title: 'Beta Launch',
      status: 'pending',
      statusLabel: 'Upcoming',
      description: 'Onboarding a controlled set of real planners and vendors, monitoring performance, gathering feedback, and iterating on the product.'
    },
    {
      number: 8,
      title: 'Production & Growth',
      status: 'pending',
      statusLabel: 'Upcoming',
      description: 'Public availability, Stripe payment processing, marketing, and scaling infrastructure as user volume grows.'
    }
  ];
}
