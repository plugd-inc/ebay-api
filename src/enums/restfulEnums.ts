export enum UserRoleFilter {
  BUYER = 'BUYER',
  SELLER = 'SELLER'
}

export enum InquirySearchFieldGroup {
  DEFAULT = 'DEFAULT',
  SUMMARY = 'SUMMARY'
}

export enum CaseStatusFilter {
  CLOSED = 'CLOSED',
  CS_CLOSED = 'CS_CLOSED',
  ON_HOLD = 'ON_HOLD',
  OPEN = 'OPEN',
  OTHER = 'OTHER',
  REFUND_AGREED_BUT_FAILED = 'REFUND_AGREED_BUT_FAILED',
  WAITING_CS = 'WAITING_CS',
  WAITING_DELIVERY = 'WAITING_DELIVERY'
}

export enum CaseSearchFieldGroup {
  DEFAULT = 'DEFAULT',
  SUMMARY = 'SUMMARY'
}

export enum InquiryStatusFilter {
  CLOSED = 'CLOSED',
  CLOSED_WITH_ESCALATION = 'CLOSED_WITH_ESCALATION',
  CS_CLOSED = 'CS_CLOSED',
  OPEN = 'OPEN',
  OTHER = 'OTHER',
  PENDING = 'PENDING',
  WAITING_BUYER_RESPONSE = 'WAITING_BUYER_RESPONSE',
  WAITING_SELLER_RESPONSE = 'WAITING_SELLER_RESPONSE'
}

export enum ShippingCarrier {
  AUSTRALIA_POST = 'AUSTRALIA_POST',
  BARTOLINI = 'BARTOLINI',
  CANADA_POST = 'CANADA_POST',
  COLISSIMO = 'COLISSIMO',
  COLLECT_PLUS = 'COLLECT_PLUS',
  CORREOS = 'CORREOS',
  DEUTSCHE_POST = 'DEUTSCHE_POST',
  DHL = 'DHL',
  FEDEX = 'FEDEX',
  HERMES = 'HERMES',
  LA_POSTE = 'LA_POSTE',
  MONDIAL_RELAY = 'MONDIAL_RELAY',
  MRW = 'MRW',
  NEXIVE = 'NEXIVE',
  OTHER = 'OTHER',
  PARCEL_FORCE = 'PARCEL_FORCE',
  POSTE = 'POSTE',
  ROYAL_MAIL = 'ROYAL_MAIL',
  SEUR = 'SEUR',
  UNKNOWN = 'UNKNOWN',
  UPS = 'UPS',
  USPS = 'USPS'
}

export enum ReturnReason {
  ARRIVED_DAMAGED = 'ARRIVED_DAMAGED',
  ARRIVED_LATE = 'ARRIVED_LATE',
  BUYER_CANCEL_ORDER = 'BUYER_CANCEL_ORDER',
  BUYER_NO_SHOW = 'BUYER_NO_SHOW',
  BUYER_NOT_SCHEDULED = 'BUYER_NOT_SCHEDULED',
  BUYER_REFUSED_TO_PICKUP = 'BUYER_REFUSED_TO_PICKUP',
  DEFECTIVE_ITEM = 'DEFECTIVE_ITEM',
  DIFFERENT_FROM_LISTING = 'DIFFERENT_FROM_LISTING',
  EXPIRED_ITEM = 'EXPIRED_ITEM',
  FAKE_OR_COUNTERFEIT = 'FAKE_OR_COUNTERFEIT',
  FOUND_BETTER_PRICE = 'FOUND_BETTER_PRICE',
  IN_STORE_RETURN = 'IN_STORE_RETURN',
  MISSING_PARTS = 'MISSING_PARTS',
  NO_LONGER_NEED_ITEM = 'NO_LONGER_NEED_ITEM',
  NO_REASON = 'NO_REASON',
  NOT_AS_DESCRIBED = 'NOT_AS_DESCRIBED',
  ORDERED_ACCIDENTALLY = 'ORDERED_ACCIDENTALLY',
  ORDERED_DIFFERENT_ITEM = 'ORDERED_DIFFERENT_ITEM',
  ORDERED_WRONG_ITEM = 'ORDERED_WRONG_ITEM',
  OTHER = 'OTHER',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  RETURNING_GIFT = 'RETURNING_GIFT',
  VALET_DELIVERY_ISSUES = 'VALET_DELIVERY_ISSUES',
  VALET_UNAVAILABLE = 'VALET_UNAVAILABLE',
  WRONG_SIZE = 'WRONG_SIZE'
}

