import React from "react";

interface IconProps {
  className?: string;
}

export const PaywallIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="20" height="20" rx="3" opacity="0.2" />
    <rect x="6" y="6" width="8" height="5" rx="1.5" />
    <rect x="16" y="6" width="6" height="5" rx="1.5" />
    <rect x="6" y="13" width="16" height="3" rx="1" />
    <rect x="6" y="18" width="7" height="4" rx="1.5" />
    <rect x="15" y="18" width="7" height="4" rx="1.5" />
  </svg>
);

export const ExperimentIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4h6v2h-1.5v5.5l5.2 8.5a2 2 0 0 1-1.7 3H9a2 2 0 0 1-1.7-3l5.2-8.5V6H11V4z" />
    <circle cx="13" cy="20" r="1.5" fill="white" />
    <circle cx="16" cy="18" r="1" fill="white" />
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3a11 11 0 1 1 0 22 11 11 0 0 1 0-22zm0 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
  </svg>
);

export const ChartIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="16" width="4" height="8" rx="1" />
    <rect x="10" y="10" width="4" height="14" rx="1" />
    <rect x="16" y="13" width="4" height="11" rx="1" />
    <rect x="22" y="6" width="4" height="18" rx="1" />
    <path d="M3 4v21h23" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export const FunnelIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5a1 1 0 0 1 1-1h18a1 1 0 0 1 .8 1.6L17 14v8a1 1 0 0 1-.55.9l-4 2A1 1 0 0 1 11 24v-10L4.2 5.6A1 1 0 0 1 4 5z" />
  </svg>
);

export const BillingIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="22" height="16" rx="3" />
    <rect x="3" y="10" width="22" height="4" fill="white" opacity="0.3" />
    <rect x="6" y="17" width="6" height="2" rx="1" fill="white" />
  </svg>
);

export const RefundIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3l10 5.5v11L14 25 4 19.5v-11L14 3zm0 3.1L7 9.5v9l7 3.4 7-3.4v-9l-7-3.4z" />
    <path d="M14 10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1.5l-1.2 2.5h2.4L14 11.5z" />
  </svg>
);

export const CustomerIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="9" r="5" />
    <path d="M4 24c0-5.5 4.5-10 10-10s10 4.5 10 10H4z" />
  </svg>
);

export const LtvIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 22L10 14l4 4 8-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M18 6h5v5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const DataIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="8" height="8" rx="2" />
    <rect x="17" y="3" width="8" height="8" rx="2" />
    <rect x="3" y="17" width="8" height="8" rx="2" />
    <rect x="17" y="17" width="8" height="8" rx="2" />
    <rect x="13" y="6" width="4" height="2" rx="0.5" />
    <rect x="6" y="13" width="2" height="4" rx="0.5" />
    <rect x="20" y="13" width="2" height="4" rx="0.5" />
    <rect x="13" y="20" width="4" height="2" rx="0.5" />
  </svg>
);

export const DesignIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.7 4.3a2.5 2.5 0 0 1 3.5 3.5L9.5 22.5 4 24l1.5-5.5L20.7 4.3z" />
    <path d="M18.5 6.5l3 3" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

export const PublishIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 24c-.5-3 0-7 3-11s7-7 13-9c-2 6-5 10-9 13s-8 3.5-11 3l4-4" />
    <circle cx="16" cy="12" r="2" fill="white" />
  </svg>
);

export const AnalyzeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" opacity="0.2" />
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
    <line x1="18" y1="18" x2="24" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <rect x="8" y="14" width="2.5" height="4" rx="0.5" transform="rotate(180 9.25 16)" />
    <rect x="10.75" y="11" width="2.5" height="7" rx="0.5" transform="rotate(180 12 14.5)" />
    <rect x="13.5" y="12.5" width="2.5" height="5.5" rx="0.5" transform="rotate(180 14.75 15.25)" />
  </svg>
);

export const WinnerIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3h12v2.5c0 4-2.5 7.5-6 8.5-3.5-1-6-4.5-6-8.5V3z" />
    <path d="M8 5H5c0 3 1.5 5 3 6v-6zm12 0h3c0 3-1.5 5-3 6V5z" />
    <rect x="12" y="14" width="4" height="4" rx="0.5" />
    <path d="M8 21h12v2H8v-2z" />
    <rect x="10" y="18" width="8" height="3" rx="1" />
  </svg>
);

export const BoltIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3L7 16h6l-1 9 9-13h-6l1-9z" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm-1 2.08A9 9 0 0 0 5 14a9 9 0 0 0 8 8.92V5.08zM15 5.08V13h7.92A9 9 0 0 0 15 5.08zM15 15v7.92A9 9 0 0 0 22.92 15H15z" />
  </svg>
);
