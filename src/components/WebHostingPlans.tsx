import Link from 'next/link';
import { useCurrency } from '@/lib/CurrencyContext';
import { webHostingPlans } from '@/lib/siteContent';

export default function WebHostingPlans() {
  const { formatPrice, currency } = useCurrency();

  const plans = webHostingPlans;

  return (
    <div className="w-full max-w-[920px]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="relative p-6 rounded-[1.5rem] bg-gradient-to-br from-white/3 to-white/2 border border-white/6 text-white shadow-lg">
            {plan.badge && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black uppercase">{plan.badge}</div>
            )}

            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-black tracking-tight">{plan.name}</h4>
              <div className="text-sm text-gray-400">per month</div>
            </div>

            <div className="text-3xl font-extrabold mb-4">{formatPrice(plan.price)}</div>

            <ul className="text-sm text-gray-300 mb-6 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <Link href={`/webhosting#${plan.id}`} className="px-4 py-2 rounded-lg bg-transparent border border-white/10 text-white text-sm font-bold hover:bg-white/5">Details</Link>
              <Link href="#calculator" className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-500">Calculate</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-gray-400">Prices shown in {currency}. Use the calculator to estimate exact costs including taxes.</div>
    </div>
  );
}