export enum RequestType {
  CREATE = 'CREATE',
  REQUEST = 'REQUEST',
  UNKNOWN = 'UNKNOWN'
}

export enum ReturnType {
  EXCHANGE = 'EXCHANGE',
  MONEY_BACK = 'MONEY_BACK',
  REPLACEMENT = 'REPLACEMENT',
  UNKNOWN = 'UNKNOWN'
}

export enum GetReturnFieldGroupEnum {
  FULL = 'FULL',
  NONE = 'NONE',
  SUMMARY = 'SUMMARY'
}

export enum EscalateReason {
  BUYER_NORESPONSE = 'BUYER_NORESPONSE',
  BUYER_RETURNED_WRONG_ITEM = 'BUYER_RETURNED_WRONG_ITEM',
  DISAGREE_WITH_RETURN_REASON = 'DISAGREE_WITH_RETURN_REASON',
  ITEM_NOT_RECEIVED = 'ITEM_NOT_RECEIVED',
  ITEM_RECEIVED_IN_DIFFERENT_CONDITION = 'ITEM_RECEIVED_IN_DIFFERENT_CONDITION',
  NEW_ITEM_NOT_RECEIVED = 'NEW_ITEM_NOT_RECEIVED',
  NO_REFUND_FOR_RETURN_SHIPPING = 'NO_REFUND_FOR_RETURN_SHIPPING',
  NO_REFUND_RECEIVED = 'NO_REFUND_RECEIVED',
  OTHER = 'OTHER',
  RECEIVED_WRONG_ITEM = 'RECEIVED_WRONG_ITEM',
  SELLER_NO_RESPONSE = 'SELLER_NO_RESPONSE',
  TROUBLE_COMMUNICATION_WITH_BUYER = 'TROUBLE_COMMUNICATION_WITH_BUYER',
  TROUBLE_COMMUNICATION_WITH_SELLER = 'TROUBLE_COMMUNICATION_WITH_SELLER'
}

export enum Decision {
  ACCEPT_PARTIAL_REFUND = 'ACCEPT_PARTIAL_REFUND',
  ACCEPT_REPLACEMENT_OFFER = 'ACCEPT_REPLACEMENT_OFFER',
  APPROVE = 'APPROVE',
  APPROVE_WITHOUT_EBAY_LABEL = 'APPROVE_WITHOUT_EBAY_LABEL',
  DECLINE = 'DECLINE',
  DECLINE_PARTIAL_REFUND = 'DECLINE_PARTIAL_REFUND',
  DECLINE_REPLACEMENT_OFFER = 'DECLINE_REPLACEMENT_OFFER',
  OFFER_PARTIAL_REFUND = 'OFFER_PARTIAL_REFUND',
  OFFER_REPLACEMENT = 'OFFER_REPLACEMENT',
  OFFER_RETURN = 'OFFER_RETURN',
  OFFER_RETURN_WITHOUT_LABEL = 'OFFER_RETURN_WITHOUT_LABEL',
  PROVIDE_RMA = 'PROVIDE_RMA',
  UNKNOWN = 'UNKNOWN'
}

export enum CategoryType {
  MOTORS_VEHICLES = 'MOTORS_VEHICLES',
  ALL_EXCLUDING_MOTORS_VEHICLES = 'ALL_EXCLUDING_MOTORS_VEHICLES'
}

export enum ReturnCountFilter {
  ALL_OPEN = 'ALL_OPEN',
  ALL_OPEN_REPLACEMENT = 'ALL_OPEN_REPLACEMENT',
  ALL_OPEN_RETURN = 'ALL_OPEN_RETURN',
  CLOSED = 'CLOSED',
  EBAY_PLUS = 'EBAY_PLUS',
  ITEM_DELIVERED = 'ITEM_DELIVERED',
  ITEM_SHIPPED = 'ITEM_SHIPPED',
  RETURN_STARTED = 'RETURN_STARTED',
  SELLER_ACTION_DUE = 'SELLER_ACTION_DUE',
  SELLER_ACTION_OVERDUE = 'SELLER_ACTION_OVERDUE',
  SELLER_NO_ACTION = 'SELLER_NO_ACTION',
  UNKNOWN = 'UNKNOWN'
}

