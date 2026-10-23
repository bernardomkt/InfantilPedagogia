import React, { useState, useEffect } from 'react';
import { Translations } from '../translations';

interface CountdownTimerProps {
  deadlineIso?: string | null;
  timeZone?: string;
  t: Translations;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isEnded: boolean;
}

/**
 * Componente de Contagem Regressiva Real
 * Permanece desativado (retornando null) enquanto não existir prazo real configurado pelo proprietário.
 * Nenhuma demonstração técnica ou falsa urgência é exibida na interface pública.
 */
export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  deadlineIso = null,
  timeZone = 'Europe/Lisbon',
  t,
}) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    if (!deadlineIso) {
      setTimeRemaining(null);
      return;
    }

    const target = Date.parse(deadlineIso);
    if (isNaN(target)) {
      setTimeRemaining(null);
      return;
    }

    const calculate = () => {
      const diffMs = target - Date.now();
      if (diffMs <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isEnded: true,
        });
        return;
      }

      const totalSec = Math.floor(diffMs / 1000);
      const days = Math.floor(totalSec / 86400);
      const hours = Math.floor((totalSec % 86400) / 3600);
      const minutes = Math.floor((totalSec % 3600) / 60);
      const seconds = totalSec % 60;

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
        isEnded: false,
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [deadlineIso]);

  // Se não existir deadline real, permanece completamente desativado
  if (!deadlineIso || !timeRemaining) {
    return null;
  }

  return (
    <div className="my-4 flex flex-col items-center">
      {timeRemaining.isEnded ? (
        <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-xl text-sm font-bold border border-gray-300">
          {t.countdown.ended}
        </div>
      ) : (
        <div className="inline-flex items-center gap-2 bg-[#16223F] text-white px-5 py-2.5 rounded-xl border border-[#16223F] shadow-md">
          {timeRemaining.days > 0 && (
            <>
              <div className="flex flex-col items-center min-w-[36px]">
                <span className="text-xl sm:text-2xl font-black font-mono">
                  {String(timeRemaining.days).padStart(2, '0')}
                </span>
                <small className="text-[10px] uppercase opacity-75">
                  {t.countdown.days}
                </small>
              </div>
              <span className="text-lg font-black opacity-60 mb-2">:</span>
            </>
          )}

          <div className="flex flex-col items-center min-w-[36px]">
            <span className="text-xl sm:text-2xl font-black font-mono">
              {String(timeRemaining.hours).padStart(2, '0')}
            </span>
            <small className="text-[10px] uppercase opacity-75">
              {t.countdown.hours}
            </small>
          </div>

          <span className="text-lg font-black opacity-60 mb-2">:</span>

          <div className="flex flex-col items-center min-w-[36px]">
            <span className="text-xl sm:text-2xl font-black font-mono">
              {String(timeRemaining.minutes).padStart(2, '0')}
            </span>
            <small className="text-[10px] uppercase opacity-75">
              {t.countdown.minutes}
            </small>
          </div>

          <span className="text-lg font-black opacity-60 mb-2">:</span>

          <div className="flex flex-col items-center min-w-[36px]">
            <span className="text-xl sm:text-2xl font-black font-mono">
              {String(timeRemaining.seconds).padStart(2, '0')}
            </span>
            <small className="text-[10px] uppercase opacity-75">
              {t.countdown.seconds}
            </small>
          </div>
        </div>
      )}

      <span className="text-[11px] text-gray-500 mt-1">
        {t.countdown.timezoneLabel} {timeZone}
      </span>
    </div>
  );
};
