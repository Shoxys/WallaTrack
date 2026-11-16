'use client';

import { useState } from 'react';
import { Button } from '@westpac/ui/button';
import { categoryForMcc } from '@/engine/engine';
import { formatMoney, parseAmountToCents } from '@/engine/money';
import type { Persona, PurchaseInput } from '@/engine/types';

export interface PayStatus {
  kind: 'held' | 'approved' | 'declined';
  purchase: PurchaseInput;
}

interface Props {
  persona: Persona;
  status: PayStatus | null;
  busy: boolean;
  onPay: (purchase: PurchaseInput) => void;
}

const THUMB: Record<string, string> = { pc: 'PC', 'uber-eats': 'UE', coffee: 'FW' };

/** Mock checkout with scripted demo purchases. No real payment is ever made. */
export function CheckoutScreen({ persona, status, busy, onPay }: Props) {
  const items = persona.wallatrack.demoPurchases;
  const [pickedId, setPickedId] = useState(items[0].id);
  const picked = items.find((i) => i.id === pickedId) ?? items[0];
  const amountCents = parseAmountToCents(picked.amount);
  const card = persona.accounts.find((a) => a.accountId === persona.wallatrack.spendingAccountId);

  const pay = () =>
    onPay({ merchant: picked.merchant, item: picked.item, amountCents, category: categoryForMcc(picked.merchantCategoryCode) });

  return (
    <>
      <section className="card">
        <h2>Checkout</h2>
        <div role="radiogroup" aria-label="Demo purchase">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={item.id === pickedId}
              className="pick"
              onClick={() => setPickedId(item.id)}
            >
              <span className="thumb" aria-hidden="true">
                {THUMB[item.id] ?? item.merchant.slice(0, 2).toUpperCase()}
              </span>
              <span>
                <strong>{item.item}</strong>
                <span className="muted" style={{ display: 'block' }}>
                  {item.merchant} · {categoryForMcc(item.merchantCategoryCode)}
                </span>
              </span>
              <span className="price">{formatMoney(parseAmountToCents(item.amount))}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="row" style={{ marginBottom: 10 }}>
          <span className="muted">Total to pay</span>
          <span className="total">{formatMoney(amountCents)}</span>
        </div>
        <div className="paycard" style={{ marginBottom: 12 }}>
          <span aria-hidden="true">▭</span>
          <span>
            {card?.displayName ?? 'Everyday'} debit card · {card?.maskedNumber.slice(-4) ?? '0000'}
          </span>
        </div>
        <Button look="primary" size="xlarge" block disabled={busy} onClick={pay}>
          Pay {formatMoney(amountCents)}
        </Button>
        <p className="muted" style={{ marginTop: 8 }}>
          Demo checkout. No real payment is made.
        </p>
      </section>

      {status && (
        <div className={`status ${status.kind === 'held' ? 'held' : status.kind === 'approved' ? 'done' : 'cancelled'}`} role="status">
          {status.kind === 'held' && `On hold: ${status.purchase.merchant} ${formatMoney(status.purchase.amountCents)}. Waiting for your call.`}
          {status.kind === 'approved' && `Paid: ${status.purchase.merchant} ${formatMoney(status.purchase.amountCents)}.`}
          {status.kind === 'declined' && `Cancelled: ${status.purchase.merchant} ${formatMoney(status.purchase.amountCents)}. Nothing was charged.`}
        </div>
      )}
    </>
  );
}