export enum ReturnState {
  AUTO_REFUND_INITIATED = 'AUTO_REFUND_INITIATED',
  CLOSED = 'CLOSED',
  INITIAL = 'INITIAL',
  ITEM_DELIVERED = 'ITEM_DELIVERED',
  ITEM_KEPT = 'ITEM_KEPT',
  ITEM_READY_TO_SHIP = 'ITEM_READY_TO_SHIP',
  ITEM_SHIPPED = 'ITEM_SHIPPED',
  LESS_THAN_A_FULL_REFUND_ISSUED = 'LESS_THAN_A_FULL_REFUND_ISSUED',
  PARTIAL_REFUND_AS_PAYOUT_INITIATED = 'PARTIAL_REFUND_AS_PAYOUT_INITIATED',
  PARTIAL_REFUND_DECLINED = 'PARTIAL_REFUND_DECLINED',
  PARTIAL_REFUND_FAILED = 'PARTIAL_REFUND_FAILED',
  PARTIAL_REFUND_INITIATED = 'PARTIAL_REFUND_INITIATED',
  PARTIAL_REFUND_NON_PAYPAL_INITIATED = 'PARTIAL_REFUND_NON_PAYPAL_INITIATED',
  PARTIAL_REFUND_REQUESTED = 'PARTIAL_REFUND_REQUESTED',
  PARTIAL_REFUNDED = 'PARTIAL_REFUNDED',
  PAYOUT_INITIATED = 'PAYOUT_INITIATED',
  REFUND_AS_PAYOUT_INITIATED = 'REFUND_AS_PAYOUT_INITIATED',
  REFUND_FAILED = 'REFUND_FAILED',
  REFUND_INITIATED = 'REFUND_INITIATED',
  REFUND_SENT_PENDING_CONFIRMATION = 'REFUND_SENT_PENDING_CONFIRMATION',
  REFUND_TIMEOUT = 'REFUND_TIMEOUT',
  REPLACED = 'REPLACED',
  REPLACEMENT_CLOSED = 'REPLACEMENT_CLOSED',
  REPLACEMENT_DELIVERED = 'REPLACEMENT_DELIVERED',
  REPLACEMENT_LABEL_PENDING = 'REPLACEMENT_LABEL_PENDING',
  REPLACEMENT_LABEL_PENDING_TIMEOUT = 'REPLACEMENT_LABEL_PENDING_TIMEOUT',
  REPLACEMENT_LABEL_REQUESTED = 'REPLACEMENT_LABEL_REQUESTED',
  REPLACEMENT_LABEL_REQUESTED_TIMEOUT = 'REPLACEMENT_LABEL_REQUESTED_TIMEOUT',
  REPLACEMENT_OFFER_PENDING = 'REPLACEMENT_OFFER_PENDING',
  REPLACEMENT_REQUEST_TIMEOUT = 'REPLACEMENT_REQUEST_TIMEOUT',
  REPLACEMENT_REQUESTED = 'REPLACEMENT_REQUESTED',
  REPLACEMENT_RMA_PENDING = 'REPLACEMENT_RMA_PENDING',
  REPLACEMENT_SHIPPED = 'REPLACEMENT_SHIPPED',
  REPLACEMENT_STARTED = 'REPLACEMENT_STARTED',
  RETURN_LABEL_PENDING = 'RETURN_LABEL_PENDING',
  RETURN_LABEL_PENDING_TIMEOUT = 'RETURN_LABEL_PENDING_TIMEOUT',
  RETURN_LABEL_REQUESTED = 'RETURN_LABEL_REQUESTED',
  RETURN_LABEL_REQUESTED_TIMEOUT = 'RETURN_LABEL_REQUESTED_TIMEOUT',
  RETURN_REJECTED = 'RETURN_REJECTED',
  RETURN_REQUEST_TIMEOUT = 'RETURN_REQUEST_TIMEOUT',
  RETURN_REQUESTED = 'RETURN_REQUESTED',
  RMA_PENDING = 'RMA_PENDING',
  UNKNOWN = 'UNKNOWN'
}

