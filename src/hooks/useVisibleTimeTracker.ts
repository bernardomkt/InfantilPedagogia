import { useEffect, useRef } from 'react';

const REQUIRED_VISIBLE_MS = 60000; // 60 seconds
const SESSION_SHOWN_KEY = 'complementary_offer_shown';
const ELAPSED_TIME_KEY = 'visible_time_elapsed_ms';

interface UseVisibleTimeTrackerOptions {
  onTrigger: () => void;
  isBlocked?: boolean; // Blocked if user is leaving for checkout or another modal is open
}

export const useVisibleTimeTracker = ({
  onTrigger,
  isBlocked = false,
}: UseVisibleTimeTrackerOptions) => {
  const isBlockedRef = useRef(isBlocked);
  isBlockedRef.current = isBlocked;

  const onTriggerRef = useRef(onTrigger);
  onTriggerRef.current = onTrigger;

  useEffect(() => {
    // If already shown during this session, do nothing
    if (sessionStorage.getItem(SESSION_SHOWN_KEY) === 'true') {
      return;
    }

    let elapsed = parseInt(sessionStorage.getItem(ELAPSED_TIME_KEY) || '0', 10);
    if (isNaN(elapsed)) elapsed = 0;

    let lastTick = document.visibilityState === 'visible' ? Date.now() : null;

    const checkAndTrigger = () => {
      if (elapsed >= REQUIRED_VISIBLE_MS) {
        if (!isBlockedRef.current) {
          sessionStorage.setItem(SESSION_SHOWN_KEY, 'true');
          onTriggerRef.current();
        }
      }
    };

    const interval = setInterval(() => {
      if (sessionStorage.getItem(SESSION_SHOWN_KEY) === 'true') {
        clearInterval(interval);
        return;
      }

      if (document.visibilityState === 'visible' && lastTick !== null) {
        const now = Date.now();
        const delta = now - lastTick;
        lastTick = now;
        elapsed += delta;
        sessionStorage.setItem(ELAPSED_TIME_KEY, String(elapsed));
        checkAndTrigger();
      }
    }, 1000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        lastTick = Date.now();
      } else {
        lastTick = null;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};
