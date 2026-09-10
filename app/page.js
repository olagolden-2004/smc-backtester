"use client";

import { useState } from "react";

export default function Home() {
  const [pair, setPair] = useState("GBPUSD");
  const [timeframe, setTimeframe] = useState("15M");

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <header className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
        <div>
          <h1 className="text-lg font-bold">SMC Backtester</h1>
          <p className="text-xs text-gray-400">
            Smart Money Concepts Backtesting
          </p>
        </div>

        <div className="flex gap-2">
          <select
            value={pair}
            onChange={(e) => setPair(e.target.value)}
            className="rounded bg-[#151b23] px-3 py-2 text-sm"
          >
            <option>GBPUSD</option>
            <option>USDJPY</option>
            <option>GBPJPY</option>
            <option>EURJPY</option>
            <option>EURGBP</option>
            <option>AUDUSD</option>
            <option>NZDUSD</option>
            <option>USDCAD</option>
            <option>USDCHF</option>
          </select>

          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="rounded bg-[#151b23] px-3 py-2 text-sm"
          >
            <option>1M</option>
            <option>3M</option>
            <option>5M</option>
            <option>15M</option>
            <option>30M</option>
            <option>1H</option>
            <option>4H</option>
            <option>1D</option>
          </select>
        </div>
      </header>

      <section className="grid gap-4 p-4 md:grid-cols-[1fr_280px]">
        <div className="overflow-hidden rounded-lg border border-gray-800 bg-[#10161d]">
          <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
            <div>
              <span className="font-semibold">{pair}</span>
              <span className="ml-2 text-sm text-gray-400">
                {timeframe}
              </span>
            </div>

            <span className="text-xs text-green-400">BACKTEST MODE</span>
          </div>

          <div className="flex h-[500px] items-center justify-center">
            <div className="text-center">
              <div className="mb-3 text-5xl">📊</div>
              <h2 className="text-xl font-semibold">
                Chart Coming Next
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Historical candlestick replay will be added here.
              </p>
            </div>
          </div>
        </div>

        <aside className="rounded-lg border border-gray-800 bg-[#10161d] p-4">
          <h2 className="mb-4 font-semibold">Backtest Panel</h2>

          <div className="space-y-3 text-sm">
            <div className="rounded bg-[#151b23] p-3">
              <p className="text-gray-400">Account Balance</p>
              <p className="mt-1 font-semibold">$10,000</p>
            </div>

            <div className="rounded bg-[#151b23] p-3">
              <p className="text-gray-400">Risk Per Trade</p>
              <p className="mt-1 font-semibold">1%</p>
            </div>

            <div className="rounded bg-[#151b23] p-3">
              <p className="text-gray-400">Trades</p>
              <p className="mt-1 font-semibold">0</p>
            </div>

            <div className="rounded bg-[#151b23] p-3">
              <p className="text-gray-400">Win Rate</p>
              <p className="mt-1 font-semibold">0%</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
    }