export enum FilePurpose {
  ITEM_RELATED = 'ITEM_RELATED',
  LABEL_RELATED = 'LABEL_RELATED',
  REFUND_RELATED = 'REFUND_RELATED',
  UNKNOWN = 'UNKNOWN'
}

export enum RefundFeeType {
  DOMESTIC_SHIPPING = 'DOMESTIC_SHIPPING',
  IMPORT_CHARGE = 'IMPORT_CHARGE',
  INTERNATIONAL_SHIPPING = 'INTERNATIONAL_SHIPPING',
  ITEM_IMPORT_TAX = 'ITEM_IMPORT_TAX',
  ITEM_TAX = 'ITEM_TAX',
  ORDER_ADJUSTMENT = 'ORDER_ADJUSTMENT',
  ORIGINAL_SHIPPING = 'ORIGINAL_SHIPPING',
  OTHER = 'OTHER',
  PURCHASE_PRICE = 'PURCHASE_PRICE',
  REFUND_FROM_PAYPAL = 'REFUND_FROM_PAYPAL',
  RETURN_SHIPPING = 'RETURN_SHIPPING',
  SHIPPING_IMPORT_TAX = 'SHIPPING_IMPORT_TAX',
  SHIPPING_TAX = 'SHIPPING_TAX'
}

export enum ActivityOption {
  AUTO_APPROVE_REMORSE = 'AUTO_APPROVE_REMORSE',
  BUYER_ACCEPT_REPLACEMENT_OFFER = 'BUYER_ACCEPT_REPLACEMENT_OFFER',
  BUYER_ACCEPTS_NON_PAYPAL_PARTIAL_REFUND = 'BUYER_ACCEPTS_NON_PAYPAL_PARTIAL_REFUND',
  BUYER_ACCEPTS_PARTIAL_REFUND = 'BUYER_ACCEPTS_PARTIAL_REFUND',
  BUYER_CLOSE_RETURN = 'BUYER_CLOSE_RETURN',
  BUYER_CREATE_RETURN = 'BUYER_CREATE_RETURN',
  BUYER_DECLINE_PARTIAL_REFUND = 'BUYER_DECLINE_PARTIAL_REFUND',
  BUYER_DECLINE_REPLACEMENT_OFFER = 'BUYER_DECLINE_REPLACEMENT_OFFER',
  BUYER_ESCALATE = 'BUYER_ESCALATE',
  BUYER_MARK_AS_RECEIVED = 'BUYER_MARK_AS_RECEIVED',
  BUYER_MARK_REFUND_RECEIVED = 'BUYER_MARK_REFUND_RECEIVED',
  BUYER_MARK_RETURN_SHIPPED = 'BUYER_MARK_RETURN_SHIPPED',
  BUYER_PRINT_SHIPPING_LABEL = 'BUYER_PRINT_SHIPPING_LABEL',
  BUYER_PROVIDE_LABEL = 'BUYER_PROVIDE_LABEL',
  BUYER_PROVIDE_TRACKING_INFO = 'BUYER_PROVIDE_TRACKING_INFO',
  BUYER_SEND_MESSAGE = 'BUYER_SEND_MESSAGE',
  BUYER_UPDATE_TRACKING = 'BUYER_UPDATE_TRACKING',
  BUYER_VOID_LABEL = 'BUYER_VOID_LABEL',
  CHARGEBACK_OPEN = 'CHARGEBACK_OPEN',
  DELETE_FILE = 'DELETE_FILE',
  EMAIL_SHIPPING_LABEL = 'EMAIL_SHIPPING_LABEL',
  EXTERNAL_CLAIM_OPENED = 'EXTERNAL_CLAIM_OPENED',
  GENERAL_TIME_OUT = 'GENERAL_TIME_OUT',
  NOTIFIED_DELIVERED = 'NOTIFIED_DELIVERED',
  NOTIFIED_SHIPPED = 'NOTIFIED_SHIPPED',
  NOTIFY_REPLACEMENT_DELIVERED = 'NOTIFY_REPLACEMENT_DELIVERED',
  NOTIFY_REPLACEMENT_SHIPPED = 'NOTIFY_REPLACEMENT_SHIPPED',
  NOTIFY_UPDATE_REFUND_STATUS = 'NOTIFY_UPDATE_REFUND_STATUS',
  OTHER = 'OTHER',
  REMINDER_BUYER_TO_RESPOND_RE_OFFER = 'REMINDER_BUYER_TO_RESPOND_RE_OFFER',
  REMINDER_BUYER_TO_SHIP = 'REMINDER_BUYER_TO_SHIP',
  REMINDER_FOR_REFUND = 'REMINDER_FOR_REFUND',
  REMINDER_FOR_REFUND_NO_SHIPPING = 'REMINDER_FOR_REFUND_NO_SHIPPING',
  REMINDER_FOR_RMA = 'REMINDER_FOR_RMA',
  REMINDER_FOR_SHIPPING = 'REMINDER_FOR_SHIPPING',
  REMINDER_SELLER_TO_RESPOND = 'REMINDER_SELLER_TO_RESPOND',
  REMINDER_SELLER_TO_SHIP = 'REMINDER_SELLER_TO_SHIP',
  SELLER_APPROVE_REQUEST = 'SELLER_APPROVE_REQUEST',
  SELLER_DECLINE_REQUEST = 'SELLER_DECLINE_REQUEST',
  SELLER_ESCALATE = 'SELLER_ESCALATE',
  SELLER_ISSUE_REFUND = 'SELLER_ISSUE_REFUND',
  SELLER_ISSUE_STORE_CREDIT_REFUND = 'SELLER_ISSUE_STORE_CREDIT_REFUND',
  SELLER_MARK_AS_RECEIVED = 'SELLER_MARK_AS_RECEIVED',
  SELLER_MARK_REFUND_SENT = 'SELLER_MARK_REFUND_SENT',
  SELLER_MARK_REPLACEMENT_SHIPPED = 'SELLER_MARK_REPLACEMENT_SHIPPED',
  SELLER_OFFER_PARTIAL_REFUND = 'SELLER_OFFER_PARTIAL_REFUND',
  SELLER_OFFER_REPLACEMENT = 'SELLER_OFFER_REPLACEMENT',
  SELLER_OFFER_RETURNS = 'SELLER_OFFER_RETURNS',
  SELLER_PRINT_SHIPPING_LABEL = 'SELLER_PRINT_SHIPPING_LABEL',
  SELLER_PROVIDE_LABEL = 'SELLER_PROVIDE_LABEL',
  SELLER_PROVIDE_RMA = 'SELLER_PROVIDE_RMA',
  SELLER_PROVIDE_TRACKING_INFO = 'SELLER_PROVIDE_TRACKING_INFO',
  SELLER_RETRY_REFUND = 'SELLER_RETRY_REFUND',
  SELLER_SEND_MESSAGE = 'SELLER_SEND_MESSAGE',
  SELLER_UPDATE_TRACKING = 'SELLER_UPDATE_TRACKING',
  SELLER_VOID_LABEL = 'SELLER_VOID_LABEL',
  SUBMIT_FILE = 'SUBMIT_FILE',
  SYSTEM_BUYER_PARTIAL_REFUND_AS_PAYOUT = 'SYSTEM_BUYER_PARTIAL_REFUND_AS_PAYOUT',
  SYSTEM_BUYER_REFUND_AS_PAYOUT = 'SYSTEM_BUYER_REFUND_AS_PAYOUT',
  SYSTEM_CLOSE_RETURN = 'SYSTEM_CLOSE_RETURN',
  SYSTEM_CREATE_RETURN = 'SYSTEM_CREATE_RETURN',
  SYSTEM_IMMEDIATE_REFUND = 'SYSTEM_IMMEDIATE_REFUND',
  TIME_OUT_AFTER_DECLINE = 'TIME_OUT_AFTER_DECLINE',
  TIME_OUT_AFTER_REFUNDED = 'TIME_OUT_AFTER_REFUNDED',
  TIME_OUT_AFTER_REFUNDED_AS_PAYOUT = 'TIME_OUT_AFTER_REFUNDED_AS_PAYOUT',
  TIME_OUT_AFTER_REPLACED = 'TIME_OUT_AFTER_REPLACED',
  TIME_OUT_FOR_AUTHORIZE = 'TIME_OUT_FOR_AUTHORIZE',
  TIME_OUT_FOR_AUTO_REFUND = 'TIME_OUT_FOR_AUTO_REFUND',
  TIME_OUT_FOR_BUYER_RECOUP = 'TIME_OUT_FOR_BUYER_RECOUP',
  TIME_OUT_FOR_DELIVERY = 'TIME_OUT_FOR_DELIVERY',
  TIME_OUT_FOR_ESCALATION = 'TIME_OUT_FOR_ESCALATION',
  TIME_OUT_FOR_ESCALATION_AFTER_SMIR = 'TIME_OUT_FOR_ESCALATION_AFTER_SMIR',
  TIME_OUT_FOR_ITEM_REPLACED = 'TIME_OUT_FOR_ITEM_REPLACED',
  TIME_OUT_FOR_MARK_REFUND_RECEIVED = 'TIME_OUT_FOR_MARK_REFUND_RECEIVED',
  TIME_OUT_FOR_MARK_REFUND_SENT = 'TIME_OUT_FOR_MARK_REFUND_SENT',
  TIME_OUT_FOR_MASS_PAYOUT = 'TIME_OUT_FOR_MASS_PAYOUT',
  TIME_OUT_FOR_PAYOUT = 'TIME_OUT_FOR_PAYOUT',
  TIME_OUT_FOR_PROVIDE_LABEL = 'TIME_OUT_FOR_PROVIDE_LABEL',
  TIME_OUT_FOR_REFUND = 'TIME_OUT_FOR_REFUND',
  TIME_OUT_FOR_REPLACEMENT_DELIVERED_ITEM_NOT_RETURNED = 'TIME_OUT_FOR_REPLACEMENT_DELIVERED_ITEM_NOT_RETURNED',
  TIME_OUT_FOR_REPLACEMENT_SHIPPED = 'TIME_OUT_FOR_REPLACEMENT_SHIPPED',
  TIME_OUT_FOR_RETURN_SHIPPING = 'TIME_OUT_FOR_RETURN_SHIPPING',
  TIME_OUT_FOR_RMA = 'TIME_OUT_FOR_RMA',
  TIME_OUT_FOR_SELLER_INVOICE = 'TIME_OUT_FOR_SELLER_INVOICE',
  TIME_OUT_FOR_SELLER_PAYOUT = 'TIME_OUT_FOR_SELLER_PAYOUT',
  TIME_OUT_FOR_SHIPMENT_TRACKING = 'TIME_OUT_FOR_SHIPMENT_TRACKING',
  TIME_OUT_FOR_SHIPPING = 'TIME_OUT_FOR_SHIPPING',
  TIME_OUT_FOR_SHIPPING_SYSTEM_CLOSE = 'TIME_OUT_FOR_SHIPPING_SYSTEM_CLOSE',
}

export enum StoreType {
  STORE = 'STORE',
  WAREHOUSE = 'WAREHOUSE'
}

export enum TimeDurationUnit {
  YEAR = 'YEAR',
  MONTH = 'MONTH',
  DAY = 'DAY',
  HOUR = 'HOUR',
  CALENDAR_DAY = 'CALENDAR_DAY',
  BUSINESS_DAY = 'BUSINESS_DAY',
  MINUTE = 'MINUTE',
  SECOND = 'SECOND',
  MILLISECOND = 'MILLISECOND'
}

export enum ShippingOptionType {
  DOMESTIC = 'DOMESTIC',
  INTERNATIONAL = 'INTERNATIONAL'
}

export enum ShippingCostType {
  CALCULATED = 'CALCULATED',
  FLAT_RATE = 'FLAT_RATE',
  NOT_SPECIFIED = 'NOT_SPECIFIED'
}

export enum PaymentsProgramType {
  EBAY_PAYMENTS = 'EBAY_PAYMENTS'
}

export enum PaymentsProgramStatus {
  OPTED_IN = 'OPTED_IN',
  NOT_OPTED_IN = 'NOT_OPTED_IN'
}

export enum PaymentMethodType {
  CASH_IN_PERSON = 'CASH_IN_PERSON',
  CASH_ON_DELIVERY = 'CASH_ON_DELIVERY',
  CASH_ON_PICKUP = 'CASH_ON_PICKUP',
  CASHIER_CHECK = 'CASHIER_CHECK',
  CREDIT_CARD = 'CREDIT_CARD',
  ESCROW = 'ESCROW',
  INTEGRATED_MERCHANT_CREDIT_CARD = 'INTEGRATED_MERCHANT_CREDIT_CARD',
  LOAN_CHECK = 'LOAN_CHECK',
  MONEY_ORDER = 'MONEY_ORDER',
  PAISA_PAY = 'PAISA_PAY',
  PAISA_PAY_ESCROW = 'PAISA_PAY_ESCROW',
  PAISA_PAY_ESCROW_EMI = 'PAISA_PAY_ESCROW_EMI',
  PAYPAL = 'PAYPAL',
  PERSONAL_CHECK = 'PERSONAL_CHECK',
  OTHER = 'OTHER'
}

export enum RecipientAccountReferenceType {
  PAYPAL_EMAIL = 'PAYPAL_EMAIL'
}

export enum CurrencyCode {
  AED = 'AED',
  AFN = 'AFN',
  ALL = 'ALL',
  AMD = 'AMD',
  ANG = 'ANG',
  AOA = 'AOA',
  ARS = 'ARS',
  AUD = 'AUD',
  AWG = 'AWG',
  AZN = 'AZN',
  BAM = 'BAM',
  BBD = 'BBD',
  BDT = 'BDT',
  BGN = 'BGN',
  BHD = 'BHD',
  BIF = 'BIF',
  BMD = 'BMD',
  BND = 'BND',
  BOB = 'BOB',
  BRL = 'BRL',
  BSD = 'BSD',
  BTN = 'BTN',
  BWP = 'BWP',
  BYR = 'BYR',
  BZD = 'BZD',
  CAD = 'CAD',
  CDF = 'CDF',
  CHF = 'CHF',
  CLP = 'CLP',
  CNY = 'CNY',
  COP = 'COP',
  CRC = 'CRC',
  CUP = 'CUP',
  CVE = 'CVE',
  CZK = 'CZK',
  DJF = 'DJF',
  DKK = 'DKK',
  DOP = 'DOP',
  DZD = 'DZD',
  EGP = 'EGP',
  ERN = 'ERN',
  ETB = 'ETB',
  EUR = 'EUR',
  FJD = 'FJD',
  FKP = 'FKP',
  GBP = 'GBP',
  GEL = 'GEL',
  GHS = 'GHS',
  GIP = 'GIP',
  GMD = 'GMD',
  GNF = 'GNF',
  GTQ = 'GTQ',
  GYD = 'GYD',
  HKD = 'HKD',
  HNL = 'HNL',
  HRK = 'HRK',
  HTG = 'HTG',
  HUF = 'HUF',
  IDR = 'IDR',
  ILS = 'ILS',
  INR = 'INR',
  IQD = 'IQD',
  IRR = 'IRR',
  ISK = 'ISK',
  JMD = 'JMD',
  JOD = 'JOD',
  JPY = 'JPY',
  KES = 'KES',
  KGS = 'KGS',
  KHR = 'KHR',
  KMF = 'KMF',
  KPW = 'KPW',
  KRW = 'KRW',
  KWD = 'KWD',
  KYD = 'KYD',
  KZT = 'KZT',
  LAK = 'LAK',
  LBP = 'LBP',
  LKR = 'LKR',
  LRD = 'LRD',
  LSL = 'LSL',
  LTL = 'LTL',
  LYD = 'LYD',
  MAD = 'MAD',
  MDL = 'MDL',
  MGA = 'MGA',
  MKD = 'MKD',
  MMK = 'MMK',
  MNT = 'MNT',
  MOP = 'MOP',
  MRO = 'MRO',
  MUR = 'MUR',
  MVR = 'MVR',
  MWK = 'MWK',
  MXN = 'MXN',
  MYR = 'MYR',
  MZN = 'MZN',
  NAD = 'NAD',
  NGN = 'NGN',
  NIO = 'NIO',
  NOK = 'NOK',
  NPR = 'NPR',
  NZD = 'NZD',
  OMR = 'OMR',
  PAB = 'PAB',
  PEN = 'PEN',
  PGK = 'PGK',
  PHP = 'PHP',
  PKR = 'PKR',
  PLN = 'PLN',
  PYG = 'PYG',
  QAR = 'QAR',
  RON = 'RON',
  RSD = 'RSD',
  RUB = 'RUB',
  RWF = 'RWF',
  SAR = 'SAR',
  SBD = 'SBD',
  SCR = 'SCR',
  SDG = 'SDG',
  SEK = 'SEK',
  SGD = 'SGD',
  SHP = 'SHP',
  SLL = 'SLL',
  SOS = 'SOS',
  SRD = 'SRD',
  STD = 'STD',
  SYP = 'SYP',
  SZL = 'SZL',
  THB = 'THB',
  TJS = 'TJS',
  TMT = 'TMT',
  TND = 'TND',
  TOP = 'TOP',
  TRY = 'TRY',
  TTD = 'TTD',
  TWD = 'TWD',
  TZS = 'TZS',
  UAH = 'UAH',
  UGX = 'UGX',
  USD = 'USD',
  UYU = 'UYU',
  UZS = 'UZS',
  VEF = 'VEF',
  VND = 'VND',
  VUV = 'VUV',
  WST = 'WST',
  XAF = 'XAF',
  XCD = 'XCD',
  XOF = 'XOF',
  XPF = 'XPF',
  YER = 'YER',
  ZAR = 'ZAR',
  ZMW = 'ZMW',
  ZWL = 'ZWL'
}

export enum Condition {
  NEW = 'NEW',
  LIKE_NEW = 'LIKE_NEW',
  NEW_OTHER = 'NEW_OTHER',
  NEW_WITH_DEFECTS = 'NEW_WITH_DEFECTS',
  MANUFACTURER_REFURBISHED = 'MANUFACTURER_REFURBISHED',
  SELLER_REFURBISHED = 'SELLER_REFURBISHED',
  USED_EXCELLENT = 'USED_EXCELLENT',
  USED_VERY_GOOD = 'USED_VERY_GOOD',
  USED_GOOD = 'USED_GOOD',
  USED_ACCEPTABLE = 'USED_ACCEPTABLE',
  FOR_PARTS_OR_NOT_WORKING = 'FOR_PARTS_OR_NOT_WORKING'
}

export enum Locale {
  en_US = 'en_US',
  en_CA = 'en_CA',
  fr_CA = 'fr_CA',
  en_GB = 'en_GB',
  en_AU = 'en_AU',
  en_IN = 'en_IN',
  de_AT = 'de_AT',
  fr_BE = 'fr_BE',
  fr_FR = 'fr_FR',
  de_DE = 'de_DE',
  it_IT = 'it_IT',
  nl_BE = 'nl_BE',
  nl_NL = 'nl_NL',
  es_ES = 'es_ES',
  de_CH = 'de_CH',
  fi_FI = 'fi_FI',
  zh_HK = 'zh_HK',
  hu_HU = 'hu_HU',
  en_PH = 'en_PH',
  pl_PL = 'pl_PL',
  pt_PT = 'pt_PT',
  ru_RU = 'ru_RU',
  en_SG = 'en_SG',
  en_IE = 'en_IE',
  en_MY = 'en_MY'
}

export enum ContentLanguage {
  de_AT = 'de-AT',
  de_CH = 'de-CH',
  de_DE = 'de-DE',
  en_AU = 'en-AU',
  en_CA = 'en-CA',
  en_GB = 'en-GB',
  en_IE = 'en-IE',
  en_PH = 'en-PH',
  en_US = 'en-US',
  es_ES = 'es-ES',
  fr_BE = 'fr-BE',
  fr_CA = 'fr-CA',
  fr_FR = 'fr-FR',
  it_IT = 'it-IT',
  nl_BE = 'nl-BE',
  nl_NL = 'nl-NL',
  pl_PL = 'pl-PL',
  th_TH = 'th-TH',
  zh_HK = 'zh-HK',
  zh_TW = 'zh-TW',
}

export enum FormatType {
  AUCTION = 'AUCTION',
  FIXED_PRICE = 'FIXED_PRICE'
}